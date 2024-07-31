import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "./common/components/GlobalNavigationBar";
import { Footer } from "./common/components/Footer";

export const App = () => {
  return (
    <div>
      <GlobalNavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};
