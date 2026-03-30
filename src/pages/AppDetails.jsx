import { useParams } from "react-router-dom";
import apps from "../data/apps.json";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Breadcrumb from "../components/shared/Breadcrumb";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find(a => a.id == id);

  const [installed, setInstalled] = useState(false);

  // Check if app is already installed and add to recently viewed
  useEffect(() => {
    const saved = localStorage.getItem("installedApps");
    const installedApps = saved ? JSON.parse(saved) : [];
    setInstalled(installedApps.includes(parseInt(id)));

    // Add to recently viewed
    if (app) {
      const recent = localStorage.getItem("recentlyViewed");
      const recentIds = recent ? JSON.parse(recent) : [];
      const updated = [app.id, ...recentIds.filter(id => id !== app.id)].slice(0, 10);
      localStorage.setItem("recentlyViewed", JSON.stringify(updated));
      window.dispatchEvent(new Event("recentlyViewedChanged"));
    }
  }, [id, app]);

  if (!app) {
    return (
      <div className="bg-white dark:bg-gray-950 transition-colors duration-200 min-h-screen">
        <Breadcrumb />
        <div className="max-w-5xl mx-auto py-20 text-center">
          <p className="text-2xl text-gray-600 dark:text-gray-300">App Not Found</p>
        </div>
      </div>
    );
  }

  const handleInstall = () => {
    setInstalled(true);
    
    // Save to localStorage
    const saved = localStorage.getItem("installedApps");
    const installedApps = saved ? JSON.parse(saved) : [];
    
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("appsChanged"));
    }
    
    toast.success(`${app.title} installed successfully!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200 min-h-screen">
      <Breadcrumb />
      <div className="bg-gray-50 dark:bg-gray-950 py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          
          {/* App Information Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* App Image */}
              <div className="flex justify-center md:col-span-1">
                <div className="bg-linear-to-br from-gray-50 dark:from-gray-700 to-gray-100 dark:to-gray-800 p-4 sm:p-6 rounded-2xl">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* App Details */}
              <div className="md:col-span-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{app.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">{app.companyName}</p>

                {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-linear-to-br from-blue-50 dark:from-blue-900/30 to-blue-100 dark:to-blue-800/30 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-semibold">Size</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{app.size}MB</p>
                </div>
                <div className="bg-linear-to-br from-yellow-50 dark:from-yellow-900/30 to-yellow-100 dark:to-yellow-800/30 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-semibold">Rating</p>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    ★ {app.ratingAvg}
                  </p>
                </div>
                <div className="bg-linear-to-br from-purple-50 dark:from-purple-900/30 to-purple-100 dark:to-purple-800/30 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-semibold">Downloads</p>
                  <p className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">{formatNumber(app.downloads)}</p>
                </div>
              </div>

              {/* Reviews Count */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="font-semibold text-gray-900 dark:text-white">{formatNumber(app.reviews)}</span> reviews
              </p>

              {/* Install Button */}
              <button
                disabled={installed}
                onClick={handleInstall}
                className={`w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-white transition-all duration-300 text-sm sm:text-base ${
                  installed
                    ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                    : "bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {installed ? "✓ Installed" : "Install Now"}
              </button>
            </div>
          </div>

        {/* Ratings Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Ratings</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <ResponsiveContainer width="100%" height={250} minWidth={300}>
              <BarChart
                data={app.ratings}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={70} />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Bar dataKey="count" fill="#f97316" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900 p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
}