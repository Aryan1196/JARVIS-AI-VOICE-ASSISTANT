/**
 * Text-to-Speech Module for JARVIS
 * Calls Python edge-tts script for high-quality TTS
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
    pythonScript: path.join(__dirname, 'tts.py'),
    audioDir: path.join(__dirname, 'audio')
};

// Ensure audio directory exists
if (!fs.existsSync(TTS_CONFIG.audioDir)) {
    fs.mkdirSync(TTS_CONFIG.audioDir, { recursive: true });
}

/**
 * Generate TTS audio from text using Python edge-tts
 * @param {string} text - Text to convert to speech
 * @returns {Promise<Buffer>} - Audio buffer (MP3)
 */
export const generateSpeech = async (text) => {
    const outputFile = path.join(TTS_CONFIG.audioDir, `tts_${Date.now()}.mp3`);

    return new Promise((resolve, reject) => {
        const python = spawn('python', [TTS_CONFIG.pythonScript, text, outputFile]);

        let stderr = '';

        python.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        python.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Python TTS failed: ${stderr}`));
                return;
            }

            // Read the generated audio file
            fs.readFile(outputFile, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                // Clean up the temp file after reading
                fs.unlink(outputFile, () => { });

                resolve(data);
            });
        });

        python.on('error', (err) => {
            reject(new Error(`Failed to start Python: ${err.message}`));
        });
    });
};

export default {
    TTS_CONFIG,
    generateSpeech
};
