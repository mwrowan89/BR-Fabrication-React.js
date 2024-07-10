import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: `/gallery`,
    element: <Gallery />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Nav">
      <Header />
      <br />
    </div>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
