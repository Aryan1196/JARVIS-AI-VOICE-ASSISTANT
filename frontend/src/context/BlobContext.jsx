import React, { createContext, useState, useEffect, useContext } from 'react';

const BlobContext = createContext();

export const useBlob = () => useContext(BlobContext);

export const BlobProvider = ({ children }) => {
    // Load settings from localStorage or use defaults
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('blobSettings');
        const parsed = saved ? JSON.parse(saved) : {};

        return {
            colorDeep: parsed.colorDeep || '#001433',
            colorMid: parsed.colorMid || '#0084ff',
            colorBright: parsed.colorBright || '#00ffe1',
            size: parsed.size || 1.0,
            position: parsed.position || { x: 50, y: 50 },
            controls: parsed.controls || { mic: true, location: true, speaker: true }
        };
    });

    const [isEditMode, setIsEditMode] = useState(false);

    // Save settings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('blobSettings', JSON.stringify(settings));
    }, [settings]);

    const updateColor = (type, value) => {
        setSettings(prev => ({ ...prev, [type]: value }));
    };

    const updateSize = (value) => {
        setSettings(prev => ({ ...prev, size: parseFloat(value) }));
    };

    const updatePosition = (x, y) => {
        setSettings(prev => ({ ...prev, position: { x, y } }));
    };

    const toggleControl = (key) => {
        setSettings(prev => {
            const currentControls = prev.controls || { mic: true, location: true, speaker: true };
            return {
                ...prev,
                controls: {
                    ...currentControls,
                    [key]: !currentControls[key]
                }
            };
        });
    };

    // Reset to defaults
    const resetSettings = () => {
        setSettings({
            colorDeep: '#001433',
            colorMid: '#0084ff',
            colorBright: '#00ffe1',
            size: 1.0,
            size: 1.0,
            position: { x: 50, y: 50 },
            controls: { mic: true, location: true, speaker: true }
        });
    };

    return (
        <BlobContext.Provider value={{
            settings,
            updateColor,
            updateSize,
            updatePosition,
            toggleControl,
            resetSettings,
            isEditMode,
            setIsEditMode
        }}>
            {children}
        </BlobContext.Provider>
    );
};
