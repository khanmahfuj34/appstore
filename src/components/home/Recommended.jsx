import apps from "../../data/apps.json";
import AppCard from "../shared/AppCard";

export default function Recommended() {
  // Sort by rating and take top 4
  const recommended = apps
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Recommended For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {recommended.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
