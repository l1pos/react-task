import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ArticlesProvider } from "./context/ArticlesContext";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
