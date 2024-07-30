import { Link } from "react-router-dom";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import {
  gapStyles,
  linkStyles,
  navsContainerStyles,
  nLogoStyles,
} from "./GlobalNavs.css";
import { Flex } from "../Flex";

const GlobalNavs = () => {
  return (
    <div css={navsContainerStyles}>
      <Link to="#" css={linkStyles}>
        아반떼 N
      </Link>
      <Flex css={gapStyles} />
      <Link to="#" css={linkStyles}>
        내 아반떼 N 뽑기
      </Link>
      <Flex css={gapStyles} />
      <Link to="#" css={linkStyles}>
        <NLogo css={nLogoStyles} /> 퀴즈
      </Link>
      <Flex css={gapStyles} />
      <Link to="#" css={linkStyles}>
        응모 내역 확인
      </Link>
    </div>
  );
};

export default GlobalNavs;
