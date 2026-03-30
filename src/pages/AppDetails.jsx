import { useParams } from "react-router-dom";
import apps from "../data/apps.json";
import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find(a => a.id == id);

  const [installed, setInstalled] = useState(false);

  if (!app) return <p>App Not Found</p>;

  return (
    <div className="max-w-5xl mx-auto py-10">

      <div className="flex gap-6">
        <img src={app.image} />

        <div>
          <h1 className="text-xl font-bold">{app.title}</h1>
          <p>⭐ {app.ratingAvg}</p>
          <p>⬇ {app.downloads}</p>

          <button
            disabled={installed}
            onClick={() => setInstalled(true)}
            className="bg-green-500 text-white px-4 py-2 mt-4"
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-6">{app.description}</p>

    </div>
  );
}