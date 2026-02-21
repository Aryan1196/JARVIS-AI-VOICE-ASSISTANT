/**
 * Text-to-Speech Module for JARVIS
 * Uses a persistent Python worker process for fast TTS
 * Eliminates cold-start latency of spawning Python per request
 */

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TTS Configuration
export const TTS_CONFIG = {
    enabled: true,
    pythonWorker: path.join(__dirname, 'tts_worker.py'),
    pythonFallback: path.join(__dirname, 'tts.py'),
    audioDir: path.join(__dirname, 'audio')
};

// Ensure audio directory exists
if (!fs.existsSync(TTS_CONFIG.audioDir)) {
    fs.mkdirSync(TTS_CONFIG.audioDir, { recursive: true });
}

// Persistent worker state
let worker = null;
let workerReady = false;
let requestCounter = 0;
let pendingRequests = new Map(); // id -> { resolve, reject, audioChunks, expectedSize }

/**
 * Start the persistent TTS worker
 */
function startWorker() {
    if (worker) return;

    console.log('[TTS] Starting persistent TTS worker...');
    worker = spawn('python', [TTS_CONFIG.pythonWorker], {
        stdio: ['pipe', 'pipe', 'pipe']
    });

    let stderrBuffer = '';

    // Handle metadata responses on stderr
    worker.stderr.on('data', (data) => {
        stderrBuffer += data.toString();

        // Process complete lines
        const lines = stderrBuffer.split('\n');
        stderrBuffer = lines.pop(); // Keep incomplete line in buffer

        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            if (trimmed === 'TTS_WORKER_READY') {
                workerReady = true;
                console.log('[TTS] Worker is ready!');
                continue;
            }

            try {
                const meta = JSON.parse(trimmed);

                if (meta.error) {
                    console.error('[TTS] Worker error:', meta.error);
                    continue;
                }

                const pending = pendingRequests.get(meta.id);
                if (pending) {
                    pending.expectedSize = meta.size;

                    if (meta.size === 0) {
                        // Empty response
                        pendingRequests.delete(meta.id);
                        pending.resolve(Buffer.alloc(0));
                    }
                    // Otherwise wait for audio data on stdout
                    tryResolve(meta.id);
                }
            } catch (e) {
                // Not JSON, just log it
                if (trimmed) console.log('[TTS Worker]', trimmed);
            }
        }
    });

    // Collect audio data from stdout
    worker.stdout.on('data', (chunk) => {
        // Find which pending request this data belongs to
        // Requests are processed sequentially by the worker, so use the oldest pending
        for (const [id, pending] of pendingRequests) {
            if (pending.expectedSize !== null && pending.expectedSize > 0) {
                pending.audioChunks.push(chunk);
                pending.receivedSize = (pending.receivedSize || 0) + chunk.length;
                tryResolve(id);
                break;
            }
        }
    });

    worker.on('close', (code) => {
        console.log(`[TTS] Worker exited with code ${code}`);
        worker = null;
        workerReady = false;

        // Reject all pending requests
        for (const [id, pending] of pendingRequests) {
            pending.reject(new Error('TTS worker died'));
        }
        pendingRequests.clear();

        // Auto-restart after a delay
        setTimeout(() => {
            console.log('[TTS] Restarting worker...');
            startWorker();
        }, 1000);
    });

    worker.on('error', (err) => {
        console.error('[TTS] Worker spawn error:', err);
        worker = null;
        workerReady = false;
    });
}

/**
 * Check if a request has received all its audio data
 */
function tryResolve(id) {
    const pending = pendingRequests.get(id);
    if (!pending) return;
    if (pending.expectedSize === null) return; // Haven't received metadata yet

    const received = pending.receivedSize || 0;
    if (received >= pending.expectedSize) {
        pendingRequests.delete(id);
        const buffer = Buffer.concat(pending.audioChunks);
        pending.resolve(buffer);
    }
}

/**
 * Generate TTS audio - uses persistent worker, falls back to per-request spawn
 */
export const generateSpeech = async (text) => {
    // Try persistent worker first
    if (workerReady && worker) {
        return generateWithWorker(text);
    }

    // Fallback to legacy per-request spawn
    console.log('[TTS] Worker not ready, using fallback spawn');
    return generateWithSpawn(text);
};

/**
 * Generate speech using persistent worker (fast path)
 */
function generateWithWorker(text) {
    return new Promise((resolve, reject) => {
        const id = String(++requestCounter);

        const timeout = setTimeout(() => {
            pendingRequests.delete(id);
            reject(new Error('TTS worker timeout (15s)'));
        }, 15000);

        pendingRequests.set(id, {
            resolve: (buffer) => {
                clearTimeout(timeout);
                resolve(buffer);
            },
            reject: (err) => {
                clearTimeout(timeout);
                reject(err);
            },
            audioChunks: [],
            expectedSize: null,
            receivedSize: 0
        });

        // Send request to worker
        const request = JSON.stringify({ id, text }) + '\n';
        worker.stdin.write(request);
    });
}

/**
 * Fallback: Generate speech by spawning Python (slow path)
 */
function generateWithSpawn(text) {
    const outputFile = path.join(TTS_CONFIG.audioDir, `tts_${Date.now()}.mp3`);

    return new Promise((resolve, reject) => {
        const python = spawn('python', [TTS_CONFIG.pythonFallback, text, outputFile]);

        let stderr = '';

        python.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        python.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Python TTS failed: ${stderr}`));
                return;
            }

            fs.readFile(outputFile, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                fs.unlink(outputFile, () => { });
                resolve(data);
            });
        });

        python.on('error', (err) => {
            reject(new Error(`Failed to start Python: ${err.message}`));
        });
    });
}

// Start worker on module load
startWorker();

export default {
    TTS_CONFIG,
    generateSpeech
};
