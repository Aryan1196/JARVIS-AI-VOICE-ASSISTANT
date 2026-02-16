import { exec } from 'child_process';

// Duplicated helper to avoid circular dependency or complex shared utility for now.
// In a larger app, we'd extract this to a 'system-control.js' utility.
const focusChrome = () => {
    return new Promise((resolve) => {
        const psCommand = `powershell -Command "(New-Object -ComObject WScript.Shell).AppActivate('Google Chrome')"`;
        exec(psCommand, (error) => {
            if (error) console.error(`Error focusing Chrome: ${error.message}`);
            setTimeout(resolve, 200);
        });
    });
};

const sendKeys = (keys) => {
    return new Promise((resolve, reject) => {
        const psCommand = `powershell -Command "$ws = New-Object -ComObject WScript.Shell; $ws.SendKeys('${keys}')"`;
        exec(psCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error sending keys: ${error.message}`);
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
};

export const handleYouTubeControlCommand = async (command) => {
    const cmd = command.toLowerCase();
    let executed = false;
    let action = '';
    let keys = '';

    try {
        // PLAYBACK
        if (cmd.includes("play video") || cmd.includes("pause video") || cmd.includes("stop video") || cmd.includes("resume video") || cmd.includes("resume") || cmd.includes("pause")) {
            keys = 'k'; // 'k' toggles play/pause on YouTube
            action = "Toggled Play/Pause";
        }
        else if (cmd.includes("mute") || cmd.includes("unmute")) {
            keys = 'm';
            action = "Toggled Mute";
        }

        // VOLUME
        // Check for specific percentage command first
        const volMatch = cmd.match(/volume.*?(\d+)/);
        if (volMatch) {
            let targetVol = parseInt(volMatch[1]);
            // Clamp between 0 and 100
            targetVol = Math.max(0, Math.min(targetVol, 100));

            // YouTube changes volume in 5% increments
            // To set absolute volume:
            // 1. Reset to 0 (send 'Down' 20 times)
            // 2. Increase to target (target / 5 times)

            const upSteps = Math.round(targetVol / 5);

            // Construct key sequence
            // '{DOWN}' * 20 ensures we hit 0 from anywhere
            keys = '{DOWN}'.repeat(20) + '{UP}'.repeat(upSteps);

            action = `Set volume to ${targetVol}%`;
        }
        else if (cmd.includes("increase volume") || cmd.includes("louder")) {
            keys = '{UP}';
            action = "Increased volume";
        }
        else if (cmd.includes("decrease volume") || cmd.includes("quieter")) {
            keys = '{DOWN}';
            action = "Decreased volume";
        }

        // SEEKING
        // Dynamic Forward/Rewind
        const seekMatch = cmd.match(/(?:forward|rewind|back|skip|go back|go forward)\s+(?:by\s+)?(\d+)?\s*(seconds?|minutes?|secs?|mins?)?/i);
        if (seekMatch) {
            let amount = parseInt(seekMatch[1]) || 10; // Default to 10 if number not specified but command matched
            const unit = seekMatch[2];

            if (unit && unit.startsWith('min')) {
                amount *= 60;
            }

            const isRewind = cmd.includes("back") || cmd.includes("rewind");
            const direction = isRewind ? "Rewind" : "Forward";

            // Calculate key presses
            // YouTube: 'l'/'j' = 10s, Right/Left = 5s
            // We'll prioritize 10s jumps for speed

            let tenSeconds = Math.floor(amount / 10);
            let remainder = amount % 10;
            let fiveSeconds = Math.round(remainder / 5);

            let keySeq = '';

            if (isRewind) {
                keySeq = 'j'.repeat(tenSeconds) + '{LEFT}'.repeat(fiveSeconds);
            } else {
                keySeq = 'l'.repeat(tenSeconds) + '{RIGHT}'.repeat(fiveSeconds);
            }

            if (keySeq) {
                keys = keySeq;
                action = `${direction} ${amount} seconds`;
            }
        }

        else if (cmd.includes("forward five") || cmd.includes("skip forward") || cmd.includes("skip five seconds")) {
            keys = '{RIGHT}';
            action = "Skipped forward 5 seconds";
        }
        else if (cmd.includes("back five") || cmd.includes("skip back") || cmd.includes("rewind") || cmd.includes("skip five seconds back")) {
            keys = '{LEFT}'; // Standard rewind (5s)
            action = "Skipped back 5 seconds";
        }
        else if (cmd.includes("forward ten") || cmd.includes("skip ten seconds")) {
            keys = 'l';
            action = "Skipped forward 10 seconds";
        }
        else if (cmd.includes("move back ten") || cmd.includes("rewind ten") || cmd.includes("back ten")) {
            keys = 'j';
            action = "Skipped back 10 seconds";
        }

        // VIEW MODES
        else if (cmd.includes("full screen") || cmd.includes("fullscreen")) {
            keys = 'f';
            action = "Toggled Fullscreen";
        }
        else if (cmd.includes("theater mode") || cmd.includes("theatre mode")) {
            keys = 't';
            action = "Toggled Theater Mode";
        }
        else if (cmd.includes("mini player") || cmd.includes("miniplayer") || cmd.includes("picture in picture")) {
            keys = 'i';
            action = "Toggled Miniplayer";
        }

        // SPEED
        // Shift + . is > (Speed Up)
        // Shift + , is < (Slow Down)
        else if (cmd.includes("speed up") || cmd.includes("increase playbackspeed")) {
            keys = '+{.}{.}{.}{.}'; // Send it multiple times? No, just once usually implies one step.
            // But SendKeys special chars need braces? 
            // . is not special, but > is shift+. 
            // SendKeys: + is SHIFT. 
            // So to send '>', we send '+.'
            keys = '+.';
            action = "Increased playback speed";
        }
        else if (cmd.includes("slow down") || cmd.includes("decrease playbackspeed")) {
            keys = '+,'; // <
            action = "Decreased playback speed";
        }

        // CAPTIONS
        else if (cmd.includes("caption") || cmd.includes("subtitle")) {
            keys = 'c';
            action = "Toggled Captions";
        }

        if (keys) {
            await focusChrome();
            await sendKeys(keys);
            executed = true;
        }

    } catch (error) {
        console.error("Error executing YouTube command:", error);
        return { executed: false, action: '', error: error.message };
    }

    return { executed, action };
};
