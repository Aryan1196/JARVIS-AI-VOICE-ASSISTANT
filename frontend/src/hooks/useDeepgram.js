import { useState, useEffect, useRef, useCallback } from 'react';

const BACKEND_URL = 'https://jarvis-ai-voice-assistant.onrender.com';

export const useDeepgram = ({ onFinal, onInterim, onStatus }) => {
    const [isListening, setIsListening] = useState(false);
    const socketRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);
    const keepAliveInterval = useRef(null);
    const connectingRef = useRef(false);

    // Use refs for callbacks to avoid dependency cycles
    const onFinalRef = useRef(onFinal);
    const onInterimRef = useRef(onInterim);
    const onStatusRef = useRef(onStatus);

    useEffect(() => {
        onFinalRef.current = onFinal;
        onInterimRef.current = onInterim;
        onStatusRef.current = onStatus;
    }, [onFinal, onInterim, onStatus]);

    const cleanup = useCallback(() => {
        connectingRef.current = false;
        if (socketRef.current) {
            if (socketRef.current.readyState === WebSocket.OPEN) {
                socketRef.current.close();
            }
            socketRef.current = null;
        }
        if (mediaRecorderRef.current) {
            if (mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            mediaRecorderRef.current = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (keepAliveInterval.current) {
            clearInterval(keepAliveInterval.current);
            keepAliveInterval.current = null;
        }
        setIsListening(false);
    }, []);

    const start = useCallback(async () => {
        // Prevent multiple starts or if already connecting
        if (connectingRef.current || (socketRef.current && socketRef.current.readyState !== WebSocket.CLOSED)) return;

        try {
            connectingRef.current = true;
            cleanup();
            onStatusRef.current?.('Connecting...');

            // 1. Get Setup Key from Backend
            const response = await fetch(`${BACKEND_URL}/api/deepgram-token`);
            if (!response.ok) throw new Error('Failed to get Deepgram token');
            const { key } = await response.json();

            if (!key) throw new Error('No API key returned');

            // 2. Open WebSocket to Deepgram
            const dgUrl = `wss://api.deepgram.com/v1/listen?smart_format=true&model=nova-2&language=en-US&interim_results=true&endpointing=3000`;
            const socket = new WebSocket(`wss://api.deepgram.com/v1/listen?smart_format=true&model=nova-2&language=en-US&interim_results=true&endpointing=3000&token=${key}`

            );

            socketRef.current = socket;
            connectingRef.current = false;

            socket.onopen = async () => {
                onStatusRef.current?.('Listening');
                setIsListening(true);

                try {
                    // 3. Get Microphone Stream
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true
                        }
                    });
                    streamRef.current = stream;

                    // 4. Create MediaRecorder to stream audio
                    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                    mediaRecorderRef.current = mediaRecorder;

                    mediaRecorder.addEventListener('dataavailable', event => {
                        if (event.data.size > 0 && socket.readyState === 1) {
                            socket.send(event.data);
                        }
                    });

                    mediaRecorder.start(250); // Send chunks every 250ms

                    // Keep connection alive
                    keepAliveInterval.current = setInterval(() => {
                        if (socket.readyState === 1) {
                            socket.send(JSON.stringify({ type: 'KeepAlive' }));
                        }
                    }, 3000);
                } catch (micError) {
                    console.error('Microphone error:', micError);
                    onStatusRef.current?.('Mic Error');
                    socket.close();
                }
            };

            socket.onmessage = (message) => {
                const received = JSON.parse(message.data);

                if (received.channel && received.channel.alternatives[0]) {
                    const transcript = received.channel.alternatives[0].transcript;

                    if (transcript && received.is_final) {
                        if (transcript.trim().length > 0) {
                            onFinalRef.current?.(transcript);
                        }
                    } else if (transcript) {
                        onInterimRef.current?.(transcript);
                    }
                }
            };

            socket.onclose = () => {
                console.log('Deepgram connection closed');
                setIsListening(false);
            };

            socket.onerror = (error) => {
                console.error('Deepgram WebSocket error:', error);
                onStatusRef.current?.('Connection Error');
                // Do not auto-cleanup here to avoid state thrashing, let onclose handle it
            };

        } catch (error) {
            connectingRef.current = false;
            console.error('Error starting Deepgram:', error);
            onStatusRef.current?.('Connection Failed');
            cleanup();
        }
    }, [cleanup]); // Dependencies removed: onStatus, onFinal, onInterim

    const stop = useCallback(() => {
        cleanup();
        onStatusRef.current?.('Stopped');
    }, [cleanup]);

    useEffect(() => {
        return () => cleanup();
    }, [cleanup]);

    return { start, stop, isListening };
};
