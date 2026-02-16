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
                        <h3>Playback</h3>
                        <ul>
                            <li>"Play [Video Name]"</li>
                            <li>"Pause video", "Resume video"</li>
                            <li>"Stop video"</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>Navigation</h3>
                        <ul>
                            <li>"Forward [Time]" (e.g., "Forward 10 seconds")</li>
                            <li>"Rewind [Time]" (e.g., "Rewind 1 minute")</li>
                            <li>"Skip ahead", "Go back"</li>
                        </ul>
                    </div>
                    <div className="command-card">
                        <h3>Volume & Speed</h3>
                        <ul>
                            <li>"Volume up", "Volume down"</li>
                            <li>"Set volume to 50%"</li>
                            <li>"Speed up", "Slow down"</li>
                            <li>"Mute", "Unmute"</li>
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
