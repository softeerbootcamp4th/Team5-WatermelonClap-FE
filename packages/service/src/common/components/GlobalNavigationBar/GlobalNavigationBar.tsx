import { headerContainerStyles, logoStyles } from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import GlobalNavs from "./GlobalNavs";

const GlobalNavigationBar = () => {
  return (
    <header css={headerContainerStyles}>
      <LogoLong css={logoStyles} />
      <GlobalNavs />
    </header>
  );
};

export default GlobalNavigationBar;
