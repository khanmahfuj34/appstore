import apps from "../../data/apps.json";
import AppCard from "../shared/AppCard";

export default function Recommended() {
  // Sort by rating and take top 4
  const recommended = apps
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommended.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
