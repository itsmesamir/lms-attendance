import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import Tailwind CSS
import App from "./App";
// import dotenv from "dotenv";

// dotenv.config();

// Render the main App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
