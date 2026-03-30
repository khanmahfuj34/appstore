import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const { isDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-200">
      <Header />
      <main className="bg-white dark:bg-gray-950 transition-colors duration-200">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer 
        theme={isDark ? "dark" : "light"}
        position="bottom-right"
        autoClose={3000}
      />
    </div>
  );
}