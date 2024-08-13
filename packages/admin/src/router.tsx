import { createBrowserRouter } from "react-router-dom";
import { OrderEventManagement } from "./pages/orderEvent/OrderEventManagement/OrderEventManagement";
import { App } from "./App";
import { MAIN_PAGE_ROUTE } from "./constants/routes";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [{ path: MAIN_PAGE_ROUTE, element: <OrderEventManagement /> }],
  },
]);
