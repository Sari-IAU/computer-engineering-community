import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import EventsPage from "../pages/Events/EventsPage";
import ProjectsPage from "../pages/Projects/ProjectPage";
import BlogPage from "../pages/Blogs/Blogs";
import AboutPage from "../pages/aboutus/aboutUs";
import ContactPage from "../pages/contactUs/Contact";
import LoginPage from "../pages/login/login";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsPage />,
        },
        {
          path: "projects",
          element: <ProjectsPage />,
        },
        {
          path: "blogs",
          element: <BlogPage />,
        },
        {
          path: "about-us",
          element: <AboutPage />,
        },
        {
          path: "contact-us",
          element: <ContactPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/computer-engineering-community",
  }
);