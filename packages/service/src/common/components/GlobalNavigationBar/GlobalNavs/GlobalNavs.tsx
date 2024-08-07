import { Link } from "react-router-dom";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import { linkStyles, navsContainerStyles, nLogoStyles } from "./GlobalNavs.css";
import {
  NEW_CAR_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
} from "@service/constants/routes";

const GlobalNavs = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div css={navsContainerStyles(isOpen)}>
      <Link to={NEW_CAR_PAGE_ROUTE} css={linkStyles}>
        아반떼 N
      </Link>
      <Link to={PICK_EVENT_PAGE_ROUTE} css={linkStyles}>
        내 아반떼 N 뽑기
      </Link>
      <Link to="#" css={linkStyles}>
        <NLogo css={nLogoStyles} /> 퀴즈
      </Link>
      <Link to="#" css={linkStyles}>
        내 컬렉션
      </Link>
      <Link to="#" css={linkStyles}>
        응모 내역 확인
      </Link>
    </div>
  );
};

export default GlobalNavs;
