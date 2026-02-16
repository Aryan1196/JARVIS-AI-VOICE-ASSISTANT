import React, { useEffect, useState, useRef, useCallback } from 'react';
import { usePythonSpeech } from '../hooks/usePythonSpeech';
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
    const isSpeakingRef = useRef(false);
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
    };

    // Drag handler
    const handleMouseDown = (e) => {
        if (e.target.closest('.terminal-drag-handle')) {
            setIsDragging(true);
            dragOffset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
            e.preventDefault();
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
            if (isDragging) {
                const newX = Math.max(0, Math.min(window.innerWidth - 200, e.clientX - dragOffset.current.x));
                const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.current.y));
                setPosition({ x: newX, y: newY });
            }
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
            if (isDragging) {
                setIsDragging(false);
                localStorage.setItem('terminalPosition', JSON.stringify(position));
            }
            if (isResizing) {
                setIsResizing(false);
                setResizeType(null);
                localStorage.setItem('terminalSize', JSON.stringify(size));
            }
        };

        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isResizing, resizeType, position, size]);

    // Play TTS audio for JARVIS response
    const speakResponse = async (text) => {
        if (!settings.controls?.speaker) return;

        // Remove asterisks from text (e.g. from markdown bolding)
        const cleanText = text.replace(/\*/g, '');

        try {
            const response = await fetch(`${BACKEND_URL}/api/tts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: cleanText })
            });

            if (response.ok) {
                const audioBlob = await response.blob();
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audioRef.current = audio;
                isSpeakingRef.current = true;

                audio.onended = () => {
                    isSpeakingRef.current = false;
                };

                audio.play();
            }
        } catch (error) {
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

            setLogs((prev) => {
                const filtered = prev.filter(log => log !== '>> JARVIS: Thinking...');
                return [...filtered, `>> JARVIS: ${data.response}`];
            });

            speakResponse(data.response);
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

    const onFinalCallback = useCallback((finalText) => {
        // Barge-in: Stop any current TTS or processing immediately
        stopCurrentRequest();

        // Normalize text for dedup (remove all non-alphanumeric chars including spaces)
        const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

        const cleanFinal = normalize(finalText);
        const cleanLast = normalize(lastTranscriptRef.current.text);

        const now = Date.now();

        // Dedup check: 
        if (cleanLast && (now - lastTranscriptRef.current.time) < 3000) {
            if (cleanFinal === cleanLast) {
                console.log('Ignored duplicate transcript (exact match):', finalText);
                return;
            }
        }

        if (!cleanFinal) return; // Ignore empty after normalization

        lastTranscriptRef.current = { text: finalText, time: now };

        setInterim('');
        addLog(`>> USER: ${finalText}`);
        askJarvis(finalText);
    }, []);

    const { start, stop, isListening } = usePythonSpeech({
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
            className={`transcript-terminal ${isDragging ? 'dragging' : ''} ${isResizing ? 'resizing' : ''}`}
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

