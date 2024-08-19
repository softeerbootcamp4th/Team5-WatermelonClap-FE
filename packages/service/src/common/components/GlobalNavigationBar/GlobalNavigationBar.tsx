import { headerContainerStyles, logoStyles } from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import GlobalNavs from "./GlobalNavs/GlobalNavs";
import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { useMobile } from "@service/common/hooks/useMobile";
import { GNB_BREAKPOINT } from "@service/constants/breakpoints";
import { useErrorBoundary } from "react-error-boundary";
import { theme } from "@watermelon-clap/core/src/theme";
import { FaPowerOff } from "react-icons/fa";
import { ExpirationTimer } from "./GlobalNavs";
import { useAuth, useModal } from "@watermelon-clap/core/src/hooks";
import { css } from "@emotion/react";

export const GlobalNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resetBoundary } = useErrorBoundary();
  const { logout, getIsLogin } = useAuth();
  const [isLogin, setIsLogin] = useState(getIsLogin());
  const { openModal } = useModal();

  const isMobile = useMobile(GNB_BREAKPOINT);
  const { getExpirationTime } = useAuth();

  const handleLogout = () => {
    openModal({
      type: "confirm",
      props: {
        title: "로그아웃",
        content: "정말 로그아웃 하시겠습니까???",
        confirmEvent: () => logout().then(() => setIsLogin(false)),
      },
    });
  };

  const navigate = useNavigate();
  return (
    <header css={headerContainerStyles}>
      <LogoLong
        css={logoStyles}
        onClick={() => {
          navigate(MAIN_PAGE_ROUTE);
          resetBoundary();
        }}
      />
      {isMobile && isLogin && (
        <div
          css={[
            theme.flex.center,
            theme.gap.gap16,
            css`
              position: absolute;
              right: 30px;
            `,
          ]}
        >
          <ExpirationTimer diffMs={getExpirationTime() as number} />
          <FaPowerOff
            css={css`
              color: white;
            `}
            onClick={handleLogout}
          />
        </div>
      )}

      {isMobile && (
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}

      <GlobalNavs isOpen={isOpen} isLogin={isLogin} setIsLogin={setIsLogin} />
    </header>
  );
};
