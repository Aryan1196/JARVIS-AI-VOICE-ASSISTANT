
import { useEffect, useRef, useState, useCallback } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://jarvis-ai-voice-assistant.onrender.com';

export const useDeepgram = ({ onFinal, onInterim, onStatus }) => {
    const [isListening, setIsListening] = useState(false);
    const socketRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);
    const keepAliveRef = useRef(null);

    // Use refs for callbacks to avoid re-creating 'start' when they change
    const callbacksRef = useRef({ onFinal, onInterim, onStatus });

    // Update refs whenever props change
    useEffect(() => {
        callbacksRef.current = { onFinal, onInterim, onStatus };
    }, [onFinal, onInterim, onStatus]);

    const getApiKey = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/deepgram-token`);
            const data = await response.json();
            return data.key;
        } catch (error) {
            console.error('Error fetching Deepgram API key:', error);
            callbacksRef.current.onStatus?.('Auth Error');
            return null;
        }
    };

    const start = useCallback(async () => {
        if (socketRef.current?.readyState === WebSocket.OPEN) return;

        try {
            const apiKey = await getApiKey();
            if (!apiKey) return;

            callbacksRef.current.onStatus?.('Connecting...');

            // Get microphone permission and stream
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Connect to Deepgram WebSocket with Protocols for Auth
            const socket = new WebSocket('wss://api.deepgram.com/v1/listen?smart_format=true&model=nova-2&language=en-US&interim_results=true', [
                'token',
                apiKey
            ]);
            socketRef.current = socket;

            socket.onopen = () => {
                callbacksRef.current.onStatus?.('Listening');
                setIsListening(true);

                // Send API key for authentication (Legacy/Fallback, protocol usually handles it)
                socket.send(JSON.stringify({ type: 'KeepAlive' }));

                // Setup MediaRecorder to send audio data
                const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.addEventListener('dataavailable', (event) => {
                    if (event.data.size > 0 && socket.readyState === 1) {
                        socket.send(event.data);
                    }
                });

                mediaRecorder.start(250); // Send chunks every 250ms

                // Keep connection alive
                keepAliveRef.current = setInterval(() => {
                    if (socket.readyState === 1) {
                        socket.send(JSON.stringify({ type: 'KeepAlive' }));
                    }
                }, 3000);
            };

            socket.onmessage = (message) => {
                const received = JSON.parse(message.data);
                const transcript = received.channel?.alternatives[0]?.transcript;

                if (transcript && received.is_final) {
                    callbacksRef.current.onFinal?.(transcript);
                } else if (transcript) {
                    callbacksRef.current.onInterim?.(transcript);
                }
            };

            socket.onclose = () => {
                callbacksRef.current.onStatus?.('Disconnected');
                setIsListening(false);
                cleanup();
            };

            socket.onerror = (error) => {
                console.error('WebSocket error:', error);
                callbacksRef.current.onStatus?.('Connection Error');
            };

        } catch (error) {
            console.error('Microphone or connection error:', error);
            callbacksRef.current.onStatus?.('Mic Error');
            cleanup();
        }
    }, []); // Dependencies are stable now

    const stop = useCallback(() => {
        cleanup();
        callbacksRef.current.onStatus?.('Stopped');
        setIsListening(false);
    }, []);

    const cleanup = () => {
        if (keepAliveRef.current) {
            clearInterval(keepAliveRef.current);
            keepAliveRef.current = null;
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (socketRef.current && socketRef.current.readyState === 1) {
            socketRef.current.close();
            socketRef.current = null;
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => cleanup();
    }, []);

    return { start, stop, isListening };
};
