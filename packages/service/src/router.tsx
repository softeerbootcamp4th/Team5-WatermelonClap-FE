import { createBrowserRouter } from "react-router-dom";
import {
  AUTH_DEMO_PAGE_ROUTE,
  DEMO_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  ROTATE_DEMO_PAGE_ROUTE,
  SCROLL_DEMO_PAGE_ROUTE,
  SCROLL_TEXT_DEMO_PAGE_ROUTE,
  MARQUEE_DEMO_PAGE_ROUTE,
  BUTTON_DEMO_PAGE_ROUTE,
  MODAL_DEMO_PAGE_ROUTE,
  N_QUIZ_EVENT_PAGE_ROUTE,
  NEW_CAR_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
  N_PARTS_PICK_PAGE_ROUTE,
  PARTS_COLLECTION_PAGE_ROUTE,
} from "./constants/routes";
import { RotateDemoPage } from "./Demo/pages/RotateDemoPage";
import { AuthDemoPage } from "./Demo/pages/AuthDemoPage";
import { ScrollTextPage } from "./Demo/pages/ScrollTextPage";
import { MarqueeDemoPage } from "./Demo/pages/MarqueeDemoPage";
import { App } from "./App";
import ButtonDemoPage from "./Demo/pages/ButtonDemoPage";
import { DemoPage } from "./Demo/pages/DemoPage";
import { ModalDemoPage } from "./Demo/pages/ModalDemoPage";
import { ScrollDemoPage } from "./Demo/pages/ScrollDemoPage";
import {
  Main,
  NQuizEvent,
  PickEvent,
  NewCar,
  PartsPick,
  PartsCollection,
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
    ],
  },
  {
    path: DEMO_PAGE_ROUTE,
    children: [
      {
        path: "",
        element: <DemoPage />,
      },
      {
        path: SCROLL_DEMO_PAGE_ROUTE,
        element: <ScrollDemoPage />,
      },
      {
        path: ROTATE_DEMO_PAGE_ROUTE,
        element: <RotateDemoPage />,
      },
      {
        path: AUTH_DEMO_PAGE_ROUTE,
        element: <AuthDemoPage />,
      },
      {
        path: SCROLL_TEXT_DEMO_PAGE_ROUTE,
        element: <ScrollTextPage />,
      },
      {
        path: MARQUEE_DEMO_PAGE_ROUTE,
        element: <MarqueeDemoPage />,
      },
      {
        path: BUTTON_DEMO_PAGE_ROUTE,
        element: <ButtonDemoPage />,
      },
      {
        path: MODAL_DEMO_PAGE_ROUTE,
        element: <ModalDemoPage />,
      },
    ],
  },
]);
