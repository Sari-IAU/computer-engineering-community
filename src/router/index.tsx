import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import EventsPage from "../pages/Events/EventsPage";
import ProjectsPage from "../pages/Projects/ProjectPAge";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage/>,
      },
      {
        path: "/projects",
        element: <ProjectsPage/>,
      },
      {
        path: "/event/:id",
        element: <div className="p-8 text-center text-[var(--text-h)]">صفحه جزئیات رویداد</div>,
      },
    ],
  },
]);