import { useState } from "react";
import apps from "../data/apps.json";
import AppCard from "../components/shared/AppCard";

export default function Apps() {
  const [search, setSearch] = useState("");

  const filtered = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">

      <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-4">
        <p className="font-semibold">{filtered.length} Apps Found</p>

        <input
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 && <p className="text-center text-gray-600">No App Found</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </div>
  );
}