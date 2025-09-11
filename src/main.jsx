import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import './index.css';

import Home from './routes/home.jsx';
import Parents from './routes/parents.jsx';
import OurTeam from './routes/ourteam.jsx';
import VisitUs from './routes/visitus.jsx';
import Admissions from './routes/admissions.jsx'
import Hourly from "./routes/hourly.jsx";
import ContactUs from "./routes/contactus.jsx";
import Navbar from "./Components/navbar.jsx";
import ErrorPage from "./routes/errorpage.jsx";

const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book-a-tour",
        element: <VisitUs />
      },
      {
        path: "/admissions",
        element: <Admissions />
      },
      {
        path: "/hourly",
        element: <Hourly />
      },
      {
        path: "/parents",
        element: <Parents />
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

