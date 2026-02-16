import React, { useState, useEffect, useRef } from 'react';
import './InfoPanel.css';
import { useBlob } from '../context/BlobContext';

const InfoPanel = () => {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ city: 'Ranchi', country: 'India' });
    const { settings } = useBlob();

    // Determine initial position (Default to Top-Right)
    const getInitialPosition = () => {
        const saved = localStorage.getItem('infoPanelPos');
        if (saved) return JSON.parse(saved);

        // Default to Right: Window Width - Panel Width (approx 380) - Margin (30)
        const x = window.innerWidth - 410;
        return { x: x > 0 ? x : 50, y: 60 };
    };

    const [position, setPosition] = useState(getInitialPosition);

    // Size state
    const [size] = useState(() => {
        const saved = localStorage.getItem('hudSize');
        return saved ? JSON.parse(saved) : { width: 380, height: 'auto' };
    });

    const [isCompact, setIsCompact] = useState(() => {
        return localStorage.getItem('hudCompact') === 'true';
    });

    // DRAG STATE (REMOVED)
    const panelRef = useRef(null);

    // --- TIME UPDATE ---
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // --- LOCATION & WEATHER ---
    useEffect(() => {
        if (!settings.controls?.location) return;

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    try {
                        const { latitude, longitude } = pos.coords;
                        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await res.json();
                        setLocation({
                            city: data.address.city || data.address.town || 'Ranchi',
                            country: data.address.country || 'India'
                        });
                    } catch (e) {
                        console.error("Location Error:", e);
                    }
                }
            );
        }
    }, [settings.controls?.location]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://wttr.in/${location.city}?format=j1`);
                const data = await res.json();
                const current = data.current_condition[0];
                setWeather({
                    temp: current.temp_C,
                    desc: current.weatherDesc[0].value,
                    icon: getWeatherIcon(current.weatherCode)
                });
            } catch (e) {
                setWeather({ temp: '--', desc: 'Offline', icon: '📡' });
            }
        };
        fetchWeather();
        const timer = setInterval(fetchWeather, 300000); // 5 mins
        return () => clearInterval(timer);
    }, [location.city]);

    // --- HELPERS ---
    const formatTime = (date) => date.toLocaleTimeString('en-US', { hour12: false });
    const formatCompactTime = (date) => date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const formatDate = (date) => date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

    const getWeatherIcon = (code) => {
        const c = parseInt(code);
        if ([113].includes(c)) return '☀️';
        if ([116, 119, 122].includes(c)) return '☁️';
        if ([200, 386, 389].includes(c)) return '⛈️';
        if ([176, 263, 266, 293].includes(c)) return '🌧️';
        return '🌤️';
    };

    return (
        <div
            ref={panelRef}
            className={`info-panel ${isCompact ? 'compact' : ''}`}
            style={{
                left: position.x,
                top: position.y,
                right: 'auto', // Override CSS right
                width: isCompact ? 'auto' : size.width,
                height: isCompact ? 'auto' : size.height,
                cursor: 'default'
            }}
        >
            <div className="pulse-bg"></div>

            {/* HEADER */}
            <div className="panel-header">
                <div className="ai-status">
                    <div className="status-dot-pulse"></div>
                    <span className="status-label">ONLINE</span>
                </div>
                {/* Add interactive-stop class to prevent drag when clicking specific elements if needed */}
                <div className="compact-time interactive-stop" onClick={(e) => {
                    e.stopPropagation(); // Stop drag start
                    const newState = !isCompact;
                    setIsCompact(newState);
                    localStorage.setItem('hudCompact', newState.toString());
                }} style={{ cursor: 'pointer' }}>
                    {isCompact ? 'EXPAND SYSTEM ⇲' : formatCompactTime(time)}
                </div>
            </div>

            {/* MAIN CONTENT */}
            {!isCompact && (
                <>
                    <div className="clock-container">
                        <div className="main-clock">{formatTime(time)}</div>
                        <div className="date-display">{formatDate(time)}</div>
                    </div>

                    <div className="system-stats">
                        <div className="stat-item">
                            <span>NEURAL SYNC</span>
                            <span className="stat-value">100%</span>
                        </div>
                        <div className="stat-item">
                            <span>Q-LATENCY</span>
                            <span className="stat-value">12ms</span>
                        </div>
                        <div className="stat-item">
                            <span>SECURE</span>
                            <span className="stat-value">TRUE</span>
                        </div>
                    </div>

                    <div className="panel-footer">
                        <div className="location-module">
                            <span className="loc-icon">📍</span>
                            <div className="loc-text">
                                <span className="city-name">{location.city}</span>
                                <span className="country-name">{location.country}</span>
                            </div>
                        </div>

                        {weather && (
                            <div className="weather-module">
                                <div className="weather-info">
                                    <div className="temp-main">{weather.temp}°</div>
                                </div>
                                <div className="weather-icon-side">
                                    <span style={{ fontSize: '20px' }}>{weather.icon}</span>
                                    <div className="weather-desc-mini">{weather.desc}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
export default InfoPanel;
