import speech_recognition as sr
import sys
import json
import time

def listen():
    r = sr.Recognizer()
    m = sr.Microphone()

    print(json.dumps({"type": "status", "message": "Adjusting for ambient noise..."}))
    sys.stdout.flush()

    with m as source:
        r.adjust_for_ambient_noise(source)

    print(json.dumps({"type": "status", "message": "Listening"}))
    sys.stdout.flush()

    while True:
        try:
            with m as source:
                audio = r.listen(source, phrase_time_limit=5) # Limit listen time

            try:
                # Recognize speech using Google Speech Recognition
                text = r.recognize_google(audio)
                if text:
                    print(json.dumps({"type": "final", "text": text}))
                    sys.stdout.flush()
            except sr.UnknownValueError:
                # Speech was unintelligible
                pass
            except sr.RequestError as e:
                print(json.dumps({"type": "error", "message": f"Could not request results; {e}"}))
                sys.stdout.flush()
                time.sleep(1) # Prevent rapid looping on error

        except KeyboardInterrupt:
            break
        except Exception as e:
            print(json.dumps({"type": "error", "message": str(e)}))
            sys.stdout.flush()
            time.sleep(1) # Prevent rapid looping on error
        
        time.sleep(0.1) # Small delay to prevent 100% CPU usage

if __name__ == "__main__":
    listen()
