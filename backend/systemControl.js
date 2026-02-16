import { exec } from 'child_process';

/**
 * System Control Module
 * Handles system-level operations like volume control using PowerShell.
 */

// Key codes for WScript.Shell SendKeys
// 173: Mute/Unmute
// 174: Volume Down
// 175: Volume Up

const executePowerShell = (command) => {
    return new Promise((resolve, reject) => {
        exec(`powershell -Command "${command}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`PowerShell Error: ${error.message}`);
                // Don't reject, just log, as sometimes it works even with minor stderr
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};

const sendKey = async (keyCode, times = 1) => {
    // Construct a script to send the key multiple times
    // $ws = New-Object -ComObject WScript.Shell; for($i=0; $i -lt 5; $i++) { $ws.SendKeys([char]175) }
    const script = `$ws = New-Object -ComObject WScript.Shell; for($i=0; $i -lt ${times}; $i++) { $ws.SendKeys([char]${keyCode}) }`;
    return await executePowerShell(script);
};

export const adjustVolume = async (amount, direction) => {
    // Windows volume usually changes by 2 steps per key press (out of 100)
    // So 1 key press = 2%
    // If user wants to change by 10%, we need 5 presses.

    let steps = Math.round(amount / 2);
    if (steps < 1) steps = 1;
    if (steps > 50) steps = 50; // Safety cap

    console.log(`Adjusting volume ${direction} by ${amount}% (${steps} steps)`);

    if (direction === 'up' || direction === 'increase') {
        await sendKey(175, steps); // Volume Up
        return { executed: true, message: `Increased volume by ${amount}%.` };
    } else if (direction === 'down' || direction === 'decrease') {
        await sendKey(174, steps); // Volume Down
        return { executed: true, message: `Decreased volume by ${amount}%.` };
    }

    return { executed: false, message: "Invalid direction." };
};

export const setMute = async (shouldMute) => {
    // Volume mute is a toggle. We can't easily know current state without complex scripts.
    // For now, we will just toggle it. 
    // Ideally, we'd check checking state, but WScript.Shell is blind.
    // User command "mute" -> toggle. "Unmute" -> toggle.

    // NOTE: This triggers the toggle. If already muted, it unmutes.
    await sendKey(173, 1);
    return { executed: true, message: "Toggled mute." };
};

export const lockSystem = async () => {
    // "Win+L" equivalent
    // rundll32.exe user32.dll,LockWorkStation
    console.log("Locking system...");
    await executePowerShell('rundll32.exe user32.dll,LockWorkStation');
    return { executed: true, message: "System locked." };
};


const triggerHotkey = async (key) => {
    // Helper to press Win + Key
    // Uses a C# snippet embedded in PowerShell to call keybd_event because WScript.Shell cannot hold the Windows key reliably.
    const psScript = `
$code = @'
using System;
using System.Runtime.InteropServices;
public class Keyboard {
    [DllImport("user32.dll")]
    public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, uint dwExtraInfo);
    public const int KEYEVENTF_KEYUP = 0x0002;
    public const int VK_LWIN = 0x5B;

    public static void PressWinKey(byte key) {
        keybd_event(VK_LWIN, 0, 0, 0);
        keybd_event(key, 0, 0, 0);
        keybd_event(key, 0, KEYEVENTF_KEYUP, 0);
        keybd_event(VK_LWIN, 0, KEYEVENTF_KEYUP, 0);
    }
}
'@
Add-Type -TypeDefinition $code
[Keyboard]::PressWinKey([byte][char]'${key.toUpperCase()}')
`;
    return await executePowerShell(psScript);
};

export const handleSystemCommand = async (command) => {
    const cmd = command.toLowerCase();

    // --- SYSTEM CONTROLS ---

    // Lock System
    if (cmd.includes("lock system") || cmd.includes("lock pc") || cmd.includes("sleep mode") || cmd.includes("go to sleep")) {
        return await lockSystem();
    }

    // Shutdown System
    if (cmd.includes("shutdown system") || cmd.includes("turn off computer") || cmd.includes("turn off pc") || cmd.includes("System shutdown")) {
        console.log("Shutting down system...");
        // Shutdown with 10 second delay
        await executePowerShell('shutdown /s /t 10');
        return { executed: true, message: "Shutting down system in 10 seconds. type 'shutdown /a' to abort." };
    }

    // Task Manager
    if (cmd.includes("task manager")) {
        exec('taskmgr');
        return { executed: true, message: "Opened Task Manager." };
    }

    // Settings
    if (cmd.includes("open settings")) {
        await executePowerShell('start ms-settings:');
        return { executed: true, message: "Opened Settings." };
    }

    // File Explorer
    if (cmd.includes("file explorer") || cmd.includes("finder") || cmd.includes("my computer")) {
        await executePowerShell('explorer');
        return { executed: true, message: "Opened File Explorer." };
    }

    // Run Dialog
    if (cmd.includes("run dialog") || cmd.includes("open run")) {
        await triggerHotkey('r');
        return { executed: true, message: "Opened Run Dialog." };
    }

    // System Search
    if (cmd.includes("search system") || cmd.includes("spotlight")) {
        await triggerHotkey('s');
        return { executed: true, message: "Opened System Search." };
    }

    // Quick Link Menu
    if (cmd.includes("quick link") || cmd.includes("quick menu")) {
        await triggerHotkey('x');
        return { executed: true, message: "Opened Quick Link Menu." };
    }

    // Action Center
    if (cmd.includes("action center") || cmd.includes("notifications")) {
        await triggerHotkey('a');
        return { executed: true, message: "Opened Action Center." };
    }

    // Project Screen
    if (cmd.includes("project screen") || cmd.includes("projection")) {
        await triggerHotkey('p');
        return { executed: true, message: "Opened Projection Menu." };
    }

    // Minimize All
    if (cmd.includes("minimize all")) {
        await triggerHotkey('m');
        return { executed: true, message: "Minimized all windows." };
    }

    // Show Desktop (Win+D logic is toggle, Win+M is minimize only)
    if (cmd.includes("show desktop")) {
        await triggerHotkey('d');
        return { executed: true, message: "Toggled Desktop." };
    }

    // Switch Apps (Alt + Tab)
    if (cmd.includes("switch app") || cmd.includes("switch window") || cmd.includes("next app") || cmd.includes("alt tab")) {
        // % is Alt in SendKeys
        await sendKey('%{TAB}');
        return { executed: true, message: "Switched to next app." };
    }

    // Screenshots
    if (cmd.includes("screenshot") || cmd.includes("snip") || cmd.includes("capture screen")) {
        // Win+Shift+S is hard to simulate with simple keybd_event helper above (needs 3 keys).
        // Using 'snippingtool' command is easier and reliable.
        await executePowerShell('snippingtool /clip'); // Opens in background/clip or overlay
        // Or just launch the UI
        await executePowerShell('start ms-screenclip:');
        return { executed: true, message: "Opened Screen Snipping." };
    }

    // Terminate/Kill Process
    if (cmd.includes("kill") || cmd.includes("terminate") || cmd.includes("close") && (cmd.includes("process") || cmd.includes("task"))) {
        let target = "";
        if (cmd.includes("chrome") || cmd.includes("browser")) target = "chrome";
        else if (cmd.includes("discord")) target = "discord";
        else if (cmd.includes("spotify")) target = "spotify";
        else if (cmd.includes("notepad")) target = "notepad";
        else if (cmd.includes("calculator")) target = "calculator";
        else if (cmd.includes("edge")) target = "msedge";
        else if (cmd.includes("word")) target = "winword";
        else if (cmd.includes("excel")) target = "excel";
        else if (cmd.includes("powerpoint")) target = "powerpnt";
        else if (cmd.includes("vlc")) target = "vlc";

        // Fallback: try to extract the name if it's "kill [name]"
        if (!target) {
            const match = cmd.match(/(?:kill|terminate|end task) (.+)/i);
            if (match && match[1]) {
                const rawName = match[1].trim().toLowerCase();
                // simple mapping attempt
                if (rawName === "google chrome") target = "chrome";
                else target = rawName;
            }
        }

        if (target) {
            const result = await killProcess(target);
            return result;
        }
    }


    // --- VOLUME CONTROLS ---

    // Volume Adjustment
    // "increase volume by 20", "raise volume by 20%", "volume up 20"
    if (cmd.includes("volume")) {
        const match = cmd.match(/(increase|raise|decrease|lower|reduce|turn up|turn down).*?(\d+)/i);

        // Mute / Unmute
        if (cmd.includes("unmute") || (cmd.includes("mute") && !cmd.includes("unmute"))) {
            await setMute();
            return { executed: true, message: "I've toggled the mute setting." };
        }

        if (match) {
            const action = match[1].toLowerCase();
            const amount = parseInt(match[2]);

            let direction = 'up';
            if (['decrease', 'lower', 'reduce', 'turn down'].some(w => action.includes(w))) {
                direction = 'down';
            } else if (['increase', 'raise', 'turn up'].some(w => action.includes(w))) {
                direction = 'up';
            }

            return await adjustVolume(amount, direction);
        }

        // Simple "volume up" / "volume down" without numbers (default to small step)
        if (cmd.includes("up") || cmd.includes("raise") || cmd.includes("increase")) {
            return await adjustVolume(10, 'up');
        } else if (cmd.includes("down") || cmd.includes("lower") || cmd.includes("decrease")) {
            return await adjustVolume(10, 'down');
        }
    }

    return { executed: false };
};
