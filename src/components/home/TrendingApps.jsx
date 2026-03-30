import apps from "../../data/apps.json";
import AppCard from "../shared/AppCard";

export default function TrendingApps() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-center text-2xl mb-6">Trending Apps</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {apps.slice(0, 8).map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}