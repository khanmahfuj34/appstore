import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(p => p);

  const breadcrumbs = [{ label: "Home", path: "/" }];

  paths.forEach((path, index) => {
    if (path === "apps" && paths[index + 1]) {
      breadcrumbs.push({ label: "Apps", path: "/apps" });
    } else if (path === "installation") {
      breadcrumbs.push({ label: "Installation", path: "/installation" });
    } else if (!isNaN(path)) {
      breadcrumbs.push({ label: `App ${path}`, path: `/apps/${path}` });
    }
  });

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 text-sm">
      <div className="flex gap-2 text-gray-600">
        {breadcrumbs.map((crumb, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {idx > 0 && <span>/</span>}
            <Link
              to={crumb.path}
              className="text-purple-600 hover:text-purple-800 hover:underline"
            >
              {crumb.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
