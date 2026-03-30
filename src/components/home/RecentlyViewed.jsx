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
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
