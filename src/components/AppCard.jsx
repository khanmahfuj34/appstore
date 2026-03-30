import { useNavigate } from "react-router-dom";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="bg-white p-3 rounded shadow cursor-pointer"
    >
      <img src={app.image} />

      <h3>{app.title}</h3>

      <div className="flex justify-between text-sm">
        <span>⬇ {app.downloads}</span>
        <span>⭐ {app.ratingAvg}</span>
      </div>
    </div>
  );
}