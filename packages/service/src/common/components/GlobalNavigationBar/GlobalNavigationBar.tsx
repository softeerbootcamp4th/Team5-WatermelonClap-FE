import { headerContainerStyles, logoStyles } from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import GlobalNavs from "./GlobalNavs";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";

const GlobalNavigationBar = () => {
  const navigate = useNavigate();
  return (
    <header css={headerContainerStyles}>
      <LogoLong
        css={logoStyles}
        onClick={() => {
          navigate(MAIN_PAGE_ROUTE);
        }}
      />
      <GlobalNavs />
    </header>
  );
};

export default GlobalNavigationBar;
