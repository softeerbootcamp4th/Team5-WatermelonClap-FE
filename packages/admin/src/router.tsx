import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import {
  OrderEventManagement,
  OrderEventGeneration,
  OrderEventWinnerManagement,
} from "./pages/orderEvent";
import {
  PartsEventGeneration,
  PartsEventParticipantManagement,
  PartsEventDraw,
  PartsEventWinnerManagement,
} from "./pages/partsEvent";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  ORDER_EVENT_GENERATION_PAGE_ROUTE,
  ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
  PARTS_EVENT_GENERATION_PAGE_ROUTE,
  PARTS_EVENT_PARTICIPANT_MANAGEMENT_PAGE_ROUTE,
  PARTS_EVENT_DRAW_PAGE_ROUTE,
  PARTS_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
} from "./constants/routes";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      /* Order Event */
      {
        path: ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
        element: <OrderEventManagement />,
      },
      {
        path: ORDER_EVENT_GENERATION_PAGE_ROUTE,
        element: <OrderEventGeneration />,
      },
      {
        path: ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
        element: <OrderEventWinnerManagement />,
      },
      {
        path: ORDER_EVENT_GENERATION_PAGE_ROUTE,
        element: <OrderEventGeneration />,
      },
      {
        path: ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
        element: <OrderEventWinnerManagement />,
      },

      /* Parts Event */
      {
        path: PARTS_EVENT_GENERATION_PAGE_ROUTE,
        element: <PartsEventGeneration />,
      },
      {
        path: PARTS_EVENT_PARTICIPANT_MANAGEMENT_PAGE_ROUTE,
        element: <PartsEventParticipantManagement />,
      },
      {
        path: PARTS_EVENT_DRAW_PAGE_ROUTE,
        element: <PartsEventDraw />,
      },
      {
        path: PARTS_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
        element: <PartsEventWinnerManagement />,
      },
    ],
  },
]);
