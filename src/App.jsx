import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    const handleDarkModeChange = () => {
      const mode = localStorage.getItem("darkMode") === "true";
      setIsDark(mode);
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => window.removeEventListener("darkModeChange", handleDarkModeChange);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-200">
      <Header />
      <main className="bg-white dark:bg-gray-950 transition-colors duration-200">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer 
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}