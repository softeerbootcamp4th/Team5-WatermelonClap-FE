import { createBrowserRouter } from "react-router-dom";
import { DemoPage } from "./Demo/pages/DemoPage";
import { ScrollDemoPage } from "./Demo/pages/ScrollDemoPage";
import {
  AUTH_DEMO_PAGE_ROUTE,
  DEMO_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  ROTATE_DEMO_PAGE_ROUTE,
  SCROLL_DEMO_PAGE_ROUTE,
  SCROLL_TEXT_DEMO_PAGE_ROUTE,
  MARQUEE_DEMO_PAGE_ROUTE,
} from "./constants/routes";
import { RotateDemoPage } from "./Demo/pages/RotateDemoPage";
import { MainPage } from "./pages/MainPage";
import { AuthDemoPage } from "./Demo/pages/AuthDemoPage";
import { AssetLoaderContextProvider } from "./common/providers/AssetLoaderContextProvider";
import { ScrollTextPage } from "./Demo/pages/ScrollTextPage";
import { MarqueeDemoPage } from "./Demo/pages/MarqueeDemoPage";

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE_ROUTE,
    element: (
      <AssetLoaderContextProvider>
        <MainPage />,
      </AssetLoaderContextProvider>
    ),
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
    ],
  },
]);
