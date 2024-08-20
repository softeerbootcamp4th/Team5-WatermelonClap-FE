import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "./common/components/GlobalNavigationBar";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./pages/Error";

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <GlobalNavigationBar />
      <Outlet />
    </ErrorBoundary>
  );
};
