import { headerContainerStyles, logoStyles } from "./AppHeader.css";
import { ReactComponent as LogoLong } from "@service/assets/logo-long.svg";
import { AppHeaderNavs } from "./AppHeaderNavs";
export const AppHeader = () => {
  return (
    <header css={headerContainerStyles}>
      <LogoLong css={logoStyles} />

      <AppHeaderNavs />
    </header>
  );
};
