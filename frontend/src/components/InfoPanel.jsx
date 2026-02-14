import React, { useState, useEffect, useRef } from 'react';
import './InfoPanel.css';
import { useBlob } from '../context/BlobContext';

const BACKEND_URL = 'https://jarvis-ai-voice-assistant.onrender.com';

const InfoPanel = () => {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ city: 'Ranchi', country: 'India' });
    const [loadingLocation, setLoadingLocation] = useState(true);
    const { settings } = useBlob();

    // Drag and drop state
    const [position, setPosition] = useState(() => {
        const saved = localStorage.getItem('infoPanelPosition');
        return saved ? JSON.parse(saved) : { x: 20, y: 80 };
    });
    const [isDragging, setIsDragging] = useState(false);
    const [isCompact, setIsCompact] = useState(() => {
        return localStorage.getItem('infoPanelCompact') === 'true';
    });
    const [panelWidth, setPanelWidth] = useState(() => {
        const saved = localStorage.getItem('infoPanelWidth');
        return saved ? parseInt(saved) : 220;
    });
    const [panelHeight, setPanelHeight] = useState(() => {
        const saved = localStorage.getItem('infoPanelHeight');
        return saved ? parseInt(saved) : 0; // 0 = auto height
    });
    const [isResizing, setIsResizing] = useState(false);
    const [resizeType, setResizeType] = useState(null); // 'width', 'height', 'corner'
    const dragOffset = useRef({ x: 0, y: 0 });
    const panelRef = useRef(null);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Get Location
    useEffect(() => {
        if (!settings.controls?.location) {
            setLoadingLocation(false);
            return;
        }

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const response = await fetch(`${BACKEND_URL}/api/location?lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();

                        // Extract city
                        const city = data.address.city || data.address.town || data.address.village || data.address.county || 'Ranchi';
                        const country = data.address.country || 'India';

                        setLocation({ city, country });
                    } catch (error) {
                        console.error("Error fetching location details:", error);
                        // Keep default Ranchi on error
                    } finally {
                        setLoadingLocation(false);
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setLoadingLocation(false);
                }
            );
        } else {
            setLoadingLocation(false);
        }
    }, []);

    // Get weather data
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://wttr.in/${location.city}?format=j1`);
                const data = await response.json();
                const current = data.current_condition[0];
                setWeather({
                    temp: current.temp_C,
                    desc: current.weatherDesc[0].value,
                    humidity: current.humidity,
                    feelsLike: current.FeelsLikeC,
                    icon: getWeatherIcon(current.weatherCode)
                });
            } catch (error) {
                console.error('Weather fetch error:', error);
                setWeather({ temp: '--', desc: 'Unavailable', icon: '🌤️' });
            }
        };
        fetchWeather();
        const weatherTimer = setInterval(fetchWeather, 600000);
        return () => clearInterval(weatherTimer);
    }, [location.city]);

    // Drag handlers
    const handleMouseDown = (e) => {
        if (e.target.closest('.panel-drag-handle')) {
            setIsDragging(true);
            dragOffset.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
            e.preventDefault();
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const newX = Math.max(0, Math.min(window.innerWidth - 300, e.clientX - dragOffset.current.x));
                const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.current.y));
                setPosition({ x: newX, y: newY });
            }
            if (isResizing) {
                if (resizeType === 'width' || resizeType === 'corner') {
                    const newWidth = Math.max(200, Math.min(500, e.clientX - position.x));
                    setPanelWidth(newWidth);
                }
                if (resizeType === 'height' || resizeType === 'corner') {
                    const newHeight = Math.max(150, Math.min(600, e.clientY - position.y));
                    setPanelHeight(newHeight);
                }
            }
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                localStorage.setItem('infoPanelPosition', JSON.stringify(position));
            }
            if (isResizing) {
                setIsResizing(false);
                setResizeType(null);
                localStorage.setItem('infoPanelWidth', panelWidth.toString());
                localStorage.setItem('infoPanelHeight', panelHeight.toString());
            }
        };

        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isResizing, resizeType, position, panelWidth, panelHeight]);

    const handleResizeStart = (e, type) => {
        e.stopPropagation();
        setIsResizing(true);
        setResizeType(type);
    };

    const getWeatherIcon = (code) => {
        const codeNum = parseInt(code);
        if (codeNum === 113) return '☀️';
        if (codeNum === 116) return '⛅';
        if ([119, 122].includes(codeNum)) return '☁️';
        if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314].includes(codeNum)) return '🌧️';
        if ([200, 386, 389, 392, 395].includes(codeNum)) return '⛈️';
        if ([179, 182, 185, 227, 230, 323, 326, 329, 332, 335, 338, 350, 368, 371, 374, 377].includes(codeNum)) return '❄️';
        if ([143, 248, 260].includes(codeNum)) return '🌫️';
        return '🌤️';
    };

    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const getGreeting = () => {
        const hour = time.getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 17) return 'Good Afternoon';
        if (hour < 21) return 'Good Evening';
        return 'Good Night';
    };

    const toggleCompact = () => {
        const newCompact = !isCompact;
        setIsCompact(newCompact);
        localStorage.setItem('infoPanelCompact', newCompact.toString());
    };

    return (
        <div
            ref={panelRef}
            className={`info-panel ${isDragging ? 'dragging' : ''} ${isCompact ? 'compact' : ''} ${isResizing ? 'resizing' : ''}`}
            style={{
                left: position.x,
                top: position.y,
                width: isCompact ? 'auto' : panelWidth,
                height: isCompact ? 'auto' : (panelHeight > 0 ? panelHeight : 'auto')
            }}
            onMouseDown={handleMouseDown}
        >
            {/* Resize handles */}
            <div className="panel-resize-handle resize-right" onMouseDown={(e) => handleResizeStart(e, 'width')}></div>
            <div className="panel-resize-handle resize-bottom" onMouseDown={(e) => handleResizeStart(e, 'height')}></div>
            <div className="panel-resize-handle resize-corner" onMouseDown={(e) => handleResizeStart(e, 'corner')}></div>

            <div className="panel-drag-handle">
                <span className="drag-dots">⋮⋮</span>
                <span className="info-greeting">{isCompact ? formatTime(time) : `${getGreeting()}, Sir`}</span>
                <button className="panel-resize-btn" onClick={toggleCompact} title={isCompact ? 'Expand' : 'Compact'}>
                    {isCompact ? '⬜' : '➖'}
                </button>
            </div>

            {!isCompact && (
                <>
                    <div className="info-time-section">
                        <div className="info-time">{formatTime(time)}</div>
                        <div className="info-date">{formatDate(time)}</div>
                    </div>

                    <div className="info-row">
                        <span className="info-location">📍 {settings.controls?.location ? location.city : 'Location Off'}</span>
                        <span className="info-status-mini">
                            <span className="status-dot-mini"></span>
                            Online
                        </span>
                        {weather && (
                            <div className="info-weather-compact">
                                <span className="weather-temp-row">
                                    <span className="weather-emoji">{weather.icon}</span>
                                    {weather.temp}°C
                                </span>
                                <span className="weather-desc-row">{weather.desc}</span>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default InfoPanel;


