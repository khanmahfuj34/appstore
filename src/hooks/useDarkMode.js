import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage
        try {
            return localStorage.getItem('theme') === 'dark';
        } catch {
            return false;
        }
    });

    useEffect(() => {
        // Apply theme on mount
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save to localStorage
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch {
            console.error('Failed to save theme to localStorage');
        }
    }, [isDark]);

    const toggle = () => {
        setIsDark(prev => !prev);
    };

    return {
        isDark,
        toggle,
        setIsDark,
    };
}