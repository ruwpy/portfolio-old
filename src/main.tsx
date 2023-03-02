import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index />
        <Route path="projects" />
        <Route path="about" />
        <Route path="project/:projectName" />
      </Routes>
    </Router>
  </React.StrictMode>
);
