import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-container">
            <h1 className="settings-title">SETTINGS</h1>

            <div className="settings-panel">
                <div className="settings-section">
                    <h2>GENERAL</h2>
                    <p style={{ color: '#00f3ff', textAlign: 'center', padding: '20px' }}>
                        System settings configuration module coming soon...
                    </p>
                </div>

                <div className="settings-actions">
                    <button className="save-btn" onClick={() => window.location.href = '/'}>RETURN TO SYSTEM</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
