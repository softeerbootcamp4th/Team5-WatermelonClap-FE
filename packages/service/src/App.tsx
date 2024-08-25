import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "./common/components/GlobalNavigationBar";
import { Footer } from "./common/components/Footer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ScrollToTop } from "./common/components/ScrollToTop";
import { Error, Loading } from "./pages";

export const App = () => {
  return (
    <div>
      <ScrollToTop />
      <ErrorBoundary FallbackComponent={Error}>
        <GlobalNavigationBar />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
