import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage or fallback to system preference
        try {
            const savedItem = localStorage.getItem('theme');
            if (savedItem) {
                return savedItem === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch {
            return false;
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        
        // Apply theme on mount and when isDark changes
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Save to localStorage
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch {
            console.error('Failed to save theme to localStorage');
        }
    }, [isDark]);

    // Listen to custom event for syncing across multiple instances of the hook
    useEffect(() => {
        const syncTheme = (e) => {
            if (e.detail !== isDark) {
                setIsDark(e.detail);
            }
        };

        window.addEventListener('theme-changed', syncTheme);
        return () => window.removeEventListener('theme-changed', syncTheme);
    }, [isDark]);

    const toggle = () => {
        const newValue = !isDark;
        setIsDark(newValue);
        window.dispatchEvent(new CustomEvent('theme-changed', { detail: newValue }));
    };

    return {
        isDark,
        toggle,
        setIsDark,
    };
}