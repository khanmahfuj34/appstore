import { useParams } from "react-router-dom";
import apps from "../data/apps.json";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find(a => a.id == id);

  const [installed, setInstalled] = useState(false);

  if (!app) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <p className="text-2xl text-gray-600">App Not Found</p>
      </div>
    );
  }

  const handleInstall = () => {
    setInstalled(true);
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
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* App Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* App Image */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-40 h-40 object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* App Details */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{app.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{app.companyName}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Size</p>
                  <p className="text-2xl font-bold text-blue-600">{app.size}MB</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    ★ {app.ratingAvg}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm font-semibold">Downloads</p>
                  <p className="text-2xl font-bold text-purple-600">{formatNumber(app.downloads)}</p>
                </div>
              </div>

              {/* Reviews Count */}
              <p className="text-gray-600 mb-6">
                <span className="font-semibold text-gray-900">{formatNumber(app.reviews)}</span> reviews
              </p>

              {/* Install Button */}
              <button
                disabled={installed}
                onClick={handleInstall}
                className={`px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                  installed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {installed ? "✓ Installed" : "Install Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={app.ratings}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="count" fill="#f97316" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
}
  );
}