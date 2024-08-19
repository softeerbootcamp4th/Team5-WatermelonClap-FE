import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "./common/components/GlobalNavigationBar";

export const App = () => {
  return (
    <div>
      <GlobalNavigationBar />
      <Outlet />
    </div>
  );
};
