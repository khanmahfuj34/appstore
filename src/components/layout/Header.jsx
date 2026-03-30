import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode on mount and when it changes
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDark(savedMode);
    
    if (savedMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, []);

  // Listen for dark mode changes from other tabs/components
  useEffect(() => {
    const handleDarkModeChange = () => {
      const savedMode = localStorage.getItem("darkMode") === "true";
      setIsDark(savedMode);
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => window.removeEventListener("darkModeChange", handleDarkModeChange);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("darkMode", String(newMode));
    
    // Apply dark mode to document
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    
    // Dispatch event for other components
    window.dispatchEvent(new Event("darkModeChange"));
  };

  return (
    <>
      <div className="bg-[#0b1f2a] text-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <Link to="/" className="font-bold text-xl">HERO.IO</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/apps" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400"}
            >
              Apps
            </NavLink>
            <NavLink 
              to="/installation" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400"}
            >
              Installation
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle - No Border */}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded hover:bg-purple-600 transition text-lg"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <a href="https://github.com">
              <button className="bg-purple-500 px-3 py-1 rounded hover:bg-purple-600 transition">
                Contribute
              </button>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <div className={`w-6 h-1 bg-white transition-transform ${isDrawerOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-1 bg-white transition-opacity ${isDrawerOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-1 bg-white transition-transform ${isDrawerOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden bg-[#0b1f2a] border-t border-gray-700 fixed inset-0 top-16 z-40 dark:bg-gray-900">
          <nav className="flex flex-col p-4 space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-purple-400 text-lg font-semibold" 
                  : "text-white hover:text-purple-400 text-lg"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/apps" 
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-purple-400 text-lg font-semibold" 
                  : "text-white hover:text-purple-400 text-lg"
              }
            >
              Apps
            </NavLink>
            <NavLink 
              to="/installation" 
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-purple-400 text-lg font-semibold" 
                  : "text-white hover:text-purple-400 text-lg"
              }
            >
              Installation
            </NavLink>
          </nav>
        </div>
      )}

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}