import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { MovieProvider } from "./context/MovieContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <MovieProvider>
        <App />
        <ToastContainer />
      </MovieProvider>
    </Router>
  </StrictMode>
);
