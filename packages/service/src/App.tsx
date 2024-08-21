import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "./common/components/GlobalNavigationBar";
import { Footer } from "./common/components/Footer";
import { Error } from "./pages/Error";
import { Loading } from "./pages/Loading";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ScrollToTop } from "./common/components/ScrollToTop";

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
