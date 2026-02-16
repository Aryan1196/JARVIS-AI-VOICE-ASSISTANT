@echo off
echo Starting J.A.R.V.I.S...
echo.

:: Start backend server in a new window
start "JARVIS Backend" cmd /c "cd /d %~dp0backend && npm start"

:: Wait a moment for backend to initialize
timeout /t 2 /nobreak > nul

:: Start frontend server in a new window
start "JARVIS Frontend" cmd /c "cd /d %~dp0frontend && npm run dev"

echo.
echo Both servers are starting...
echo Backend: https://jarvis-ai-voice-assistant.onrender.com/
echo Frontend: https://jarvis-ai-voice-assistant-theta.vercel.app/
echo.
echo Opening JARVIS in your browser...
timeout /t 3 /nobreak > nul
start http://localhost:5173/
