import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
    <link href="/dist/output.css" rel="stylesheet"></link>
  </React.StrictMode>,
);
