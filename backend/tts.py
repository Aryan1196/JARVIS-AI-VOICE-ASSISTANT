"""
Text-to-Speech Module for JARVIS using Edge-TTS (Python)
Uses Microsoft Edge's high-quality TTS service
"""

import edge_tts
import asyncio
import sys
import os

# Voice options:
# 'en-US-GuyNeural' - Male, professional
# 'en-GB-RyanNeural' - British male (JARVIS-like)
# 'en-IN-PrabhatNeural' - Indian English male

VOICE = "en-GB-RyanNeural"  # British male voice for JARVIS

async def generate_speech(text: str, output_path: str):
    """Generate speech from text and save to file"""
    communicate = edge_tts.Communicate(text, VOICE)
    await communicate.save(output_path)
    return output_path

def main():
    if len(sys.argv) < 3:
        print("Usage: python tts.py <text> <output_path>", file=sys.stderr)
        sys.exit(1)
    
    text = sys.argv[1]
    output_path = sys.argv[2]
    
    asyncio.run(generate_speech(text, output_path))
    print(f"Audio saved to: {output_path}")

if __name__ == "__main__":
    main()
