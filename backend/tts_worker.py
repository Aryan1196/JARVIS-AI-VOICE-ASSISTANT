"""
Persistent TTS Worker for JARVIS
Stays running and accepts requests via stdin, outputs audio via stdout.
Eliminates Python cold-start latency on every TTS request.
"""

import edge_tts
import asyncio
import sys
import json
import os
import io

VOICE = "en-GB-RyanNeural"  # British male voice for JARVIS

async def generate_to_buffer(text: str) -> bytes:
    """Generate speech and return as bytes (MP3)"""
    communicate = edge_tts.Communicate(text, VOICE)
    buffer = io.BytesIO()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            buffer.write(chunk["data"])
    return buffer.getvalue()

async def main():
    # Signal that worker is ready
    sys.stderr.write("TTS_WORKER_READY\n")
    sys.stderr.flush()

    while True:
        try:
            # Read a line from stdin (JSON request)
            line = sys.stdin.readline()
            if not line:
                break  # stdin closed, exit

            line = line.strip()
            if not line:
                continue

            request = json.loads(line)
            text = request.get("text", "")
            request_id = request.get("id", "0")

            if not text:
                # Send empty response
                response = json.dumps({"id": request_id, "size": 0}) + "\n"
                sys.stderr.write(response)
                sys.stderr.flush()
                continue

            # Generate audio
            audio_data = await generate_to_buffer(text)

            # Write response metadata to stderr (so it doesn't mix with audio)
            response = json.dumps({"id": request_id, "size": len(audio_data)}) + "\n"
            sys.stderr.write(response)
            sys.stderr.flush()

            # Write raw audio bytes to stdout
            sys.stdout.buffer.write(audio_data)
            sys.stdout.buffer.flush()

        except json.JSONDecodeError as e:
            sys.stderr.write(json.dumps({"error": str(e)}) + "\n")
            sys.stderr.flush()
        except Exception as e:
            sys.stderr.write(json.dumps({"error": str(e)}) + "\n")
            sys.stderr.flush()

if __name__ == "__main__":
    asyncio.run(main())
