import ReactDOM from "react-dom/client";
import "./index.css";
import { Global } from "@emotion/react";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "@watermelon-clap/core/src/providers";
import { globalStyles } from "@watermelon-clap/core/src/theme";

import { ModalContainer } from "./common/components/ModalContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ModalProvider>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
      <ModalContainer />
    </ModalProvider>
  </QueryClientProvider>,
);
