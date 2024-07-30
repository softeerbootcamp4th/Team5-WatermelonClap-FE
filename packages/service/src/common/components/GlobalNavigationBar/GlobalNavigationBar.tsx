import { headerContainerStyles, logoStyles } from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "@service/assets/logo-long.svg";
import { AppHeaderNavs } from "./AppHeaderNavs";

const AppHeader = () => {
  return (
    <header css={headerContainerStyles}>
      <LogoLong css={logoStyles} />

      <AppHeaderNavs />
    </header>
  );
};

export default AppHeader;
