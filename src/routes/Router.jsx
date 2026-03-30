import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import Error404 from "../pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/apps", element: <Apps /> },
      { path: "/apps/:id", element: <AppDetails /> },
      { path: "/installation", element: <Installation /> },
    ],
  },
  { path: "*", element: <Error404 /> },
]);