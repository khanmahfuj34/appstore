import apps from "../../data/apps.json";

export default function Stats() {
  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
  const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
  const totalApps = apps.length;

  const formatNumber = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-8 sm:py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{formatNumber(totalDownloads)}</h2>
          <p className="text-gray-100 text-sm sm:text-base">Downloads</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{formatNumber(totalReviews)}</h2>
          <p className="text-gray-100 text-sm sm:text-base">Reviews</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{totalApps}+</h2>
          <p className="text-gray-100 text-sm sm:text-base">Apps</p>
        </div>
      </div>
    </div>
  );
}