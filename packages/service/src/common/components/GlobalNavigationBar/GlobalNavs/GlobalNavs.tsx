import { useNavigate } from "react-router-dom";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import { linkStyles, navsContainerStyles, nLogoStyles } from "./GlobalNavs.css";
import { useErrorBoundary } from "react-error-boundary";
import {
  NEW_CAR_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
  N_QUIZ_EVENT_PAGE_ROUTE,
  PARTS_COLLECTION_PAGE_ROUTE,
  LOTTER_APPLY_INFO_PAGE_ROUTE,
} from "@service/constants/routes";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { ExpirationTimer } from "./ExpirationTimer";

const GlobalNavs = ({ isOpen }: { isOpen: boolean }) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();
  const { getExpirationTime } = useAuth();

  const handleNavigation = (route: string) => {
    navigate(route);
    resetBoundary();
  };

  const { login } = useAuth();
  const handleLogin = () => {
    login();
  };

  return (
    <div css={navsContainerStyles(isOpen)}>
      <div
        css={linkStyles}
        onClick={() => handleNavigation(NEW_CAR_PAGE_ROUTE)}
      >
        아반떼 N
      </div>
      <div
        css={linkStyles}
        onClick={() => handleNavigation(PICK_EVENT_PAGE_ROUTE)}
      >
        내 아반떼 N 뽑기
      </div>
      <div
        css={linkStyles}
        onClick={() => handleNavigation(N_QUIZ_EVENT_PAGE_ROUTE)}
      >
        <NLogo css={nLogoStyles} /> 퀴즈
      </div>
      <div
        css={linkStyles}
        onClick={() => handleNavigation(PARTS_COLLECTION_PAGE_ROUTE)}
      >
        내 컬렉션
      </div>
      <div
        css={linkStyles}
        onClick={() => handleNavigation(LOTTER_APPLY_INFO_PAGE_ROUTE)}
      >
        응모 내역 확인
      </div>
      <div css={linkStyles} onClick={handleLogin}>
        로그인
      </div>
      <ExpirationTimer diffMs={getExpirationTime()} />
    </div>
  );
};

export default GlobalNavs;
