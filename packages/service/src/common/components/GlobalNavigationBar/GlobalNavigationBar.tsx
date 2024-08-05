import { headerContainerStyles, logoStyles } from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import GlobalNavs from "./GlobalNavs/GlobalNavs";
import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { useMobile } from "@service/common/hooks/useMobile";
import { GNB_BREAKPOINT } from "@service/constants/breakpoints";

export const GlobalNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 800px보다 작아지면 햄버거 메뉴 생성
  const isMobile = useMobile(GNB_BREAKPOINT);

  const navigate = useNavigate();
  return (
    <header css={headerContainerStyles}>
      <LogoLong
        css={logoStyles}
        onClick={() => {
          navigate(MAIN_PAGE_ROUTE);
        }}
      />

      {isMobile && (
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}

      <GlobalNavs isOpen={isOpen} />
    </header>
  );
};
