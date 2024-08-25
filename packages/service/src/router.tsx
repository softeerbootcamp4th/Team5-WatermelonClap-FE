import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  MAIN_PAGE_ROUTE,
  N_QUIZ_EVENT_PAGE_ROUTE,
  NEW_CAR_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
  N_PARTS_PICK_PAGE_ROUTE,
  PARTS_COLLECTION_PAGE_ROUTE,
  SHARE_PAGE_ROUTE,
  N_QUIZ_EVENT_PAGE_WINNER_APLLY_PAGE_ROUTE,
  LOTTER_APPLY_INFO_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from "./constants/routes";
import { App } from "./App";
import {
  Main,
  NQuizEvent,
  PickEvent,
  NewCar,
  PartsPick,
  PartsCollection,
  Share,
  NQuizEventWinnerApply,
  LotteryApplyInfo,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: MAIN_PAGE_ROUTE, element: <Main /> },
      { path: N_QUIZ_EVENT_PAGE_ROUTE, element: <NQuizEvent /> },
      { path: PICK_EVENT_PAGE_ROUTE, element: <PickEvent /> },
      { path: NEW_CAR_PAGE_ROUTE, element: <NewCar /> },
      { path: N_PARTS_PICK_PAGE_ROUTE, element: <PartsPick /> },
      { path: PARTS_COLLECTION_PAGE_ROUTE, element: <PartsCollection /> },
      { path: SHARE_PAGE_ROUTE, element: <Share /> },
      {
        path: N_QUIZ_EVENT_PAGE_WINNER_APLLY_PAGE_ROUTE,
        element: <NQuizEventWinnerApply />,
      },
      {
        path: LOTTER_APPLY_INFO_PAGE_ROUTE,
        element: <LotteryApplyInfo />,
      },
    ],
  },
  {
    path: NOT_FOUND_PAGE_ROUTE,
    element: <Navigate to={MAIN_PAGE_ROUTE} />,
  },
]);
