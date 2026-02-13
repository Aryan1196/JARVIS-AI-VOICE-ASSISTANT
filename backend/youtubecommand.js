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
        else if (cmd.includes("volume up") || cmd.includes("louder")) {
            keys = '{UP}';
            action = "Increased volume";
        }
        else if (cmd.includes("volume down") || cmd.includes("quieter")) {
            keys = '{DOWN}';
            action = "Decreased volume";
        }

        // SEEKING
        else if (cmd.includes("forward 5") || cmd.includes("skip forward") || cmd.includes("skip 5 seconds")) {
            keys = '{RIGHT}';
            action = "Skipped forward 5 seconds";
        }
        else if (cmd.includes("back 5") || cmd.includes("skip back") || cmd.includes("rewind")||cmd.includes("skip 5 seconds back")) {
            keys = '{LEFT}';
            action = "Skipped back 5 seconds";
        }
        else if (cmd.includes("forward 10")||cmd.includes("skip 10 seconds")) {
            keys = 'l';
            action = "Skipped forward 10 seconds";
        }
        else if (cmd.includes("back 10")||cmd.includes("rewind 10 seconds")) {
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
        else if (cmd.includes("speed up")) {
            keys = '+{.}{.}{.}{.}'; // Send it multiple times? No, just once usually implies one step.
            // But SendKeys special chars need braces? 
            // . is not special, but > is shift+. 
            // SendKeys: + is SHIFT. 
            // So to send '>', we send '+.'
            keys = '+.';
            action = "Increased playback speed";
        }
        else if (cmd.includes("slow down")) {
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
