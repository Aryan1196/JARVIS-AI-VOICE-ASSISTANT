import React from 'react';
import { useBlob } from '../context/BlobContext';
import { useNavigate } from 'react-router-dom';
import './ControlsPage.css';

const ControlsPage = () => {
    const { settings, toggleControl } = useBlob();
    const navigate = useNavigate();

    return (
        <div className="settings-container">
            <h1 className="settings-title">SYSTEM CONTROLS</h1>

            <div className="settings-panel">
                <div className="settings-section">
                    <h2>CONTROL</h2>

                    <div className="control-group">
                        <label>Microphone Access</label>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={settings.controls?.mic ?? true}
                                onChange={() => toggleControl('mic')}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="control-group">
                        <label>Location Services</label>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={settings.controls?.location ?? true}
                                onChange={() => toggleControl('location')}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="control-group">
                        <label>System Audio (TTS)</label>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={settings.controls?.speaker ?? true}
                                onChange={() => toggleControl('speaker')}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div className="settings-actions">
                    <button className="save-btn" onClick={() => window.location.href = '/'}>RETURN TO SYSTEM</button>
                </div>
            </div>
        </div>
    );
};

export default ControlsPage;
