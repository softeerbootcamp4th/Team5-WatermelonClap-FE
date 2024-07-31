import { Link } from "react-router-dom";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import { linkStyles, navsContainerStyles, nLogoStyles } from "./GlobalNavs.css";

const GlobalNavs = () => {
  return (
    <div css={navsContainerStyles}>
      <Link to="#" css={linkStyles}>
        아반떼 N
      </Link>
      <Link to="#" css={linkStyles}>
        내 아반떼 N 뽑기
      </Link>
      <Link to="#" css={linkStyles}>
        <NLogo css={nLogoStyles} /> 퀴즈
      </Link>
      <Link to="#" css={linkStyles}>
        응모 내역 확인
      </Link>
    </div>
  );
};

export default GlobalNavs;
