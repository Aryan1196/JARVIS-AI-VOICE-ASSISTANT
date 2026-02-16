import { exec } from 'child_process';

let isFocusing = false;

const focusChrome = () => {
    if (isFocusing) return Promise.resolve();
    isFocusing = true;

    return new Promise((resolve) => {
        const psCommand = `powershell -Command "(New-Object -ComObject WScript.Shell).AppActivate('Google Chrome')"`;
        exec(psCommand, (error) => {
            if (error) console.error(`Error focusing Chrome: ${error.message}`);
            // Give it a moment to actually focus
            setTimeout(() => {
                isFocusing = false;
                resolve();
            }, 200);
        });
    });
};

const sendKeys = (keys) => {
    return new Promise((resolve, reject) => {
        // Escape single quotes if necessary
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

export const handleChromeCommand = async (command) => {
    const cmd = command.toLowerCase();
    let executed = false;
    let action = '';
    let keys = '';

    try {
        // TABS
        // ADDRESS BAR
        if (cmd.includes("focus address")) {
            keys = '^l'; // or Alt + D
            action = "Focused address bar";
        }
        else if (cmd.includes("open file")) {
            keys = '^o';
            action = "Opened file dialog";
        }

        // TABS
        else if (cmd.includes("new tab")) {
            keys = '^t';
            action = "Opened a new tab";
        }
        else if (cmd.includes("close tab") || cmd.includes("close this tab")) {
            keys = '^w';
            action = "Closed the current tab";
        }
        else if (cmd.includes("reopen tab") || cmd.includes("reopen closed tab")) {
            keys = '^+t';
            action = "Reopened the last closed tab";
        }
        else if (cmd.includes("next tab")) {
            keys = '^{TAB}';
            action = "Switched to next tab";
        }
        else if (cmd.includes("previous tab")) {
            keys = '^+{TAB}';
            action = "Switched to previous tab";
        }
        else if (cmd.includes("first tab")) {
            keys = '^1';
            action = "Switched to first tab";
        }
        else if (cmd.includes("last tab")) {
            keys = '^9';
            action = "Switched to last tab";
        }
        else if (cmd.includes("switch to tab") || cmd.includes("go to tab") || cmd.includes("switch tab") || cmd.includes("switching tab")) {
            // Matches: "switch to tab 3", "switch to tab number 3", "switch tab 3", "switching tab 3"
            // Also supports words: "switch to tab number four"
            const match = cmd.match(/(?:switch(?:ing)?|go)(?: to)? tabs?(?: number)?\s+([a-z0-9]+)/i);
            if (match) {
                const numMap = {
                    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
                    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
                };
                let val = match[1];
                let tabNum = parseInt(val);

                if (isNaN(tabNum)) {
                    tabNum = numMap[val.toLowerCase()];
                }

                if (tabNum) {
                    if (tabNum >= 1 && tabNum <= 8) {
                        keys = `^${tabNum}`;
                        action = `Switched to tab ${tabNum}`;
                    } else if (tabNum === 9) {
                        keys = '^9';
                        action = "Switched to last tab";
                    } else {
                        return { executed: false, action: '', error: `Tab ${tabNum} is out of range. I can only switch to tabs 1-8 directly, or 9 for the last tab.` };
                    }
                }
            }
        }

        // WINDOWS
        else if (cmd.includes("new window")) {
            keys = '^n';
            action = "Opened a new window";
        }
        else if (cmd.includes("incognito") || cmd.includes("private window")) {
            keys = '^+n';
            action = "Opened a new Incognito window";
        }
        else if (cmd.includes("close window")) {
            keys = '^+w'; // Or Alt+F4 -> '%{F4}'
            action = "Closed the window";
        }

        // NAVIGATION
        else if (cmd.includes("refresh") || cmd.includes("reload page")) {
            keys = '^r';
            action = "Refreshed the page";
        }
        else if (cmd.includes("hard refresh")) {
            keys = '^+r';
            action = "Hard refreshed the page";
        }
        else if (cmd.includes("go back")) {
            keys = '%{LEFT}';
            action = "Went back";
        }
        else if (cmd.includes("go forward")) {
            keys = '%{RIGHT}';
            action = "Went forward";
        }
        else if (/\bhome\b/i.test(cmd)) {
            keys = '{HOME}';
            action = "Went to top of page";
        }
        else if (/\bend\b/i.test(cmd)) {
            keys = '{END}';
            action = "Went to bottom of page";
        }

        // PAGE
        else if (cmd.includes("zoom in")) {
            keys = '^{+}{=}'; // Ctrl + Shift + = (Control Plus)
            action = "Zoomed in";
        }
        else if (cmd.includes("zoom out")) {
            keys = '^-';
            action = "Zoomed out";
        }
        else if (cmd.includes("reset zoom")) {
            keys = '^0';
            action = "Reset zoom";
        }
        else if (cmd.includes("scroll down")) {
            const match = cmd.match(/scroll down.*?(\d+)/);
            const count = match ? parseInt(match[1]) : 1;
            const safeCount = Math.min(Math.max(count, 1), 20); // Cap at 20
            keys = '{PGDN}'.repeat(safeCount);
            action = `Scrolled down${safeCount > 1 ? ' ' + safeCount + ' times' : ''}`;
        }
        else if (cmd.includes("scroll up")) {
            const match = cmd.match(/scroll up.*?(\d+)/);
            const count = match ? parseInt(match[1]) : 1;
            const safeCount = Math.min(Math.max(count, 1), 20);
            keys = '{PGUP}'.repeat(safeCount);
            action = `Scrolled up${safeCount > 1 ? ' ' + safeCount + ' times' : ''}`;
        }
        else if (cmd.includes("print page")) {
            keys = '^p';
            action = "Opened print dialog";
        }
        else if (cmd.includes("save page")) {
            keys = '^s';
            action = "Opened save dialog";
        }

        // DEV TOOLS & SOURCE
        else if (cmd.includes("dev tools") || cmd.includes("inspect element")) {
            keys = '^+i';
            action = "Toggled Developer Tools";
        }
        else if (cmd.includes("console")) {
            keys = '^+j';
            action = "Opened Console";
        }
        else if (cmd.includes("view source")) {
            keys = '^u';
            action = "Opened Page Source";
        }

        // HISTORY & DOWNLOADS
        else if (cmd.includes("history")) {
            keys = '^h';
            action = "Opened History";
        }
        else if (cmd.includes("downloads")) {
            keys = '^j';
            action = "Opened Downloads";
        }



        // SYSTEM: BRIGHTNESS
        else if (cmd.includes("brightness")) {
            const match = cmd.match(/brightness.*?(\d+)/);
            if (match) {
                let level = parseInt(match[1]);
                level = Math.max(0, Math.min(level, 100)); // Clamp 0-100

                // PowerShell command to set brightness using WMI
                // This works on most laptops and supported displays
                const psBrightness = `powershell -Command "(Get-WmiObject -Namespace root/wmi -Class WmiMonitorBrightnessMethods).WmiSetBrightness(1, ${level})"`;

                exec(psBrightness, (error) => {
                    if (error) console.error(`Error setting brightness: ${error.message}`);
                });

                executed = true; // Mark as executed so we don't try to send keys
                action = `Set brightness to ${level}%`;
                keys = ''; // No keys to send for this one
            }
        }

        if (keys) {
            await focusChrome();
            await sendKeys(keys);
            executed = true;
        }

    } catch (error) {
        console.error("Error executing Chrome command:", error);
        return { executed: false, action: '', error: error.message };
    }

    return { executed, action };
};
