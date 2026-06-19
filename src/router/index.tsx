import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import EventsPage from "../pages/Events/EventsPage";
import ProjectsPage from "../pages/Projects/ProjectPage";
import BlogPage from "../pages/Blogs/Blogs";
import AboutPage from "../pages/aboutus/aboutUs";
import ContactPage from "../pages/contactUs/Contact";

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
      {
        path: "/about-us",
        element: <AboutPage/>,
      },
      {
        path: "/contact-us",
        element: <ContactPage/>,
      },
      
    ],
  },
]);