import { GlobalProvider } from "./common/providers/GlobalProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
export const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};
