import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Router>
  </React.StrictMode>
);
