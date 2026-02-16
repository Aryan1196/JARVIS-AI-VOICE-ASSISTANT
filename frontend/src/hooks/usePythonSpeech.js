import { useState, useEffect, useRef, useCallback } from 'react';
import io from 'socket.io-client';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export const usePythonSpeech = ({
    onFinal,
    onInterim,
    onStatus,
}) => {
    const [isListening, setIsListening] = useState(false);
    const socketRef = useRef(null);
    const callbacksRef = useRef({ onFinal, onInterim, onStatus });

    // Update refs whenever props change - this is cheap and doesn't trigger re-effects
    useEffect(() => {
        callbacksRef.current = { onFinal, onInterim, onStatus };
    }, [onFinal, onInterim, onStatus]);

    // Initialize Socket Connection - RUNS ONCE on mount
    useEffect(() => {
        const socket = io(BACKEND_URL);
        socketRef.current = socket;

        socket.on('connect', () => {
            console.log('Connected to Backend Socket');
        });

        socket.on('speech-data', (data) => {
            if (data.type === 'status') {
                callbacksRef.current.onStatus?.(data.message);
            } else if (data.type === 'final') {
                callbacksRef.current.onFinal?.(data.text);
            } else if (data.type === 'error') {
                callbacksRef.current.onStatus?.(`Error: ${data.message}`);
            }
        });

        socket.on('speech-status', (status) => {
            if (status === 'Stopped') {
                setIsListening(false);
                callbacksRef.current.onStatus?.('Stopped');
            }
        });

        return () => {
            socket.disconnect();
            socketRef.current = null;
        };
    }, []);

    const start = useCallback(() => {
        if (socketRef.current) {
            console.log('socketRef exists, emitting start-speech');
            socketRef.current.emit('start-speech');
            setIsListening(true);
            callbacksRef.current.onStatus?.('Starting...');
        } else {
            // Try to reconnect or warn
            console.warn('Socket ref is null.');
        }
    }, []);

    const stop = useCallback(() => {
        if (socketRef.current) {
            socketRef.current.emit('stop-speech');
            setIsListening(false);
            callbacksRef.current.onStatus?.('Stopping...');
        }
    }, []);

    return {
        start,
        stop,
        isListening
    };
};
