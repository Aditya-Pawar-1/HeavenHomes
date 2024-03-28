import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AboutDataProvider from "./utils/context/AboutContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AboutDataProvider>
      <App />
    </AboutDataProvider>
  </BrowserRouter>
);
