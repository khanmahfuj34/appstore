import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");

  // Sync with localStorage and update inline styles
  useEffect(() => {
    const handleDarkModeChange = () => {
      const mode = localStorage.getItem("darkMode") === "true";
      setIsDark(mode);
      console.log("Dark mode changed via event:", mode);
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => window.removeEventListener("darkModeChange", handleDarkModeChange);
  }, []);

  // Also listen for storage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "darkMode") {
        const mode = e.newValue === "true";
        setIsDark(mode);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-200"
      style={{
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        color: isDark ? '#ffffff' : '#111827'
      }}
    >
      <Header />
      <main 
        className="bg-white dark:bg-gray-950 transition-colors duration-200"
        style={{
          backgroundColor: isDark ? '#0f172a' : '#ffffff'
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <ToastContainer 
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}