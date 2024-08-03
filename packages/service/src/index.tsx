import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Global } from "@emotion/react";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "./common/providers/ModalProvider.tsx";
import { ModalContainer } from "./common/components/ModalContainer";
import { globalStyles } from "@watermelon-clap/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
      <ModalContainer />
    </ModalProvider>
  </React.StrictMode>,
);
