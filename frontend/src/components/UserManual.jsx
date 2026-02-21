import React from 'react';
import './UserManual.css';

const UserManual = () => {
    return (
        <div className="user-manual-container">
            <h1 className="manual-title">J.A.R.V.I.S - User Manual</h1>
            <p className="manual-subtitle">Your comprehensive guide to voice commands and system controls.</p>

            <section className="manual-section">
                <h2>🌐 Web Intelligence & Search</h2>
                <div className="command-card">
                    <h3>Google Search (Explicit)</h3>
                    <p>Forces a Google Search for a specific query.</p>
                    <code className="command-code">"Search for [something] on Google"</code>
                    <p className="example">Example: "Search for atomic bomb element on Google"</p>
                </div>
                <div className="command-card">
                    <h3>Live Data & Answers (Implicit)</h3>
                    <p>Ask natural questions about current events, prices, or facts. JARVIS will browse for the answer.</p>
                    <code className="command-code">"What is the current [X]?"</code>
                    <code className="command-code">"Who won the [Match/Event]?"</code>
                    <p className="example">Example: "What is the current USD to INR rate?"</p>
                </div>
            </section>

            <section className="manual-section">
                <h2>🎥 YouTube & Media Control</h2>
                <div className="command-grid">
                    <div className="command-card">
                        <h3>Core Commands</h3>
                        <ul>
                            <li><strong>"Open YouTube"</strong>: Opens the YouTube website.</li>
                            <li><strong>"Search for [X] on YouTube"</strong>: Opens YouTube and searches for [X].</li>
                            <li><strong>"Play [X]"</strong>: Searches for [X] and immediately plays the first video.</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>Playback Controls</h3>
                        <ul>
                            <li>"Pause video", "Resume video"</li>
                            <li>"Stop video", "Replay video"</li>
                            <li>"Mute video", "Unmute video"</li>
                            <li>"Volume up/down", "Set volume to 50%"</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>Advanced Features</h3>
                        <ul>
                            <li>"Full Screen", "Exit Full Screen"</li>
                            <li>"Theater Mode", "Exit Theater Mode"</li>
                            <li>"Miniplayer Mode", "Exit Miniplayer"</li>
                            <li>"Skip Ad", "Close Ad"</li>
                            <li>"Forward 10s", "Rewind 10s"</li>
                            <li>"Speed up (2x)", "Slow down (0.5x)"</li>
                            <li>"Next video", "Previous video"</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="manual-section">
                <h2>⚡ System Controls</h2>
                <div className="command-grid">
                    <div className="command-card">
                        <h3>Power & Lock</h3>
                        <ul>
                            <li>"Lock System", "Sleep Mode"</li>
                            <li>"Shutdown System" (10s delay)</li>
                            <li>"Turn off PC"</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>Window Management</h3>
                        <ul>
                            <li>"Switch App" (Alt + Tab)</li>
                            <li>"Minimize All"</li>
                            <li>"Show Desktop"</li>
                            <li>"Take Screenshot"</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>System Tools</h3>
                        <ul>
                            <li>"Open Task Manager"</li>
                            <li>"Open Settings"</li>
                            <li>"Open File Explorer"</li>
                            <li>"Open Run Dialog"</li>
                            <li>"Action Center"</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="manual-section">
                <h2>✍️ Content Creation & Coding</h2>
                <div className="command-grid">
                    <div className="command-card">
                        <h3>Writing & Drafting</h3>
                        <p>JARVIS can act as your personal writer. Ask it to draft emails, write articles, or create documents.</p>
                        <ul>
                            <li><strong>"Write an email to [Name] about [Topic]"</strong>: Drafts a professional email.</li>
                            <li><strong>"Write an article on [Topic]"</strong>: Generates a structured article.</li>
                            <li><strong>"Write a poem about [Topic]"</strong>: Creates creative poetry.</li>
                        </ul>
                        <code className="command-code">"Write a formal email asking for leave."</code>
                    </div>
                    <div className="command-card">
                        <h3>Code Generation</h3>
                        <p>Generate code in any programming language for any problem or algorithm.</p>
                        <ul>
                            <li><strong>"Generate a [Language] code for [Question]"</strong>: Solves standard problems (e.g., LeetCode, algorithms).</li>
                            <li><strong>"Write a [Language] script to [Task]"</strong>: Generates functional code snippets.</li>
                            <li><strong>"Generate me the answer for [Question] in [Language]"</strong>: Provides coding solutions directly to your output folder.</li>
                        </ul>
                        <code className="command-code">"Generate a Python code to find duplicates in an array"</code>
                    </div>
                </div>
            </section>

            <section className="manual-section">
                <h2>🚀 Application Launching</h2>
                <div className="command-card">
                    <p>Launch apps or websites by name.</p>
                    <code className="command-code">"Open [App Name]"</code>
                    <code className="command-code">"Open [Website Name]"</code>
                    <p className="example">Examples: "Open Spotify", "Open VS Code", "Open YouTube", "Open ChatGPT"</p>
                </div>
            </section>

            <footer className="manual-footer">
                <p>J.A.R.V.I.S System v2.0.4 | Online & Listening</p>
            </footer>
        </div>
    );
};

export default UserManual;
