import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * System Launcher - Opens applications and websites
 * Works on Windows systems
 */

// Common applications mapping
const APPLICATIONS = {
    // Browsers
    'chrome': 'start chrome',
    'google chrome': 'start chrome',
    'firefox': 'start firefox',
    'edge': 'start microsoft-edge:',
    'microsoft edge': 'start microsoft-edge:',
    'brave': 'start brave',

    // Microsoft Office
    'word': 'start winword',
    'excel': 'start excel',
    'powerpoint': 'start powerpnt',
    'outlook': 'start outlook',
    'onenote': 'start onenote',

    // Communication
    'discord': 'start discord:',
    'slack': 'start slack:',
    'teams': 'start msteams:',
    'microsoft teams': 'start msteams:',
    'zoom': 'start zoommtg:',
    'skype': 'start skype:',

    // Development Tools
    'vscode': "start code",
    'visual studio code': "start vscode",
    'notepad++': 'start notepad++',
    'git bash': 'start "" "C:\\Program Files\\Git\\git-bash.exe"',
    'cmd': 'start ',
    'command prompt': 'start cmd',
    'powershell': 'start powershell',
    'terminal': 'start wt',
    'windows terminal': 'start wt',

    // Media
    'spotify': 'start spotify:',
    'vlc': 'start vlc',
    'media player': 'start wmplayer',

    // System Apps
    'whatsapp': 'start whatsapp:',
    'calculator': 'start calc',
    'calc': 'start calc',
    'notepad': 'start notepad',
    'paint': 'start mspaint',
    'settings': 'start ms-settings:',
    'control panel': 'start control',
    'task manager': 'start taskmgr',
    'file explorer': 'start explorer',
    'explorer': 'start explorer',
    'Lenovo App': 'start "C:\Program Files\Lenovo\Lenovo Vantage\LenovoVantage.exe"',

    // Other
    'steam': 'start steam:',
    'obs': 'start obs64',
    'photoshop': 'start photoshop',
    'illustrator': 'start illustrator',
};

// Common websites mapping
const WEBSITES = {
    'google': 'https://www.google.com',
    'bing': 'https://www.bing.com',
    'duckduckgo': 'https://duckduckgo.com',
    'chatgpt': 'https://chat.openai.com',
    'openai': 'https://chat.openai.com',
    'gemini': 'https://gemini.google.com',
    'claude': 'https://claude.ai',
    'perplexity': 'https://www.perplexity.ai',
    'phind': 'https://www.phind.com',

    // Video & Streaming
    'youtube': 'https://www.youtube.com',
    'youtube studio': 'https://studio.youtube.com',
    'netflix': 'https://www.netflix.com',
    'prime video': 'https://www.primevideo.com',
    'hotstar': 'https://www.hotstar.com',
    'twitch': 'https://www.twitch.tv',
    'anime': 'https://hianime.to',

    // Music
    'spotify web': 'https://open.spotify.com',
    'soundcloud': 'https://soundcloud.com',

    // Social
    'facebook': 'https://www.facebook.com',
    'instagram': 'https://www.instagram.com',
    'twitter': 'https://twitter.com',
    'x': 'https://twitter.com',
    'linkedin': 'https://www.linkedin.com',
    'reddit': 'https://www.reddit.com',
    'discord web': 'https://discord.com/app',

    // Mail & Chat
    'gmail': 'https://mail.google.com',
    'outlook mail': 'https://outlook.live.com',
    'yahoo mail': 'https://mail.yahoo.com',
    'whatsapp web': 'https://web.whatsapp.com',
    'telegram web': 'https://web.telegram.org',

    // Developer
    'github': 'https://github.com',
    'gitlab': 'https://gitlab.com',
    'bitbucket': 'https://bitbucket.org',
    'stackoverflow': 'https://stackoverflow.com',
    'stack overflow': 'https://stackoverflow.com',
    'npm': 'https://www.npmjs.com',
    'pypi': 'https://pypi.org',
    'leetcode': 'https://leetcode.com',
    'codeforces': 'https://codeforces.com',
    'hackerrank': 'https://www.hackerrank.com',

    // Cloud & Hosting
    'aws': 'https://aws.amazon.com',
    'azure': 'https://portal.azure.com',
    'google cloud': 'https://console.cloud.google.com',
    'vercel': 'https://vercel.com',
    'netlify': 'https://www.netlify.com',
    'render': 'https://render.com',

    // Design & Docs
    'figma': 'https://www.figma.com',
    'canva': 'https://www.canva.com',
    'notion': 'https://www.notion.so',
    'docs': 'https://docs.google.com',
    'sheets': 'https://sheets.google.com',
    'slides': 'https://slides.google.com',

    // Learning
    'coursera': 'https://www.coursera.org',
    'udemy': 'https://www.udemy.com',
    'edx': 'https://www.edx.org',
    'freecodecamp': 'https://www.freecodecamp.org',
    'khan academy': 'https://www.khanacademy.org',

    // Utilities
    'google maps': 'https://maps.google.com',
    'google drive': 'https://drive.google.com',
    'calendar': 'https://calendar.google.com',
    'speed test': 'https://www.speedtest.net',
    'manga website': 'https://mangafire.to',

    // Local / Dev
    'localhost': 'https://jarvis-ai-voice-assistant-theta.vercel.app/',
    'dev server': 'https://jarvis-ai-voice-assistant-theta.vercel.app/',
    'my website': 'https://jarvis-ai-voice-assistant-theta.vercel.app/',

};

/**
 * Open an application by name
 */
export const openApp = async (appName) => {
    const lowerName = appName.toLowerCase().trim();

    // Check if app is in our mapping
    const command = APPLICATIONS[lowerName];

    if (!command) {
        return {
            success: false,
            message: `Application "${appName}" not found in the system.`,
            suggestion: 'Try: chrome, vscode, calculator, discord, spotify, etc.'
        };
    }

    try {
        console.log(`Opening application: ${appName}`);
        console.log(`Command: ${command}`);

        await execAsync(command, { windowsHide: false });

        return {
            success: true,
            message: `Successfully opened ${appName}.`,
            app: appName
        };
    } catch (error) {
        console.error(`Error opening ${appName}:`, error.message);
        return {
            success: false,
            message: `Failed to open ${appName}. ${error.message}`,
            error: error.message
        };
    }
};

/**
 * Open a website by name or URL
 */
export const openWebsite = async (siteName) => {
    const lowerName = siteName.toLowerCase().trim();

    // Check if it's a known website
    let url = WEBSITES[lowerName];

    // If not found, check if it's already a URL
    if (!url) {
        if (siteName.startsWith('http://') || siteName.startsWith('https://')) {
            url = siteName;
        } else if (siteName.includes('.com') || siteName.includes('.org') || siteName.includes('.net')) {
            url = siteName.startsWith('www.') ? `https://${siteName}` : `https://www.${siteName}`;
        } else {
            return {
                success: false,
                message: `Website "${siteName}" not found.`,
                suggestion: 'Try: youtube, gmail, github, reddit, netflix, etc. or provide a full URL.'
            };
        }
    }

    try {
        console.log(`Opening website: ${siteName}`);
        // console.log(`URL: ${url}`);

        // Open in default browser, handling ampersands correctly
        // Windows 'start' needs an empty title argument if the first argument is quoted
        await execAsync(`start "" "${url}"`);

        // Extract cleaner name for speech
        let cleanName = siteName;
        try {
            const urlObj = new URL(url);
            cleanName = urlObj.hostname.replace('www.', '').split('.')[0];
            cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        } catch (e) {
            // fallback to siteName if URL parsing fails
        }

        return {
            success: true,
            message: `Successfully opened ${cleanName}.`,
            url: url
        };
    } catch (error) {
        console.error(`Error opening ${siteName}:`, error.message);
        return {
            success: false,
            message: `Failed to open ${siteName}. ${error.message}`,
            error: error.message
        };
    }
};

/**
 * Search and open website via Google search
 */
export const searchAndOpen = async (query) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    try {
        console.log(`Searching for: ${query}`);
        await execAsync(`start ${searchUrl}`);

        return {
            success: true,
            message: `Searching for "${query}" on Google.`,
            query: query
        };
    } catch (error) {
        console.error(`Error searching:`, error.message);
        return {
            success: false,
            message: `Failed to perform search.`,
            error: error.message
        };
    }
};

/**
 * Get list of available apps
 */
export const listApps = () => {
    return {
        apps: Object.keys(APPLICATIONS).sort(),
        count: Object.keys(APPLICATIONS).length
    };
};

/**
 * Get list of available websites
 */
export const listWebsites = () => {
    return {
        websites: Object.keys(WEBSITES).sort(),
        count: Object.keys(WEBSITES).length
    };
};

/**
 * Intelligent launcher - determines if input is app or website
 * Supports multiple items separated by comma or "and"
 */
export const smartLaunch = async (input, options = {}) => {
    // Split input by comma or "and"
    const items = input.split(/,| and /i).map(item => item.trim()).filter(item => item.length > 0);

    // If only one item, proceed as before (but still return array-like result for consistency if needed, 
    // but the current server.js expects a single object response. 
    // We'll return a combined message.)

    if (items.length === 1) {
        return await launchSingle(items[0], options);
    }

    // Handle multiple items
    const results = [];
    for (const item of items) {
        results.push(await launchSingle(item, options));
    }

    // Aggregate results
    const successes = results.filter(r => r.success);
    const failures = results.filter(r => !r.success);

    let message = '';
    if (successes.length > 0) {
        message += `Successfully opened ${successes.map(r => r.app || r.url || r.query).join(', ')}. `;
    }
    if (failures.length > 0) {
        message += `Failed to open ${failures.map(r => r.item).join(', ')}.`;
    }

    return {
        success: successes.length > 0,
        message: message.trim(),
        results: results
    };
};

/**
 * Helper to calculate Levenshtein distance
 */
function getEditDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Find closest match in keys
 */
function findClosestMatch(input, targets) {
    const lowerInput = input.toLowerCase().trim();
    let bestMatch = null;
    let minDistance = Infinity;

    for (const key of targets) {
        const distance = getEditDistance(lowerInput, key);
        if (distance < minDistance) {
            minDistance = distance;
            bestMatch = key;
        }
    }

    // Allow match if distance is small enough (e.g. <= 2 edits for words > 4 chars)
    const threshold = lowerInput.length > 4 ? 2 : 1;
    if (minDistance <= threshold) {
        return bestMatch;
    }
    return null;
}

/**
 * Helper to launch a single item
 */
async function launchSingle(input, options = {}) {
    const lowerInput = input.toLowerCase().trim();

    // 1. Exact matches
    if (APPLICATIONS[lowerInput]) return await openApp(input);
    if (WEBSITES[lowerInput]) return await openWebsite(input);

    // 2. Fuzzy matches
    const appMatch = findClosestMatch(lowerInput, Object.keys(APPLICATIONS));
    if (appMatch) {
        console.log(`Fuzzy match: ${input} -> ${appMatch}`);
        return await openApp(appMatch);
    }

    const siteMatch = findClosestMatch(lowerInput, Object.keys(WEBSITES));
    if (siteMatch) {
        console.log(`Fuzzy match: ${input} -> ${siteMatch}`);
        return await openWebsite(siteMatch);
    }

    // 3. URL check
    if (input.includes('.com') || input.includes('.org') || input.includes('http')) {
        return await openWebsite(input);
    }

    // Default to search
    if (options.noSearch) {
        return {
            success: false,
            message: `Could not find application or website "${input}".`,
            notFound: true,
            item: input
        };
    }

    return await searchAndOpen(input);
}

/**
 * Check if an item is a known app or website (including fuzzy match)
 */
export const isKnownItem = (input) => {
    const lowerInput = input.toLowerCase().trim();

    // Exact match
    if (APPLICATIONS[lowerInput] || WEBSITES[lowerInput]) return true;

    // Fuzzy match
    const appMatch = findClosestMatch(lowerInput, Object.keys(APPLICATIONS));
    if (appMatch) return true;

    const siteMatch = findClosestMatch(lowerInput, Object.keys(WEBSITES));
    if (siteMatch) return true;

    return !!(input.includes('.com') || input.includes('.org') || input.includes('http'));
};

/**
 * Extract clean query from YouTube command
 */
export const extractYouTubeQuery = (command) => {
    // Remove filler words (case insensitive)
    let query = command
        .replace(/\b(open|search|play|find|watch)\b/gi, '')
        .replace(/\b(on youtube|in youtube|from youtube)\b/gi, '')
        .replace(/\byoutube\b/gi, '')
        .trim();

    // Remove extra spaces
    return query.replace(/\s+/g, ' ');
};

/**
 * Handle YouTube specific commands
 */
export const handleYouTubeCommand = async (command) => {
    const lowerCommand = command.toLowerCase();

    // 1. Detect Intent
    if (!lowerCommand.includes('youtube')) {
        return null; // Not a YouTube command
    }

    // 2. Extract Query
    const query = extractYouTubeQuery(command);

    console.log(`[YouTube Router] Raw: "${command}" -> Query: "${query}"`);

    // Case A: "Open YouTube" (No query)
    if (!query) {
        return await openWebsite('https://www.youtube.com');
    }

    // Case B: "Open [Channel] on YouTube"
    // If query is a single word/name, try channel URL
    // e.g. "open carryminati on youtube" -> "carryminati"
    const isOpenCommand = lowerCommand.startsWith('open');
    if (isOpenCommand && !query.includes(' ')) {
        const channelUrl = `https://www.youtube.com/@${query}`;
        console.log(`[YouTube Router] Trying channel URL: ${channelUrl}`);

        // We can't easily verify if channel exists without API, 
        // so we'll try to open it. If it's a 404, the user will see it.
        // Alternative: Default to search if unsure.
        // Let's try channel for single words, search for others.
        return await openWebsite(channelUrl);
    }

    // Case C: "Play [Video] on YouTube"
    // Return intent to server for scraping
    if (lowerCommand.startsWith('play')) {
        console.log(`[YouTube Router] Play intent detected for: "${query}"`);
        return {
            success: true,
            intent: 'play',
            query: query,
            message: `Looking for "${query}" on YouTube...`
        };
    }

    // Case D: "Search [Query] on YouTube"
    // Default to search results
    // "play lo fi music on youtube" -> "lo fi music"
    // "search coding on youtube" -> "coding"
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

    // Auto-play logic (optional enhancement)
    // If "play" command, we could try to open the first video, 
    // but that requires scraping. For now, search results is safer.

    console.log(`[YouTube Router] Search URL: ${searchUrl}`);
    return await openWebsite(searchUrl);
};

// Map of friendly app names to their process names (for taskkill)
const PROCESS_MAP = {
    'chrome': 'chrome.exe',
    'google chrome': 'chrome.exe',
    'firefox': 'firefox.exe',
    'edge': 'msedge.exe',
    'microsoft edge': 'msedge.exe',
    'brave': 'brave.exe',
    'notepad': 'notepad.exe',
    'calculator': 'CalculatorApp.exe', // Modern windows calc
    'calc': 'CalculatorApp.exe',
    'whatsapp': 'WhatsApp.Root.exe',
    'spotify': 'Spotify.exe',
    'discord': 'Discord.exe',
    'vlc': 'vlc.exe',
    'word': 'WINWORD.EXE',
    'excel': 'EXCEL.EXE',
    'powerpoint': 'POWERPNT.EXE',
    'vscode': 'Code.exe',
    'visual studio code': 'Code.exe',
    'cmd': 'cmd.exe',
    'command prompt': 'cmd.exe',
    'powershell': 'powershell.exe',
    'steam': 'steam.exe',
    'obs': 'obs64.exe',
    'task manager': 'Taskmgr.exe'
};

/**
 * Close an application by name
 */
export const closeApp = async (appName) => {
    const lowerName = appName.toLowerCase().trim();
    console.log(`[DEBUG] closeApp called for: "${appName}" (lower: "${lowerName}")`);

    // Check if it's a website first
    if (WEBSITES[lowerName] || lowerName.includes('.com')) {
        console.log(`[DEBUG] Identified as website: ${lowerName}`);
        return {
            success: false,
            message: `I cannot close specific websites like ${appName} directly. Please use "Close tab" to close the current tab.`,
            isWebsite: true
        };
    }
    console.log(`[DEBUG] Not a website, checking process map...`);

    // Check mapping or assume name matches process
    let processName = PROCESS_MAP[lowerName];

    if (!processName) {
        // Try to guess process name (e.g. "notepad++" -> "notepad++.exe")
        // Remove spaces and special chars
        processName = lowerName.replace(/\s+/g, '') + '.exe';
    }

    try {
        console.log(`Attempting to close ${appName} (Process: ${processName})`);

        // Try taskkill first
        try {
            const command = `taskkill /IM "${processName}" /F`;
            await execAsync(command);
        } catch (taskkillError) {
            // If taskkill fails, try PowerShell Stop-Process (better for strict permissions)
            // AND handle UWP naming conventions if needed
            if (processName.toLowerCase() === 'whatsapp.root.exe' || processName.toLowerCase() === 'notepad.exe') {
                console.log(`Taskkill failed, trying PowerShell Stop-Process for ${processName}`);
                // Remove .exe for Stop-Process -Name, but for WhatsApp.Root it might need just "WhatsApp" or "WhatsApp.Root"
                let procNameNoExt = processName.replace('.exe', '');

                const psCommand = `powershell -Command "Stop-Process -Name '${procNameNoExt}' -Force -ErrorAction SilentlyContinue"`;
                await execAsync(psCommand);
            } else {
                throw taskkillError;
            }
        }

        return {
            success: true,
            message: `Closed ${appName}.`,
            process: processName
        };
    } catch (error) {
        // Check if error is "process not found"
        if (error.message.includes('not found')) {
            return {
                success: false,
                message: `I couldn't find a running process for ${appName}.`,
                error: 'Process not found'
            };
        }

        console.error(`Error closing ${appName}:`, error.message);
        return {
            success: false,
            message: `Failed to close ${appName}.`,
            error: error.message
        };
    }
};
