import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import RhythmicAwarenessLandingPage from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RhythmicAwarenessLandingPage />
    <Analytics />
  </React.StrictMode>
);
