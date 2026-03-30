import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#0b1f2a] text-white">
      <div className="max-w-7xl mx-auto flex justify-between p-4">

        <Link to="/" className="font-bold">HERO.IO</Link>

        <nav className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/apps">Apps</NavLink>
          <NavLink to="/installation">Installation</NavLink>
        </nav>

        <a href="https://github.com">
          <button className="bg-purple-500 px-3 py-1 rounded">
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
}