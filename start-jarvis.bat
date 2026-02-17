@echo off
title J.A.R.V.I.S Launcher
color 0B

echo.
echo   ============================================================
echo.
echo          J.A.R.V.I.S  -  AI Voice Assistant
echo          Just A Rather Very Intelligent System  v1.0
echo.
echo   ============================================================
echo.

:: -- Resolve paths --
set "ROOT=%~dp0"
set "BACKEND=%ROOT%backend"
set "FRONTEND=%ROOT%frontend"

:: ============================================================
::  DEPENDENCY CHECKS
:: ============================================================
echo   [~] Checking dependencies...
echo.

:: -- Node.js --
node -v >nul 2>&1
if errorlevel 1 (
    color 0C
    echo   [X] Node.js is NOT installed!
    echo       Download it from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do echo   [OK] Node.js %%v

:: -- npm --
call npm -v >nul 2>&1
if errorlevel 1 (
    color 0C
    echo   [X] npm is NOT installed!
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('npm -v') do echo   [OK] npm v%%v

:: -- Python --
python --version >nul 2>&1
if errorlevel 1 (
    echo   [!!] Python not found - speech recognition unavailable.
) else (
    for /f "tokens=*" %%v in ('python --version') do echo   [OK] %%v
)

echo.
echo   --------------------------------------------------------
echo.

:: ============================================================
::  CHECK node_modules
:: ============================================================
if not exist "%BACKEND%\node_modules\" (
    echo   [~] Installing backend dependencies...
    pushd "%BACKEND%"
    call npm install
    popd
    echo   [OK] Backend dependencies installed.
) else (
    echo   [OK] Backend dependencies ready.
)

if not exist "%FRONTEND%\node_modules\" (
    echo   [~] Installing frontend dependencies...
    pushd "%FRONTEND%"
    call npm install
    popd
    echo   [OK] Frontend dependencies installed.
) else (
    echo   [OK] Frontend dependencies ready.
)

:: -- Check .env --
if not exist "%BACKEND%\.env" (
    color 0E
    echo.
    echo   [!!] WARNING: backend\.env not found!
    echo        JARVIS needs API keys to function properly.
    echo.
)

echo.
echo   --------------------------------------------------------
echo.

:: ============================================================
::  START SERVERS
:: ============================================================
echo   [~] Starting Backend server on port 3001...
start "JARVIS-Backend" /min cmd /k "cd /d %BACKEND% && npm start"

echo   [~] Waiting for backend to initialize...
timeout /t 4 /nobreak >nul
echo   [OK] Backend started.

echo   [~] Starting Frontend dev server on port 5173...
start "JARVIS-Frontend" /min cmd /k "cd /d %FRONTEND% && npm run dev"

echo   [~] Waiting for frontend to compile...
timeout /t 5 /nobreak >nul
echo   [OK] Frontend started.

echo.
echo   --------------------------------------------------------
echo.

:: ============================================================
::  LAUNCH BROWSER
:: ============================================================
echo   [~] Opening J.A.R.V.I.S in browser...

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:5173/
    echo   [OK] Launched in Chrome App Mode.
) else if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=http://localhost:5173/
    echo   [OK] Launched in Chrome App Mode.
) else (
    start "" http://localhost:5173/
    echo   [OK] Launched in default browser.
)

echo.
echo   ============================================================
echo.
echo        J.A.R.V.I.S is up and running!
echo.
echo        Backend  : http://localhost:3001
echo        Frontend : http://localhost:5173
echo.
echo        Close this window to stop all servers.
echo.
echo   ============================================================
echo.
echo   Press any key to SHUT DOWN J.A.R.V.I.S...
pause >nul

:: ============================================================
::  CLEANUP - Kill server windows when user closes launcher
:: ============================================================
echo.
echo   [~] Shutting down J.A.R.V.I.S...
taskkill /fi "WINDOWTITLE eq JARVIS-Backend*" /f >nul 2>&1
taskkill /fi "WINDOWTITLE eq JARVIS-Frontend*" /f >nul 2>&1
echo   [OK] Servers stopped. Goodbye!
timeout /t 2 /nobreak >nul
exit /b 0
