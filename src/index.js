import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GifExpertApp } from "./components/GifExpert";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

reportWebVitals();
