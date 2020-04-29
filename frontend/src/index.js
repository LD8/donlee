import React from "react";
import ReactDOM from "react-dom";
import Land from "./Land";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Land />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
