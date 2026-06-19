import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import EventsPage from "../pages/Events/EventsPage";
import BlogPage from "../pages/Blogs/blogs";
import ProjectsPage from "../pages/Projects/ProjectPage";

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
        path: "/blogs",
        element: <BlogPage/>,
      },
      
    ],
  },
]);