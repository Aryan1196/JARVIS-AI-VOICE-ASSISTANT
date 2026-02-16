import React from 'react';
import './UserManual.css'; // Reusing the same CSS for consistent design

const AboutPage = () => {
    return (
        <div className="user-manual-container">
            <h1 className="manual-title">About J.A.R.V.I.S</h1>
            <p className="manual-subtitle">Just A Rather Very Intelligent System</p>

            <section className="manual-section">
                <h2>🤖 The Origin</h2>
                <div className="command-card">
                    <p>
                        JARVIS (Just A Rather Very Intelligent System) is an advanced AI voice assistant inspired by the legendary AI from Marvel's <strong>Iron Man</strong>.
                        Designed to bridge the gap between human intent and machine execution, it serves as a personal digital butler capable of managing your entire digital life.
                    </p>
                </div>
            </section>

            <section className="manual-section">
                <h2>💡 Inspiration</h2>
                <div className="command-grid">
                    <div className="command-card">
                        <h3>Tony Stark's Vision</h3>
                        <p>
                            Starting as a simple natural language UI, JARVIS evolved into a sophisticated AI capable of handling complex tasks, security protocols, and autonomous operations.
                            Our version aims to replicate that seamless interaction—making typing obsolete.
                        </p>
                    </div>
                    <div className="command-card">
                        <h3>Modern Technology</h3>
                        <p>
                            Built using cutting-edge technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Google Gemini</strong>, and <strong>Deepgram</strong>,
                            this project brings sci-fi concepts into reality with real-time speech recognition and intelligent automation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="manual-section">
                <h2>👨‍💻 The Creator</h2>
                <div className="command-card">
                    <p>
                        Created with passion and code by <strong style={{ fontSize: '1.2rem', color: '#00d4ff', textShadow: '0 0 10px rgba(0, 212, 255, 0.3)', display: 'block', margin: '10px 0' }}>Aryan Kumar Sahu</strong>
                    </p>
                    <p style={{ marginTop: '10px', fontSize: '1rem', color: '#00d4ff' }}>
                        Student at <strong>SIKSHA 'O' ANUSANDHAN UNIVERSITY</strong><br />
                        Batchlors  in <strong>Computer Science and Engineering</strong> <strong>2nd Year</strong>
                    </p>
                    <p style={{ marginTop: '15px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
                        "This project is a testament to the power of open-source development and the future of human-computer interaction."
                    </p>
                </div>
            </section>

            <footer className="manual-footer">
                <p>"Sometimes you gotta run before you can walk." - Tony Stark</p>
            </footer>
        </div>
    );
};

export default AboutPage;
