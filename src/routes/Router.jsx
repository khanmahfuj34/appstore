import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import Loader from "../components/shared/Loader";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const Apps = lazy(() => import("../pages/Apps"));
const Installation = lazy(() => import("../pages/Installation"));
const AppDetails = lazy(() => import("../pages/AppDetails"));
const Error404 = lazy(() => import("../pages/Error404"));

// Fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Loader />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        )
      },
      { 
        path: "/apps", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Apps />
          </Suspense>
        )
      },
      { 
        path: "/apps/:id", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AppDetails />
          </Suspense>
        )
      },
      { 
        path: "/installation", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Installation />
          </Suspense>
        )
      },
    ],
  },
  { 
    path: "*", 
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Error404 />
      </Suspense>
    )
  },
]);