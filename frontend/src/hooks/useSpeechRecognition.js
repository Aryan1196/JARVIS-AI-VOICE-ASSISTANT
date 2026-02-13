import { useRef, useCallback } from 'react';

export const useSpeechRecognition = ({
    onFinal,
    onInterim,
    onStatus,
    onSpeechStart,
}) => {
    const recognitionRef = useRef(null);
    const silenceTimer = useRef(null);
    const lastFinalRef = useRef('');

    const init = useCallback(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            onStatus?.('Mic not supported');
            return null;
        }

        const recognition = new SpeechRecognition();

        // 🔧 IMPORTANT SETTINGS
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;

        let shouldRestart = true;

        recognition.onstart = () => {
            onStatus?.('Listening');
        };

        recognition.onspeechstart = () => {
            onSpeechStart?.();
        };

        recognition.onresult = (event) => {
            let interimText = '';
            let finalText = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript.trim();

                if (event.results[i].isFinal) {
                    finalText += transcript + ' ';
                } else {
                    interimText += transcript + ' ';
                }
            }

            // 🔹 INTERIM (fast, UI only)
            if (interimText) {
                onInterim?.(interimText.trim());

                // Reset silence timer
                clearTimeout(silenceTimer.current);
                silenceTimer.current = setTimeout(() => {
                    if (lastFinalRef.current) {
                        onFinal?.(lastFinalRef.current.trim());
                        lastFinalRef.current = '';
                    }
                }, 800); // silence cutoff
            }

            // 🔹 FINAL (clean, delayed)
            if (finalText) {
                lastFinalRef.current += finalText;
            }
        };

        recognition.onerror = (e) => {
            if (
                e.error === 'no-speech' ||
                e.error === 'aborted'
            ) return;

            if (
                e.error === 'not-allowed' ||
                e.error === 'service-not-allowed'
            ) {
                shouldRestart = false;
                onStatus?.('Mic permission denied');
            }
        };

        recognition.onend = () => {
            if (!shouldRestart) return;

            setTimeout(() => {
                try {
                    recognition.start();
                } catch {
                    // ignore
                }
            }, 300);
        };

        recognitionRef.current = recognition;
        return recognition;
    }, [onFinal, onInterim, onStatus, onSpeechStart]);

    return {
        init,
        recognitionRef,
        stop: () => {
            recognitionRef.current?.stop();
        },
    };
};
