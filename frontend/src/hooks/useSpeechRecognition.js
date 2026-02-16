import { useRef, useCallback, useState, useEffect } from 'react';

export const useSpeechRecognition = ({
    onFinal,
    onInterim,
    onStatus,
}) => {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const shouldKeepListeningRef = useRef(false);

    // Initialize checking for support
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            onStatus?.('Mic not supported');
        }
    }, [onStatus]);

    const start = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;

        if (recognitionRef.current) {
            // Already initialized, just ensure it's started if not running
            try {
                recognitionRef.current.start();
            } catch (e) {
                // Ignore if already started
            }
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;

        shouldKeepListeningRef.current = true;

        recognition.onstart = () => {
            setIsListening(true);
            onStatus?.('Listening');
        };

        recognition.onend = () => {
            setIsListening(false);
            // Auto-restart if we shouldn't stop
            if (shouldKeepListeningRef.current) {
                onStatus?.('Restarting...');
                setTimeout(() => {
                    try {
                        recognition.start();
                    } catch (e) {
                        console.error('Failed to restart recognition:', e);
                    }
                }, 100);
            } else {
                onStatus?.('Stopped');
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            if (event.error === 'not-allowed') {
                onStatus?.('Mic permission denied');
                shouldKeepListeningRef.current = false;
            } else if (event.error === 'no-speech') {
                // Ignore, it will just restart
            } else {
                onStatus?.(`Error: ${event.error}`);
            }
        };

        recognition.onresult = (event) => {
            let interimText = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    const transcript = event.results[i][0].transcript.trim();
                    if (transcript) {
                        onFinal?.(transcript);
                    }
                } else {
                    interimText += event.results[i][0].transcript;
                }
            }

            if (interimText) {
                onInterim?.(interimText);
            }
        };

        recognitionRef.current = recognition;
        try {
            recognition.start();
        } catch (e) {
            console.error('Start error:', e);
        }

    }, [onFinal, onInterim, onStatus]);

    const stop = useCallback(() => {
        shouldKeepListeningRef.current = false;
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) { }
            recognitionRef.current = null;
        }
        setIsListening(false);
        onStatus?.('Stopped');
    }, [onStatus]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            shouldKeepListeningRef.current = false;
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) { }
            }
        };
    }, []);

    return {
        start,
        stop,
        isListening
    };
};
