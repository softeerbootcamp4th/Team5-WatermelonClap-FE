import { createBrowserRouter } from "react-router-dom";
import {
  OrderEventManagement,
  OrderEventGeneration,
  OrderEventWinnerManagement,
} from "./pages/orderEvent";
import { App } from "./App";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  ORDER_EVENT_GENERATION_PAGE_ROTUE,
  ORDER_EVENT_WINNER_MANAGEMENT_PATE_ROUTE,
} from "./constants/routes";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
        element: <OrderEventManagement />,
      },
      {
        path: ORDER_EVENT_GENERATION_PAGE_ROTUE,
        element: <OrderEventGeneration />,
      },
      {
        path: ORDER_EVENT_WINNER_MANAGEMENT_PATE_ROUTE,
        element: <OrderEventWinnerManagement />,
      },
    ],
  },
]);
