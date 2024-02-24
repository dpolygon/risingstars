import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import './App.css';

import Home from './routes/home';
import Parents from './routes/parents';
import OurTeam from './routes/ourteam';
import VisitUs from './routes/visitus';
import Admissions from './routes/admissions'
import ContactUs from "./routes/contactus";
import Navbar from "./Components/NavBar";
import ErrorPage from "./routes/errorpage";

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
        path: "/parents",
        element: <Parents />
      },
      {
        path: "/visit-us",
        element: <VisitUs />
      },
      {
        path: "/admissions",
        element: <Admissions />
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path:"/contact-us",
        element: <ContactUs />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

