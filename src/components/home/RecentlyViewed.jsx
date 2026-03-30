import { useEffect, useState } from "react";
import apps from "../../data/apps.json";
import AppCard from "../shared/AppCard";

export default function RecentlyViewed() {
  const [recentApps, setRecentApps] = useState([]);

  useEffect(() => {
    const handleRecentUpdate = () => {
      const recent = localStorage.getItem("recentlyViewed");
      const recentIds = recent ? JSON.parse(recent) : [];
      const recentAppsList = recentIds
        .map(id => apps.find(app => app.id === id))
        .filter(Boolean)
        .slice(0, 4);
      setRecentApps(recentAppsList);
    };

    handleRecentUpdate();
    window.addEventListener("recentlyViewedChanged", handleRecentUpdate);
    return () => window.removeEventListener("recentlyViewedChanged", handleRecentUpdate);
  }, []);

  if (recentApps.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
        {recentApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
