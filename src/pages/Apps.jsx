import { useState } from "react";
import apps from "../data/apps.json";
import AppCard from "../components/shared/AppCard";

export default function Apps() {
  const [search, setSearch] = useState("");

  const filtered = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-10">

      <div className="flex justify-between mb-6">
        <p>{filtered.length} Apps Found</p>

        <input
          placeholder="Search"
          className="border px-3"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 && <p>No App Found</p>}

      <div className="grid md:grid-cols-4 gap-4">
        {filtered.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </div>
  );
}