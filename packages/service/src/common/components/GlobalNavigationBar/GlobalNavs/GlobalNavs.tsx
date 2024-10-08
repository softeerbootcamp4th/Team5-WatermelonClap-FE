import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import * as style from "./GlobalNavs.css";
import { useErrorBoundary } from "react-error-boundary";
import {
  NEW_CAR_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
  N_QUIZ_EVENT_PAGE_ROUTE,
  PARTS_COLLECTION_PAGE_ROUTE,
  LOTTER_APPLY_INFO_PAGE_ROUTE,
} from "@service/constants/routes";
import { useAuth, useModal } from "@watermelon-clap/core/src/hooks";
import { ExpirationTimer } from "./ExpirationTimer";
import { theme } from "@watermelon-clap/core/src/theme";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
import { css } from "@emotion/react";

interface IGlobalNavsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalNavs = ({ isOpen, setIsOpen }: IGlobalNavsProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetBoundary } = useErrorBoundary();
  const { getExpirationTime, getIsLogin } = useAuth();

  const handleNavigation = (route: string) => {
    setIsOpen(false);
    navigate(route);
    resetBoundary();
  };

  const { login, logout } = useAuth();
  const { openModal } = useModal();
  const [isLogin, setIsLogin] = useState(getIsLogin());

  const handleLogin = () => {
    login().then(() => setIsLogin(true));
  };

  const handleLogout = () => {
    openModal({
      type: "confirm",
      props: {
        title: "로그아웃",
        content: "정말 로그아웃 하시겠습니까?",
        confirmEvent: () => logout().then(() => setIsLogin(false)),
      },
    });
  };

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <div css={style.navsContainerStyles(isOpen)}>
      <div
        css={[
          style.linkStyles,
          isActiveRoute(NEW_CAR_PAGE_ROUTE) && style.activeLinkStyles,
        ]}
        onClick={() => handleNavigation(NEW_CAR_PAGE_ROUTE)}
      >
        아반떼 N 소개
      </div>
      <div
        css={[
          style.linkStyles,
          isActiveRoute(PICK_EVENT_PAGE_ROUTE) && style.activeLinkStyles,
        ]}
        onClick={() => handleNavigation(PICK_EVENT_PAGE_ROUTE)}
      >
        내 아반떼 N 뽑기
      </div>
      <div
        css={[
          style.linkStyles,
          isActiveRoute(N_QUIZ_EVENT_PAGE_ROUTE) && style.activeLinkStyles,
        ]}
        onClick={() => handleNavigation(N_QUIZ_EVENT_PAGE_ROUTE)}
      >
        <NLogo css={style.nLogoStyles} /> 퀴즈
      </div>
      {isLogin && (
        <>
          <div
            css={[
              style.linkStyles,
              isActiveRoute(PARTS_COLLECTION_PAGE_ROUTE) &&
                style.activeLinkStyles,
            ]}
            onClick={() => handleNavigation(PARTS_COLLECTION_PAGE_ROUTE)}
          >
            내 컬렉션
          </div>
          <div
            css={[
              style.linkStyles,
              isActiveRoute(LOTTER_APPLY_INFO_PAGE_ROUTE) &&
                style.activeLinkStyles,
            ]}
            onClick={() => handleNavigation(LOTTER_APPLY_INFO_PAGE_ROUTE)}
          >
            기대평 / 공유
          </div>
        </>
      )}

      {isLogin ? (
        <div css={[theme.flex.center, theme.gap.gap16]}>
          <ExpirationTimer diffMs={getExpirationTime() as number} />
          <FaPowerOff
            css={css`
              color: white;
              cursor: pointer;
            `}
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div css={style.linkStyles} onClick={handleLogin}>
          로그인
        </div>
      )}
    </div>
  );
};

export default GlobalNavs;
