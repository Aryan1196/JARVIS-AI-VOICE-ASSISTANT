# System Launcher - Quick Guide

## 🚀 Open Apps & Websites with J.A.R.V.I.S

The launcher module allows you to open applications and websites by name through voice commands!

## API Endpoints

### 1. Smart Launch (Recommended)
Automatically detects if you want to open an app, website, or search.

```bash
POST http://localhost:3001/api/launcher/open
Body: { "name": "chrome" }
```

### 2. Open Application
```bash
POST http://localhost:3001/api/launcher/app
Body: { "name": "vscode" }
```

### 3. Open Website
```bash
POST http://localhost:3001/api/launcher/website
Body: { "name": "youtube" }
```

### 4. Google Search
```bash
POST http://localhost:3001/api/launcher/search
Body: { "query": "how to code in javascript" }
```

### 5. List Available Apps
```bash
GET http://localhost:3001/api/launcher/apps
```

### 6. List Available Websites
```bash
GET http://localhost:3001/api/launcher/websites
```

## Supported Applications

- **Browsers**: chrome, firefox, edge, brave
- **Office**: word, excel, powerpoint, outlook
- **Communication**: discord, slack, teams, zoom
- **Development**: vscode, notepad++, git bash, cmd, powershell
- **Media**: spotify, vlc
- **System**: calculator, notepad, paint, file explorer, task manager
- And many more!

## Supported Websites

- **Social**: youtube, twitter, facebook, instagram, reddit
- **Productivity**: gmail, github, stackoverflow, notion, figma
- **AI**: chatgpt, gemini, claude
- **Entertainment**: netflix, spotify
- And many more!

## Voice Command Integration

Add keywords to your existing chat endpoint to detect launcher commands:

```javascript
// In server.js chat endpoint, add:
const LAUNCHER_KEYWORDS = ['open', 'launch', 'start', 'run'];

if (message.toLowerCase().includes('open ') || message.toLowerCase().includes('launch ')) {
    const appName = message.replace(/open|launch|start|run/gi, '').trim();
    const result = await launcher.smartLaunch(appName);
    return res.json({ response: result.message });
}
```

## Example Voice Commands

- "Open Chrome"
- "Launch VS Code"
- "Open Gmail"
- "Start PowerShell"
- "Go to GitHub"

## ⚡ Multi-Launch Capability

You can open multiple apps and websites at once! just separate them with a comma or "and".

**Examples:**
- "Open Instagram, Facebook, and YouTube"
- "Launch VS Code and Chrome"
- "Open Spotify, Discord"
- "Start Calculator and Notepad"

The system will launch all of them in sequence.

---

## Test It

```javascript
// Test opening Chrome
fetch('http://localhost:3001/api/launcher/open', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'chrome' })
}).then(r => r.json()).then(console.log);

// Test opening YouTube
fetch('http://localhost:3001/api/launcher/website', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'youtube' })
}).then(r => r.json()).then(console.log);
```

Enjoy controlling your system with J.A.R.V.I.S! 🎯
