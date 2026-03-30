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
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-6 sm:py-8 md:py-10 px-3 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{formatNumber(totalDownloads)}</h2>
          <p className="text-gray-100 text-xs sm:text-sm md:text-base mt-1">Downloads</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{formatNumber(totalReviews)}</h2>
          <p className="text-gray-100 text-xs sm:text-sm md:text-base mt-1">Reviews</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{totalApps}+</h2>
          <p className="text-gray-100 text-xs sm:text-sm md:text-base mt-1">Apps</p>
        </div>
      </div>
    </div>
  );
}