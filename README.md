# J.A.R.V.I.S - AI Desktop Assistant

An intelligent, voice-controlled desktop assistant inspired by Iron Man's J.A.R.V.I.S. Built with modern web technologies, it integrates advanced AI, real-time web access, and deep system control to help you navigate your digital life hands-free.

---

## ✨ Features Overview

### 🧠 Advanced AI Core
- **Gemini 1.5 Flash Integration**: Uses Google's latest model for context-aware, intelligent conversations.
- **Natural Personality**: Responds like a helpful, witty assistant.
- **Speech-to-Text**: Powered by **Deepgram** for lightning-fast, accurate command recognition.
- **Text-to-Speech**: Uses **Edge-TTS** for realistic, high-quality voice responses.

### ⚡ Smart Automation
- **App Launcher**: Open any application instantly (e.g., "Open VS Code", "Start Discord").
- **Website Opener**: Open websites by name (e.g., "Open YouTube", "Go to ChatGPT").
- **Multi-Launch**: Handles specific commands like "Open Notepad and Calculator" to launch multiple apps at once.
- **Smart System Control**: Adjust volume, brightness, and manage windows with ease.

### 🌐 Live Web Intelligence
- **Real-Time Search**: Fetches live data from the web using Puppeteer handling.
- **Instant Answers**: Get stock prices, exchange rates, news, and weather (e.g., "What is the USD to INR rate?", "Who won the match?").

---

## 📚 Detailed User Manual & "How-To" Guide

### 🎥 YouTube & Media Control
JARVIS can find, play, and control YouTube videos without you touching the keyboard.

| Goal | Command Format | Example |
| :--- | :--- | :--- |
| **Play a Video** | "Play [Video Name]" | "Play Believer by Imagine Dragons" |
| **Search Videos** | "Search [Query] on YouTube" | "Search for funny cat videos on YouTube" |
| **Open Channel** | "Open [Channel Name] on YouTube" | "Open MrBeast on YouTube" |
| **Navigation** | "Forward [Time]", "Rewind [Time]" | "Forward 30 seconds", "Rewind 1 minute", "Skip ahead", "Go back" |

**Once a video is playing, you can say:**
- "Pause video", "Resume video", "Stop video"
- "Mute", "Unmute"
- "Full screen", "Theater mode", "Mini player"
- "Volume up", "Volume down", "Volume 50%"
- "Forward 10 seconds", "Rewind 1 minute"
- **Speed**: "Speed up", "Slow down"

### 🌐 Live Web Intelligence
JARVIS is connected to the internet. Ask questions about real-time events, and it will browse the web to find the answer.

**How to ask:**
Simply ask a question that implies **current** or **changing** information. JARVIS detects keywords like "current", "live", "news", "price", "rate", "time", "date", "who", "what", "where".

| Type | Example Command | Results |
| :--- | :--- | :--- |
| **Google Search** | "Search for [Query] on Google" | "Search for Atomic Bomb element on Google" (Explicit Search) |
| **Exchange Rates** | "What is the **current** USD to INR rate?" | "The current exchange rate is roughly 83.50 rupees..." |
| **News** | "Tell me the **latest** tech news" | Summarizes top headlines from the web. |
| **Facts** | "Who is the **current** CEO of Twitter?" | "Linda Yaccarino is the CEO..." |
| **Time** | "What **time** is it in Tokyo?" | "It is 3:00 PM in Tokyo." |

### 🧭 Chrome Browser Control
When you are browsing the web, JARVIS acts as your co-pilot.

| Action | Commands | Note |
| :--- | :--- | :--- |
| **Tabs** | "New tab", "Close tab", "Reopen tab" | |
| **Switching** | "Switch to tab **1**", "Switch to tab **3**" | Works for tabs 1-8 and "last tab" (9). Parsing improved for "Switching tabs". |
| **Navigation** | "Go back", "Go forward", "Refresh page" | |
| **Scrolling** | "Scroll down", "Scroll down **5 times**" | Useful for reading long articles. |
| **Zoom** | "Zoom in", "Zoom out", "Reset zoom" | |
| **Tools** | "Open History", "Open Downloads" | |

### ⚡ System & App Control
Launch applications and control system settings instantly.

- **System Volume**:
    - "Set volume to 50%"
    - "Increase volume by 20%", "Decrease volume"
    - "Mute", "Unmute"
- **Advanced System Controls**:
    - "Lock System", "Sleep Mode"
    - "Shutdown System", "Turn off PC" (10s delay)
    - "Open Task Manager"
    - "Open Settings", "Open File Explorer"
    - "Take Screenshot", "Open Run Dialog"
    - "Switch Apps" (Alt+Tab), "Minimize All", "Show Desktop"
    - "Action Center", "Quick Link Menu"
- **Brightness**: 
    - "Brightness 100%" (Uses WMI/PowerShell)

---

## 🚀 Supported Apps & Websites (Full List)

JARVIS supports launching the following applications and websites by name.

### 📱 Supported Applications
| Category | Apps |
| :--- | :--- |
| **Browsers** | Chrome, Firefox, Edge, Brave |
| **Office** | Word, Excel, PowerPoint, Outlook, OneNote |
| **Communication** | Discord, Slack, Teams, Zoom, Skype, WhatsApp |
| **Dev Tools** | VS Code, Notepad++, Git Bash, CMD, PowerShell, Windows Terminal |
| **Media** | Spotify, VLC, Media Player |
| **System** | Calculator, Notepad, Paint, Settings, Control Panel, Task Manager, File Explorer |
| **Other** | Steam, OBS, Photoshop, Illustrator, Lenovo App |

### 🌍 Supported Websites
| Category | Websites |
| :--- | :--- |
| **Productivity** | Google, Bing, DuckDuckGo, ChatGPT, Claude, Perplexity, Gemini |
| **Video** | YouTube, Netflix, Prime Video, Hotstar, Twitch, Anime |
| **Music** | Spotify Web, SoundCloud |
| **Social** | Facebook, Instagram, Twitter/X, LinkedIn, Reddit, Discord Web |
| **Mail & Chat** | Gmail, Outlook Mail, Yahoo Mail, WhatsApp Web, Telegram Web |
| **Developer** | GitHub, GitLab, Bitbucket, Stack Overflow, NPM, PyPI, LeetCode |
| **Cloud** | AWS, Azure, Google Cloud, Vercel, Netlify, Render |
| **Design** | Figma, Canva, Notion |
| **Education** | Coursera, Udemy, EdX, Khan Academy |
| **Utilities** | Google Maps, Drive, Calendar, Speed Test |

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16+)
- **Python 3** (with `edge-tts` installed)
- **FFmpeg** (in system PATH)

### 1. Setup
Clone the repo and install dependencies:
```bash
# Backend
cd backend
npm install
pip install edge-tts asyncio

# Frontend
cd frontend
npm install
```

### 2. Configuration (`backend/.env`)
Create a `.env` file in the `backend` folder with:
```env
GROQ_API_KEY = your_groq_api_key
GOOGLE_API_KEY=your_gemini_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
```

### 3. Run
Double-click `start-jarvis.bat` to launch everything!

---
*Built with ❤️ by your friendly neighborhood developer.*
