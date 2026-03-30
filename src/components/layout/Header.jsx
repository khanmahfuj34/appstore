import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isDark, toggle: toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className="bg-[#0b1f2a] text-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <Link to="/" className="font-bold text-xl">HERO.IO</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400 transition-colors"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/apps" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400 transition-colors"}
            >
              Apps
            </NavLink>
            <NavLink 
              to="/installation" 
              className={({ isActive }) => isActive ? "text-purple-400" : "hover:text-purple-400 transition-colors"}
            >
              Installation
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle - With Sun/Moon Icons & Smooth Transition */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center w-10 h-10"
              title={isDark ? "Enable Light Mode" : "Enable Dark Mode"}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.707a1 1 0 01-1.414 1.414l-.708-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4.22 4.22a1 1 0 010 1.415l-.707.708a1 1 0 01-1.414-1.414l.707-.708a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-4.22a1 1 0 01-1.415 0l-.708-.707a1 1 0 011.414-1.414l.708.707a1 1 0 010 1.414zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zM5.78 5.78a1 1 0 010-1.415l.707-.708a1 1 0 011.414 1.414l-.707.708a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            <a href="https://github.com">
              <button className="bg-purple-500 px-3 py-1 rounded hover:bg-purple-600 transition text-white">
                Contribute
              </button>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
            >
              <div className={`w-6 h-1 bg-white transition-transform duration-300 ${isDrawerOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-1 bg-white transition-opacity duration-300 ${isDrawerOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-1 bg-white transition-transform duration-300 ${isDrawerOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0b1f2a] dark:bg-gray-900 border-l border-gray-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="text-white hover:text-purple-400 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-6">
          <NavLink 
            to="/" 
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) => 
              isActive 
                ? "text-purple-400 text-lg font-bold border-l-4 border-purple-400 pl-3" 
                : "text-white hover:text-purple-400 transition-colors text-lg pl-4 block w-full"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/apps" 
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) => 
              isActive 
                ? "text-purple-400 text-lg font-bold border-l-4 border-purple-400 pl-3" 
                : "text-white hover:text-purple-400 transition-colors text-lg pl-4 block w-full"
            }
          >
            Apps
          </NavLink>
          <NavLink 
            to="/installation" 
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) => 
              isActive 
                ? "text-purple-400 text-lg font-bold border-l-4 border-purple-400 pl-3" 
                : "text-white hover:text-purple-400 transition-colors text-lg pl-4 block w-full"
            }
          >
            Installation
          </NavLink>
        </nav>
      </div>
    </>
  );
}