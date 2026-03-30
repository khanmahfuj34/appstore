import { useState, useEffect } from "react";

export function useRecentlyViewed() {
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        const saved = localStorage.getItem("recentlyViewed");
        return saved ? JSON.parse(saved) : [];
    });

    const addToRecentlyViewed = (appId) => {
        setRecentlyViewed(prev => {
            const filtered = prev.filter(id => id !== appId);
            const updated = [appId, ...filtered].slice(0, 10); // Keep only 10 recent
            localStorage.setItem("recentlyViewed", JSON.stringify(updated));
            return updated;
        });
    };

    return { recentlyViewed, addToRecentlyViewed };
}