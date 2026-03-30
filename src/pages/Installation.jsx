import { useState, useEffect } from "react";
import apps from "../data/apps.json";
import { toast } from "react-toastify";

export default function Installation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // Load installed apps from localStorage
  const loadInstalledApps = () => {
    const saved = localStorage.getItem("installedApps");
    if (saved) {
      setInstalledApps(JSON.parse(saved));
    }
  };

  // Load on mount and listen for localStorage changes
  useEffect(() => {
    loadInstalledApps();

    // Listen for storage changes from other tabs/windows
    window.addEventListener("storage", loadInstalledApps);

    // Listen for custom events from same page
    window.addEventListener("appsChanged", loadInstalledApps);

    return () => {
      window.removeEventListener("storage", loadInstalledApps);
      window.removeEventListener("appsChanged", loadInstalledApps);
    };
  }, []);

  // Get full app details for installed apps
  const getInstalledAppDetails = () => {
    return installedApps
      .map(appId => apps.find(app => app.id === appId))
      .filter(Boolean);
  };

  // Sort apps with new options
  const sortedApps = () => {
    const appDetails = getInstalledAppDetails();
    let sorted = [...appDetails];

    if (sortBy === "downloads-high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "downloads-low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    } else if (sortBy === "size") {
      sorted.sort((a, b) => b.size - a.size);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    return sorted;
  };

  const handleUninstall = (appId, appTitle) => {
    const updated = installedApps.filter(id => id !== appId);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("appsChanged"));
    
    toast.info(`${appTitle} uninstalled`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const appList = sortedApps();

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Your Installed Apps</h1>
          <p className="text-gray-600 dark:text-gray-400">Explore All Trending Apps on the Market developed by us</p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-700 dark:text-white font-semibold">
              {appList.length} {appList.length === 1 ? "App" : "Apps"} Found
            </p>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white dark:border-gray-700 cursor-pointer hover:border-purple-500 focus:outline-none focus:border-purple-500"
          >
            <option value="default">Sort By Default</option>
            <option value="downloads-high-low">Downloads: High to Low</option>
            <option value="downloads-low-high">Downloads: Low to High</option>
            <option value="rating">Sort By Rating</option>
            <option value="size">Sort By Size</option>
          </select>
        </div>

        {/* Apps List */}
        {appList.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 p-12 text-center">
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">No apps installed yet</p>
            <p className="text-gray-500 dark:text-gray-400">Go to the Apps page and install your favorite applications</p>
          </div>
        ) : (
          <div className="space-y-3">
            {appList.map((app) => (
              <div
                key={app.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-900 hover:shadow-lg dark:hover:shadow-gray-700 transition-all p-4 flex items-center justify-between"
              >
                {/* App Info */}
                <div className="flex items-center gap-4 flex-1">
                  {/* App Icon */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex-shrink-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* App Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{app.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      {/* Downloads */}
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <span>↓</span>
                        <span>{(app.downloads / 1000000).toFixed(0)}M</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <span>★</span>
                        <span className="font-semibold">{app.ratingAvg}</span>
                      </div>

                      {/* Size */}
                      <div className="text-gray-600 dark:text-gray-400">
                        <span>{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Uninstall Button */}
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors ml-4"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}