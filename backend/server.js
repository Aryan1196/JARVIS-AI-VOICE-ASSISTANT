import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@deepgram/sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { generateSpeech } from './tts.js';
import launcherRoutes from './launcherRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend directory explicitly
dotenv.config({ path: path.join(__dirname, '.env') });

const LOGS_FILE = path.join(__dirname, 'logs.json');
const KNOWLEDGE_BASE_FILE = path.join(__dirname, 'knowledge-base.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/launcher', launcherRoutes);

// Initialize Deepgram Client
let deepgram;
try {
    if (process.env.DEEPGRAM_API_KEY) {
        deepgram = createClient(process.env.DEEPGRAM_API_KEY);
    } else {
        console.warn('Warning: DEEPGRAM_API_KEY not found in environment variables. Speech recognition will not work.');
    }
} catch (error) {
    console.error('Deepgram initialization error:', error);
}

// Initialize Groq Client
let groq;
try {
    if (process.env.GROQ_API_KEY) {
        groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });
    } else {
        console.warn('Warning: GROQ_API_KEY not found. Helper functions dependent on Groq will fail.');
    }
} catch (error) {
    console.error('Groq initialization error:', error);
}

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// System prompt for JARVIS personality (NO time injection)
const SYSTEM_PROMPT = `You are JARVIS, an advanced AI assistant inspired by Iron Man's AI. 
You are helpful, witty, and speak in a refined, slightly formal manner. 
Keep responses concise (1-3 sentences) unless asked for more detail.
You assist with coding, general knowledge, and technical questions.
You have access to the conversation history and can reference previous topics discussed.
When provided with search results, use them to give accurate, up-to-date information.`;

// Keywords that indicate need for live data
const LIVE_DATA_KEYWORDS = [
    'current', 'today', 'now', 'live', 'latest', 'recent', 'just now', 'right now', 'news', 'latest news', 'latest updates', "currently"
];

// Weather keywords
const WEATHER_KEYWORDS = [
    'weather', 'temperature', 'forecast', 'rain', 'sunny', 'cloudy', 'climate', 'hot', 'cold', 'humidity'
];

// Stock/Finance keywords
const FINANCE_KEYWORDS = [
    'stock', 'share', 'market', 'nasdaq', 'dow', 'sp500', 's&p', 'stock price', 'trading', 'wall street'
];

// Crypto keywords
const CRYPTO_KEYWORDS = [
    'bitcoin', 'btc', 'ethereum', 'eth', 'crypto', 'cryptocurrency', 'dogecoin', 'ripple', 'litecoin', 'blockchain'
];

// News keywords
const NEWS_KEYWORDS = [
    'news', 'headlines', 'breaking', 'latest news', 'current events', 'updates'
];

// Sports keywords
const SPORTS_KEYWORDS = [
    'match', 'score', 'game', 'fixture', 'league', 'tournament', 'football', 'cricket', 'basketball', 'soccer'
];

// Time-related keywords for direct handling
const TIME_KEYWORDS = [
    'current time', 'time now', 'what time', 'time is it',
    'what is the time', 'tell me the time', 'time in'
];

// Timezone mappings (offset from UTC in hours)
const TIMEZONE_MAP = {
    // India
    'india': { offset: 5.5, name: 'IST' },
    'delhi': { offset: 5.5, name: 'IST' },
    'mumbai': { offset: 5.5, name: 'IST' },
    'bangalore': { offset: 5.5, name: 'IST' },
    'kolkata': { offset: 5.5, name: 'IST' },
    'chennai': { offset: 5.5, name: 'IST' },
    'ranchi': { offset: 5.5, name: 'IST' },
    'bhopal': { offset: 5.5, name: 'IST' },
    'jharkhand': { offset: 5.5, name: 'IST' },
    // USA
    'new york': { offset: -5, name: 'EST' },
    'nyc': { offset: -5, name: 'EST' },
    'los angeles': { offset: -8, name: 'PST' },
    'la': { offset: -8, name: 'PST' },
    'chicago': { offset: -6, name: 'CST' },
    'san francisco': { offset: -8, name: 'PST' },
    'seattle': { offset: -8, name: 'PST' },
    'miami': { offset: -5, name: 'EST' },
    'boston': { offset: -5, name: 'EST' },
    'washington': { offset: -5, name: 'EST' },
    'usa': { offset: -5, name: 'EST' },
    'america': { offset: -5, name: 'EST' },
    // Europe
    'london': { offset: 0, name: 'GMT' },
    'uk': { offset: 0, name: 'GMT' },
    'paris': { offset: 1, name: 'CET' },
    'berlin': { offset: 1, name: 'CET' },
    'germany': { offset: 1, name: 'CET' },
    'france': { offset: 1, name: 'CET' },
    // Asia
    'tokyo': { offset: 9, name: 'JST' },
    'japan': { offset: 9, name: 'JST' },
    'china': { offset: 8, name: 'CST' },
    'beijing': { offset: 8, name: 'CST' },
    'shanghai': { offset: 8, name: 'CST' },
    'singapore': { offset: 8, name: 'SGT' },
    'dubai': { offset: 4, name: 'GST' },
    'hong kong': { offset: 8, name: 'HKT' },
    'seoul': { offset: 9, name: 'KST' },
    'korea': { offset: 9, name: 'KST' },
    // Australia
    'sydney': { offset: 11, name: 'AEDT' },
    'melbourne': { offset: 11, name: 'AEDT' },
    'australia': { offset: 11, name: 'AEDT' },
    // Others
    'moscow': { offset: 3, name: 'MSK' },
    'russia': { offset: 3, name: 'MSK' }
};

// Check if query is asking for time
const isTimeQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    return TIME_KEYWORDS.some(keyword => lowerQuery.includes(keyword));
};

// Extract location from time query
const extractLocation = (query) => {
    const lowerQuery = query.toLowerCase();
    for (const location of Object.keys(TIMEZONE_MAP)) {
        if (lowerQuery.includes(location)) {
            return location;
        }
    }
    return 'india'; // Default to India
};

// Get time for any location
const getTimeForLocation = (query) => {
    const location = extractLocation(query);
    const tz = TIMEZONE_MAP[location];

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (tz.offset * 60 * 60 * 1000));

    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');

    const locationName = location.charAt(0).toUpperCase() + location.slice(1);
    return `The current time in ${locationName} (${tz.name}) is ${hours}:${minutes}:${seconds}.`;
};

// Check if query needs live data with regex for whole word matching
const needsLiveData = (query) => {
    const lowerQuery = query.toLowerCase();
    return LIVE_DATA_KEYWORDS.some(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        return regex.test(lowerQuery);
    });
};

// Global Puppeteer Browser Instance
let globalBrowser = null;

// Initialize Browser
const initBrowser = async () => {
    try {
        if (!globalBrowser) {
            console.log('[Puppeteer] Initializing global browser instance...');
            globalBrowser = await puppeteer.launch({
                headless: "new",
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--disable-gpu'
                ]
            });
            console.log('[Puppeteer] Global browser initialized.');
        }
    } catch (error) {
        console.error('[Puppeteer] Failed to initialize global browser:', error);
    }
};

// Initialize browser on startup
initBrowser();

// Perform web search using Puppeteer (Headless Browser)
// Perform web search using Puppeteer (Headless Browser)

const webSearch = async (query) => {
    if (!globalBrowser) {
        await initBrowser();
    }

    let page = null;
    try {
        page = await globalBrowser.newPage();

        // Optimizations: Block images, stylesheets, fonts
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (['image', 'stylesheet', 'font', 'media'].includes(req.resourceType())) {
                req.abort();
            } else {
                req.continue();
            }
        });

        // Set User-Agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
        console.log(`[Puppeteer] Navigating to: ${url}`);

        // Wait for DOM content only - fast!
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // Extract results
        const results = await page.evaluate(() => {
            const items = [];
            document.querySelectorAll('.result').forEach((element, index) => {
                if (index >= 5) return;
                const titleEl = element.querySelector('.result__title');
                const urlEl = element.querySelector('.result__a');
                const snippetEl = element.querySelector('.result__snippet');
                if (titleEl && urlEl) {
                    items.push({
                        title: titleEl.innerText.trim(),
                        url: urlEl.getAttribute('href'),
                        description: snippetEl ? snippetEl.innerText.trim() : ''
                    });
                }
            });
            return items;
        });

        console.log(`[Puppeteer] Found ${results.length} results.`);
        return results.length > 0 ? results : [];

    } catch (error) {
        console.error('[Puppeteer] ERROR:', error);
        return { error: error.message };
    } finally {
        if (page) {
            await page.close();
        }
    }
};

// Scrape YouTube directly for the first video result
const scrapeYouTubeVideo = async (query) => {
    if (!globalBrowser) {
        await initBrowser();
    }

    let page = null;
    try {
        page = await globalBrowser.newPage();

        // Optimizations
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (['image', 'stylesheet', 'font', 'media'].includes(req.resourceType())) {
                req.abort();
            } else {
                req.continue();
            }
        });

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        console.log(`[YouTube Scraper] Navigating to: ${url}`);

        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // Wait for video renderer (timeout fast if not found)
        try {
            await page.waitForSelector('ytd-video-renderer', { timeout: 5000 });
        } catch (e) {
            console.log('[YouTube Scraper] No video results found (selector timeout).');
            return null;
        }

        const videoUrl = await page.evaluate(() => {
            const video = document.querySelector('ytd-video-renderer a#video-title');
            return video ? video.href : null;
        });

        console.log(`[YouTube Scraper] Found URL: ${videoUrl}`);
        return videoUrl;

    } catch (error) {
        console.error('[YouTube Scraper] ERROR:', error.message);
        return null;
    } finally {
        if (page) {
            await page.close();
        }
    }
};

// Graceful Shutdown
process.on('SIGINT', async () => {
    if (globalBrowser) {
        console.log('[Puppeteer] Closing global browser...');
        await globalBrowser.close();
    }
    process.exit();
});

// Load knowledge base
const loadKnowledgeBase = () => {
    try {
        if (fs.existsSync(KNOWLEDGE_BASE_FILE)) {
            const data = fs.readFileSync(KNOWLEDGE_BASE_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading knowledge base:', error);
    }
    return { entries: [] };
};

// Search knowledge base for matching response
const searchKnowledgeBase = (query) => {
    const kb = loadKnowledgeBase();
    const lowerQuery = query.toLowerCase();

    // Support both formats: kb.entries or kb.knowledge_base.entries
    const entries = kb.entries || (kb.knowledge_base && kb.knowledge_base.entries) || [];

    for (const entry of entries) {
        const match = entry.keywords.some(keyword =>
            lowerQuery.includes(keyword.toLowerCase())
        );
        if (match) {
            console.log('Knowledge base match found for:', query);
            return entry.response;
        }
    }
    return null;
};

// Load conversation history from file
const loadConversationHistory = () => {
    try {
        if (fs.existsSync(LOGS_FILE)) {
            const data = fs.readFileSync(LOGS_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading logs:', error);
    }
    return [];
};

// Save conversation history to file
const saveConversationHistory = (history) => {
    try {
        fs.writeFileSync(LOGS_FILE, JSON.stringify(history, null, 2));
    } catch (error) {
        console.error('Error saving logs:', error);
    }
};

// Keep only last N messages to avoid token limits
const MAX_HISTORY = 50;

// Get URL from Groq for unknown websites
const getUrlFromGroq = async (query) => {
    if (!groq) {
        console.warn('Groq client not initialized. Skipping URL discovery.');
        return null;
    }

    try {
        console.log(`Asking Groq for URL of: "${query}"`);
        const prompt = `What is the official website URL for "${query}"? Reply ONLY with the URL (starting with https://), nothing else. If you don't know or it doesn't exist, reply with "UNKNOWN".`;

        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'llama-3.1-8b-instant',
            temperature: 0.3,
            max_tokens: 100
        });

        const response = chatCompletion.choices[0]?.message?.content?.trim() || 'UNKNOWN';
        console.log(`Groq Raw Response: "${response}"`);

        // Extract URL using regex to be safe against quotes or extra text
        const urlMatch = response.match(/https?:\/\/[^\s"']+/);

        if (!urlMatch) {
            console.log('No valid URL found in Groq response');
            return null;
        }

        const url = urlMatch[0];
        console.log(`Extracted URL: ${url}`);
        return url;
    } catch (error) {
        console.error('Groq URL discovery error:', error);
        return null;
    }
};

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Handle time queries directly - bypass LLM completely
        if (isTimeQuery(message)) {
            const response = getTimeForLocation(message);
            console.log('Time query handled directly:', response);
            return res.json({ response });
        }

        // Check for implicit launcher commands (e.g. "instagram, youtube")
        // If message consists ONLY of known apps/websites, launch them
        try {
            const { isKnownItem, smartLaunch } = await import('./launcher.js');
            const potentialItems = message.split(/,| and /i).map(i => i.trim()).filter(i => i.length > 0);

            if (potentialItems.length > 0 && potentialItems.every(item => isKnownItem(item))) {
                console.log('Implicit launcher command detected:', message);
                const result = await smartLaunch(message);
                return res.json({ response: result.message });
            }
        } catch (e) {
            console.error('Error checking implicit launch:', e);
        }

        // PRIORITY -2: YouTube Control Commands
        try {
            const { handleYouTubeControlCommand } = await import('./youtubecommand.js');
            const ytResult = await handleYouTubeControlCommand(message);
            if (ytResult.executed) {
                console.log('YouTube command executed:', ytResult.action);
                return res.json({ response: `I have ${ytResult.action.toLowerCase()}.` });
            }
        } catch (e) {
            console.error('Error executing YouTube command:', e);
        }

        // PRIORITY -1: Chrome Control Commands
        try {
            const { handleChromeCommand } = await import('./chromecontrol.js');
            const chromeResult = await handleChromeCommand(message);
            if (chromeResult.executed) {
                console.log('Chrome command executed:', chromeResult.action);
                return res.json({ response: `I have ${chromeResult.action.toLowerCase()}.` });
            }
        } catch (e) {
            console.error('Error executing Chrome command:', e);
        }

        // PRIORITY 0: Check for YouTube commands (Specific routing)
        try {
            const { handleYouTubeCommand, openWebsite } = await import('./launcher.js');
            const youtubeResult = await handleYouTubeCommand(message);

            if (youtubeResult && youtubeResult.success) {
                // Check if it's a "play" intent that requires finding a video
                if (youtubeResult.intent === 'play') {
                    const query = youtubeResult.query;
                    console.log(`Searching for video to play: ${query}`);

                    // Use scrapeYouTubeVideo for direct scraping
                    const videoUrl = await scrapeYouTubeVideo(query);

                    if (videoUrl) {
                        // Append autoplay & mute parameters to bypass browser policies
                        const urlWithAutoplay = videoUrl.includes('?')
                            ? `${videoUrl}&autoplay=1&mute=1`
                            : `${videoUrl}?autoplay=1&mute=1`;

                        console.log(`Found video: -> ${urlWithAutoplay}`);
                        await openWebsite(urlWithAutoplay);
                        return res.json({
                            response: `Playing "${query}" on YouTube.`
                        });
                    }

                    // Fallback to search results if no specific video found
                    const fallbackUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                    await openWebsite(fallbackUrl);
                    return res.json({ response: `I couldn't find a specific video, so I opened the search results for "${query}".` });
                }

                console.log('YouTube command routed:', message);
                return res.json({ response: youtubeResult.message });
            }
        } catch (e) {
            console.error('Error in YouTube routing:', e);
        }

        // PRIORITY 0.5: Implicit "Play" commands (e.g. "play despacito")
        // If not a known app/site, default to YouTube
        const playMatch = message.match(/^(?:play|listen to)\s+(.+)$/i);
        if (playMatch) {
            const target = playMatch[1].trim();
            try {
                const { isKnownItem, handleYouTubeCommand, openWebsite } = await import('./launcher.js');

                // If isKnownItem is false, route to YouTube 
                if (!isKnownItem(target)) {
                    console.log(`Implicit play command detected for: "${target}" -> Routing to YouTube`);

                    let query = target;
                    // Handle generic music requests
                    const genericTerms = ['songs', 'music', 'trending music', 'popular songs', 'hits'];
                    if (genericTerms.includes(target.toLowerCase())) {
                        query = "latest trending music hits right now";
                        console.log(`Generic term detected. Updated query to: ${query}`);
                    }

                    console.log(`Searching for video to play (implicit): ${query}`);

                    // Use scrapeYouTubeVideo for direct scraping
                    const videoUrl = await scrapeYouTubeVideo(query);

                    if (videoUrl) {
                        const urlWithAutoplay = videoUrl.includes('?')
                            ? `${videoUrl}&autoplay=1&mute=1`
                            : `${videoUrl}?autoplay=1&mute=1`;

                        console.log(`Found video: -> ${urlWithAutoplay}`);
                        await openWebsite(urlWithAutoplay);
                        return res.json({ response: `Playing "${query}" on YouTube.` });
                    }

                    // Fallback to search results
                    const fallbackUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                    await openWebsite(fallbackUrl);
                    return res.json({ response: `I couldn't find a specific video, so I opened the search results for "${query}".` });
                }
            } catch (e) {
                console.error('Error in implicit play routing:', e);
            }
        }

        // PRIORITY 1: Check for explicit launcher commands
        const launcherPatterns = [
            /(?:open|launch|start|run)\s+(.+)/i,
            /(?:go to|visit)\s+(.+)/i,
            /(?:search|google|look up)\s+(?:on\s+google\s+)?(?:for\s+)?(.+)/i
        ];

        for (const pattern of launcherPatterns) {
            const match = message.match(pattern);
            if (match) {
                const targetName = match[1].trim();
                console.log('Launcher command detected:', targetName);

                const { smartLaunch, openWebsite, searchAndOpen } = await import('./launcher.js');

                // Try smartLaunch WITHOUT search (to allow Groq fallback)
                const result = await smartLaunch(targetName, { noSearch: true });

                if (result.success) {
                    return res.json({ response: result.message });
                } else {
                    // Fallback: Ask Groq for the URL
                    console.log('smartLaunch failed locally, trying Groq fallback...');
                    const url = await getUrlFromGroq(targetName);

                    if (url) {
                        const websiteResult = await openWebsite(url);
                        if (websiteResult.success) {
                            return res.json({
                                response: `I found the website for "${targetName}" (${url}) and opened it for you!`
                            });
                        }
                    }

                    // If Groq also failed, perform the default Google search
                    console.log('Groq fallback failed, defaulting to Google search');
                    const searchResult = await searchAndOpen(targetName);
                    return res.json({ response: searchResult.message });
                }
            }
        }

        // PRIORITY 2: Check custom knowledge base
        const kbResponse = searchKnowledgeBase(message);
        if (kbResponse) {
            console.log('Responding from knowledge base');
            return res.json({ response: kbResponse });
        }

        // Load existing conversation history
        let history = loadConversationHistory();

        // Check if we need live data
        let searchContext = '';
        /* Logic updated to use Gemini for real-time queries */
        const isLiveQuery = needsLiveData(message);

        if (isLiveQuery) {
            console.log('Performing Google Custom Search for:', message);
            const searchResults = await webSearch(message);

            if (searchResults && searchResults.error) {
                console.error('Search failed with validation error:', searchResults.error);
                searchContext = `\n\n[SYSTEM NOTE]: Web search failed correctly. Error details: ${searchResults.error}. Inform the user about this specific technical error.`;
            } else if (searchResults === null) {
                searchContext = '\n\n[SYSTEM NOTE]: Web search mechanism failed completely (returned null). Inform the user.';
            } else if (searchResults.length > 0) {
                searchContext = '\n\n[LIVE SEARCH RESULTS]:\n' +
                    searchResults.map((r, i) =>
                        `${i + 1}. ${r.title}\n   ${r.description}\n   ${r.url}`
                    ).join('\n\n');
                console.log('Found', searchResults.length, 'results');
            } else {
                searchContext = '\n\n[SYSTEM NOTE]: Web search returned no results. Inform the user you couldn\'t find any live updates.';
            }

            // Build the user message with search context
            const userMessage = searchContext
                ? `${message}\n${searchContext}\n\nUse the search results above to answer my question accurately.`
                : message;

            // Use Gemini for real-time data queries
            console.log('Using Gemini for real-time query');
            try {
                const result = await model.generateContent([SYSTEM_PROMPT, userMessage]);
                const response = result.response.text();

                // Update history
                history.push({ role: 'user', content: message });
                history.push({ role: 'assistant', content: response });

                // Keep only recent history
                if (history.length > MAX_HISTORY * 2) {
                    history = history.slice(-MAX_HISTORY * 2);
                }
                saveConversationHistory(history);
                return res.json({ response });
            } catch (geminiError) {
                console.error('Gemini API error:', geminiError);
                console.log('Falling back to Groq due to Gemini error...');
                // Fallback to Groq logic below
            }
        }

        // Build the user message with search context if available (for Groq fallback or standard query)
        // If it was a live query that failed Gemini, we might still have searchContext.
        const userMessage = searchContext
            ? `${message}\n${searchContext}\n\nUse the search results above to answer my question accurately.`
            : message;

        // Build messages array with history
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.slice(-MAX_HISTORY),
            { role: 'user', content: userMessage }
        ];

        let response;
        if (groq) {
            const chatCompletion = await groq.chat.completions.create({
                messages,
                model: 'llama-3.1-8b-instant',
                temperature: 0.7,
                max_tokens: 512
            });
            response = chatCompletion.choices[0]?.message?.content || 'I apologize, I could not process that request.';
        } else {
            console.warn('Groq client not initialized. Using fallback response.');
            response = "I'm sorry, my language processing capabilities are currently limited because the API key is missing.";
        }

        // Update history with original message (not with search context)
        history.push({ role: 'user', content: message });
        history.push({ role: 'assistant', content: response });

        // Keep only recent history
        if (history.length > MAX_HISTORY * 2) {
            history = history.slice(-MAX_HISTORY * 2);
        }

        // Save updated history
        saveConversationHistory(history);

        res.json({ response });
    } catch (error) {
        console.error('Groq API error:', error);
        res.status(500).json({ error: 'Failed to get response from JARVIS' });
    }
});

// Endpoint to clear conversation history
app.post('/api/clear', (req, res) => {
    saveConversationHistory([]);
    res.json({ message: 'Conversation history cleared' });
});

// Endpoint to view conversation history
app.get('/api/history', (req, res) => {
    const history = loadConversationHistory();
    res.json({ history });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`JARVIS backend running on port ${PORT}`);
    console.log('Live web search enabled');
    console.log('Direct time handling enabled');
    console.log('Edge-TTS voice synthesis enabled');
});

// TTS endpoint - generates audio from text
app.post('/api/tts', async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        console.log('Generating TTS for:', text.substring(0, 50) + '...');
        const audioBuffer = await generateSpeech(text);

        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.length
        });
        res.send(audioBuffer);
    } catch (error) {
        console.error('TTS error:', error);
        res.status(500).json({ error: 'Failed to generate speech' });
    }
});

// Deepgram Token Endpoint
app.get('/api/deepgram-token', async (req, res) => {
    try {
        if (!process.env.DEEPGRAM_API_KEY) {
            console.error('Deepgram API Key is missing');
            return res.status(500).json({ error: 'Deepgram API Key is missing in backend .env' });
        }

        // Return the key to the frontend
        res.json({ key: process.env.DEEPGRAM_API_KEY });
    } catch (error) {
        console.error('Deepgram token error:', error);
        res.status(500).json({ error: 'Failed to get Deepgram token' });
    }
});


