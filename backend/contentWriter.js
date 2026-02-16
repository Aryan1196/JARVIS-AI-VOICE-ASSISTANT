import fs from 'fs';
import path from 'path';
import os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.join(__dirname, '.env') });

const execAsync = promisify(exec);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// Fallback to gemini-1.5-flash-latest or gemini-pro if flash is not available
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// Initialize Groq
let groq;
if (process.env.GROQ_API_KEY) {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

// Get Desktop Path (Adjust for OneDrive if needed)
const getDesktopPath = () => {
    const homeDir = os.homedir();
    const oneDriveDesktop = path.join(homeDir, 'OneDrive', 'Desktop');
    const standardDesktop = path.join(homeDir, 'Desktop');

    if (fs.existsSync(oneDriveDesktop)) {
        return oneDriveDesktop;
    }
    return standardDesktop;
};

/**
 * Handle Write Command
 * @param {string} message - User's command
 * @returns {object|null} - Response object if handled, null otherwise
 */
export const handleWriteCommand = async (message) => {
    const lowerMessage = message.toLowerCase();

    // Regex to detect "write" intent
    // Improved to handle "write me", "write us", etc.
    const writeRegex = /^(?:please\s+|jarvis\s+|can\s+you\s+)*write\s+(?:me\s+|us\s+)?(?:a\s+|an\s+|the\s+)?(\w+)\s+(?:about|for|to|on|regarding)?\s*(.*)$/i;

    // Log input for debugging
    const desktopDebugPath = path.join(getDesktopPath(), 'debug_content_writer.log');
    try { fs.appendFileSync(desktopDebugPath, `[${new Date().toISOString()}] Input: "${message}"\n`); } catch (e) { }

    // Additional check for "code" keyword specifically
    const match = lowerMessage.match(writeRegex);

    if (!match) return null;

    let type = match[1].trim();
    let topic = match[2].trim();

    // Common write types
    const writeTypes = ['email', 'letter', 'code', 'script', 'essay', 'poem', 'story', 'note', 'application', 'program', 'report', 'invitation','article','blog','memo','letter','note','report','resume','summary','thesis','whitepaper','proposal','speech',''];

    // If the "type" isn't a standard document type, it might be a coding language
    // e.g. "write python..." -> type="python"

    const isCode = type.includes('code') ||
        ['python', 'javascript', 'java', 'c++', 'html', 'css', 'sql', 'bash', 'react', 'node', 'assembly'].some(lang => type.includes(lang));

    // If it's not a recognizable "write" command, ignore (unless it explicitly says "write code")
    if (!writeTypes.includes(type) && !isCode) {
        // Double check: if the user said "write a code", let's process it
        if (type !== 'code') return null;
    }

    if (!topic) {
        // If topic is missing, it might be just "write an email" -> we need more info usually, 
        // but we can generate a template.
        topic = "general purpose";
    }

    console.log(`[ContentWriter] Intent detected: Type="${type}", Topic="${topic}"`);

    try {
        // 1. Generate Content
        const generated = await generateContent(type, topic);
        if (!generated) {
            return {
                executed: true,
                response: "I'm sorry, I couldn't generate the content you requested. Both my primary and backup generation systems failed."
            };
        }

        // 2. Determine Filename and Extension
        const { filename, content } = prepareFileDetails(type, topic, generated);

        // 3. Save to Desktop
        const filePath = await saveToDesktop(filename, content);

        // 4. Open the File
        await openFile(filePath);

        return {
            executed: true,
            response: `I have generated the ${type} and saved it to your Desktop.`
        };

    } catch (error) {
        console.error('[ContentWriter] Error:', error);
        return {
            executed: true,
            response: `I encountered an error while writing your ${type}. ${error.message}`
        };
    }
};

/**
 * Generate content using Gemini with Groq fallback
 */
const generateContent = async (type, topic) => {
    console.log(`[ContentWriter] Generating content for ${type}...`);

    let prompt;
    if (type.includes('code') || ['python', 'javascript', 'java', 'html', 'css'].some(t => type.includes(t))) {
        prompt = `Write a ${type} for: ${topic}. 
        IMPORTANT: Provide ONLY the code. Do not include markdown code blocks (like \`\`\`python). 
        Do not include explanations or comments outside the code. 
        If comments are needed, put them inside the code. 
        The output should be ready to save directly to a source file.`;
    } else {
        prompt = `Write a ${type} about: ${topic}.
        Format it professionally. 
        Do not include meta-text like "Here is your email:". 
        Just provide the content of the ${type}.`;
    }

    const desktopDebugPath = path.join(getDesktopPath(), 'debug_content_writer.log');
    let content = null;

    // Try Gemini
    try {
        const debugLog = `[${new Date().toISOString()}] Trying Gemini. Key Status: ${process.env.GOOGLE_API_KEY ? 'Present' : 'MISSING'}\n`;
        try { fs.appendFileSync(desktopDebugPath, debugLog); } catch (e) { }

        const result = await model.generateContent([prompt]);
        content = result.response.text();

        try { fs.appendFileSync(desktopDebugPath, `[Success] Gemini Response length: ${content.length}\n`); } catch (e) { }
    } catch (geminiError) {
        const errorLog = `[Gemini Error] ${geminiError.message}\n`;
        try { fs.appendFileSync(desktopDebugPath, errorLog); } catch (e) { }
        console.error('[ContentWriter] Gemini failed:', geminiError.message);

        // Fallback to Groq
        if (groq) {
            console.log('[ContentWriter] Falling back to Groq...');
            try {
                try { fs.appendFileSync(desktopDebugPath, `[${new Date().toISOString()}] Trying Groq fallback.\n`); } catch (e) { }

                const completion = await groq.chat.completions.create({
                    messages: [{ role: "user", content: prompt }],
                    model: "llama-3.1-8b-instant",
                    temperature: 0.7,
                });

                content = completion.choices[0]?.message?.content || null;

                if (content) {
                    try { fs.appendFileSync(desktopDebugPath, `[Success] Groq Response length: ${content.length}\n`); } catch (e) { }
                }
            } catch (groqError) {
                const groqLog = `[Groq Error] ${groqError.message}\n`;
                try { fs.appendFileSync(desktopDebugPath, groqLog); } catch (e) { }
                console.error('[ContentWriter] Groq failed:', groqError.message);
            }
        } else {
            const noGroqLog = `[Groq] Not initialized (Key missing?)\n`;
            try { fs.appendFileSync(desktopDebugPath, noGroqLog); } catch (e) { }
        }
    }

    if (!content) return null;

    // Clean up markdown blocks if they slipped in
    let cleanResponse = content.replace(/^```\w*\n/gm, '').replace(/```$/gm, '');
    return cleanResponse.trim();
};

/**
 * Determine filename and extension
 */
const prepareFileDetails = (type, topic, content) => {
    let extension = '.txt';
    let baseName = topic.replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '_').substring(0, 30) || 'untitled';

    if (baseName === 'general_purpose') {
        baseName = `generated_${type}_${Date.now()}`;
    }

    // Determine extension based on type/content
    // Determine extension based on type/content
    // User requested everything to be saved as text file
    if (type.includes('python')) extension = '.py.txt'; // Preserving type hint in extension
    else if (type.includes('javascript') || type.includes('js') || type.includes('node') || type.includes('react')) extension = '.js.txt';
    else if (type.includes('java')) extension = '.java.txt';
    else if (type.includes('html')) extension = '.html.txt';
    else if (type.includes('css')) extension = '.css.txt';
    else if (type.includes('sql')) extension = '.sql.txt';
    else if (type.includes('json')) extension = '.json.txt';
    else if (type.includes('md') || type.includes('markdown')) extension = '.md.txt';
    else extension = '.txt';

    return {
        filename: `${baseName}${extension}`,
        content: content
    };
};

/**
 * Save content to file on Desktop
 */
const saveToDesktop = async (filename, content) => {
    const desktopPath = getDesktopPath();
    const filePath = path.join(desktopPath, filename);

    // Ensure unique filename if exists
    let finalPath = filePath;
    let counter = 1;
    while (fs.existsSync(finalPath)) {
        const ext = path.extname(filename);
        const name = path.basename(filename, ext);
        finalPath = path.join(desktopPath, `${name}_${counter}${ext}`);
        counter++;
    }

    await fs.promises.writeFile(finalPath, content, 'utf8');
    console.log(`[ContentWriter] Saved to: ${finalPath}`);
    return finalPath;
};

/**
 * Open file using system default application
 */
const openFile = async (filePath) => {
    console.log(`[ContentWriter] Opening: ${filePath}`);
    try {
        await execAsync(`start "" "${filePath}"`, { windowsHide: false });
    } catch (error) {
        console.error('[ContentWriter] Failed to open file:', error);
    }
};
