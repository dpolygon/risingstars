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
import About from './routes/about';
import VisitUs from './routes/visitus';
import Contact from './routes/contact'
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
        path: "/visit-us",
        element: <VisitUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />,
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

