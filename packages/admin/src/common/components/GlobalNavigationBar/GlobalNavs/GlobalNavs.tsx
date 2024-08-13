import { Link } from "react-router-dom";
import { linkStyles, navsContainerStyles } from "./GlobalNavs.css";

const GlobalNavs = () => {
  return (
    <div css={navsContainerStyles}>
      <Link to="#" css={linkStyles}>
        퀴즈 관리
      </Link>
      <Link to="#" css={linkStyles}>
        퀴즈 생성
      </Link>
      <Link to="#" css={linkStyles}>
        당첨자 관리
      </Link>
    </div>
  );
};

export default GlobalNavs;
