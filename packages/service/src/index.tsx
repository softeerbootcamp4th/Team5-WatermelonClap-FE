import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { globalStyles } from "@watermelon-clap/core";
import { Global } from "@emotion/react";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
