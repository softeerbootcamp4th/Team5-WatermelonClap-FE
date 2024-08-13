import { createBrowserRouter } from "react-router-dom";
import { OrderEventManagement } from "./pages/orderEvent/OrderEventManagement/OrderEventManagement";
import { App } from "./App";
import { ORDER_EVENT_MANAGEMENT_PAGE_ROUTE } from "./constants/routes";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
        element: <OrderEventManagement />,
      },
    ],
  },
]);
