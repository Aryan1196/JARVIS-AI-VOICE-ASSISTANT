import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDeepgram } from '../hooks/useDeepgram';
import { useBlob } from '../context/BlobContext';
import './TranscriptTerminal.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://jarvis-ai-voice-assistant.onrender.com';

const TranscriptTerminal = () => {
    const [logs, setLogs] = useState([]);
    const [interim, setInterim] = useState('');
    const [status, setStatus] = useState('STANDBY');
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef(null);
    const startedRef = useRef(false);
    const audioRef = useRef(null);
    const abortControllerRef = useRef(null);
    const ttsAbortControllerRef = useRef(null);
    const isSpeakingRef = useRef(false);
    const requestIdRef = useRef(0);
    const { settings } = useBlob();

    // Drag and resize state
    const [position, setPosition] = useState(() => {
        const saved = localStorage.getItem('terminalPosition');
        return saved ? JSON.parse(saved) : { x: window.innerWidth - 420, y: 80 };
    });
    const [size, setSize] = useState(() => {
        const saved = localStorage.getItem('terminalSize');
        return saved ? JSON.parse(saved) : { width: 400, height: 300 };
    });
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeType, setResizeType] = useState(null);
    const dragOffset = useRef({ x: 0, y: 0 });

    const addLog = (text) => {
        setLogs((prev) => [...prev.slice(-30), text]);
    };

    const handleStatus = useCallback((msg) => {
        setStatus((prev) => {
            if (prev !== msg) {
                // Check if the last log is identical to avoid spam
                setLogs((currentLogs) => {
                    const lastLog = currentLogs[currentLogs.length - 1];
                    if (lastLog === `>> SYSTEM: ${msg}`) {
                        return currentLogs;
                    }
                    return [...currentLogs.slice(-30), `>> SYSTEM: ${msg}`];
                });
            }
            return msg;
        });
    }, []);

    // Stop current audio and cancel pending requests
    const stopCurrentRequest = () => {
        // Increment request ID to invalidate any in-flight TTS responses
        requestIdRef.current += 1;

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
            isSpeakingRef.current = false;
        }
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        if (ttsAbortControllerRef.current) {
            ttsAbortControllerRef.current.abort();
            ttsAbortControllerRef.current = null;
        }
    };



    // Resize handler
    const handleResizeStart = (e, type) => {
        e.stopPropagation();
        setIsResizing(true);
        setResizeType(type);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                if (resizeType === 'width' || resizeType === 'corner') {
                    const newWidth = Math.max(300, Math.min(800, e.clientX - position.x));
                    setSize(prev => ({ ...prev, width: newWidth }));
                }
                if (resizeType === 'height' || resizeType === 'corner') {
                    const newHeight = Math.max(150, Math.min(600, e.clientY - position.y));
                    setSize(prev => ({ ...prev, height: newHeight }));
                }
            }
        };

        const handleMouseUp = () => {
            if (isResizing) {
                setIsResizing(false);
                setResizeType(null);
                localStorage.setItem('terminalSize', JSON.stringify(size));
            }
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, resizeType, position, size]);

    // Play TTS audio for JARVIS response
    const speakResponse = async (text) => {
        if (!settings.controls?.speaker) return;

        // Remove asterisks from text (e.g. from markdown bolding)
        const cleanText = text.replace(/\*/g, '');

        // Capture the current request ID so we can discard stale responses
        const myRequestId = requestIdRef.current;

        // Create a dedicated abort controller for this TTS fetch
        const ttsAbort = new AbortController();
        ttsAbortControllerRef.current = ttsAbort;

        try {
            const response = await fetch(`${BACKEND_URL}/api/tts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: cleanText }),
                signal: ttsAbort.signal
            });

            // Check if a new request has started while we were fetching
            if (myRequestId !== requestIdRef.current) {
                console.log('TTS response discarded (stale request)');
                return;
            }

            if (response.ok) {
                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);

                // Double-check staleness before playing
                if (myRequestId !== requestIdRef.current) {
                    console.log('TTS audio discarded (stale request)');
                    URL.revokeObjectURL(audioUrl);
                    return;
                }

                audioRef.current = audio;
                isSpeakingRef.current = true;

                audio.onended = () => {
                    isSpeakingRef.current = false;
                };

                audio.play();
            }
        } catch (error) {
            if (error.name === 'AbortError') return; // Expected when interrupted
            console.error('TTS playback error:', error);
        }
    };

    const askJarvis = async (query) => {
        stopCurrentRequest();
        setIsLoading(true);
        addLog('>> JARVIS: Thinking...');

        abortControllerRef.current = new AbortController();

        try {
            const response = await fetch(`${BACKEND_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: query }),
                signal: abortControllerRef.current.signal
            });

            const data = await response.json();

            let jarvisResponse = data.response;
            if (!response.ok || !jarvisResponse) {
                jarvisResponse = data.error || 'I encountered an internal error processing that command.';
            }

            setLogs((prev) => {
                const filtered = prev.filter(log => log !== '>> JARVIS: Thinking...');
                return [...filtered, `>> JARVIS: ${jarvisResponse}`];
            });

            if (jarvisResponse) {
                speakResponse(jarvisResponse);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                setLogs((prev) => prev.filter(log => log !== '>> JARVIS: Thinking...'));
                return;
            }
            setLogs((prev) => {
                const filtered = prev.filter(log => log !== '>> JARVIS: Thinking...');
                return [...filtered, '>> JARVIS: I apologize, I could not connect to my systems.'];
            });
        } finally {
            setIsLoading(false);
        }
    };

    const lastTranscriptRef = useRef({ text: '', time: 0 });
    const pendingTranscriptRef = useRef('');
    const debounceTimerRef = useRef(null);

    const onFinalCallback = useCallback((finalText) => {
        // Barge-in: Stop any current TTS or processing immediately
        stopCurrentRequest();

        // Normalize text for dedup (remove all non-alphanumeric chars including spaces)
        const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

        const cleanFinal = normalize(finalText);
        if (!cleanFinal) return; // Ignore empty after normalization

        // Accumulate into the pending buffer
        pendingTranscriptRef.current += (pendingTranscriptRef.current ? ' ' : '') + finalText;

        // Show the accumulated text as interim so the user sees their sentence building up
        setInterim(pendingTranscriptRef.current);

        // Reset debounce timer — wait 3s of silence before treating as a complete sentence
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        debounceTimerRef.current = setTimeout(() => {
            const fullText = pendingTranscriptRef.current.trim();
            pendingTranscriptRef.current = '';
            debounceTimerRef.current = null;

            if (!fullText) return;

            const cleanFull = normalize(fullText);
            const cleanLast = normalize(lastTranscriptRef.current.text);
            const now = Date.now();

            // Dedup check against last sent query
            if (cleanLast && (now - lastTranscriptRef.current.time) < 3000) {
                if (cleanFull === cleanLast) {
                    console.log('Ignored duplicate transcript (exact match):', fullText);
                    setInterim('');
                    return;
                }
            }

            lastTranscriptRef.current = { text: fullText, time: now };

            setInterim('');
            addLog(`>> USER: ${fullText}`);
            askJarvis(fullText);
        }, 3000);
    }, []);

    const { start, stop, isListening } = useDeepgram({
        onFinal: onFinalCallback,
        onInterim: (interimText) => {
            // Barge-in: Silence TTS immediately on interim speech detection
            if (isSpeakingRef.current) {
                stopCurrentRequest();
            }
            setInterim(interimText);
        },
        onStatus: handleStatus
    });

    // Handle mic toggle from settings or clicks
    useEffect(() => {
        // If mic is globally disabled, ensure we stop
        if (settings.controls?.mic === false) {
            if (isListening) stop();
            handleStatus('Mic Disabled');
            return;
        }

        // Only auto-start if not already listening and not explicitly stopped by user action (though here we assume auto-always)
        if (!isListening) {
            start();
        }

    }, [settings.controls?.mic, isListening, start, stop]); // Re-run when mic setting changes or listening state changes

    // Click to wake up (optional, mostly for when it drops)
    useEffect(() => {
        const handleClick = () => {
            if (settings.controls?.mic !== false && !isListening) {
                start();
            }
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [isListening, settings.controls?.mic, start]);


    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs, interim]);

    return (
        <div
            className={`transcript-terminal ${isResizing ? 'resizing' : ''}`}
            style={{
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height
            }}
        >
            {/* Resize handles */}
            <div className="terminal-resize-handle resize-right" onMouseDown={(e) => handleResizeStart(e, 'width')}></div>
            <div className="terminal-resize-handle resize-bottom" onMouseDown={(e) => handleResizeStart(e, 'height')}></div>
            <div className="terminal-resize-handle resize-corner" onMouseDown={(e) => handleResizeStart(e, 'corner')}></div>

            <div className="terminal-header terminal-drag-handle">
                {/* Drag disabled */}
                <span className="status-indicator" style={{
                    background: status === 'Listening' ? '#00ff88' :
                        status.includes('off') ? '#ff4444' :
                            isLoading ? '#00aaff' : '#ffaa00'
                }}></span>
                TERMINAL_v2.0.4 // {isLoading ? 'Processing...' : status}
            </div>

            <div className="terminal-content">
                {logs.map((l, i) => {
                    let lineClass = 'terminal-line';
                    if (l.includes('USER:')) lineClass += ' user-line';
                    else if (l.includes('JARVIS:')) lineClass += ' jarvis-line';
                    else if (l.includes('SYSTEM:')) lineClass += ' system-line';
                    return <div key={i} className={lineClass}>{l}</div>;
                })}

                {interim && (
                    <div className="terminal-line interim">
                        &gt;&gt; USER (listening): {interim}
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default TranscriptTerminal;

