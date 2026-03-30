import apps from "../../data/apps.json";
import AppCard from "../shared/AppCard";

export default function TrendingApps() {
  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Trending Apps</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
        {apps.slice(0, 8).map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}