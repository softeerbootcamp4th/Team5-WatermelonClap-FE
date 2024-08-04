import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import {
  containerStyle,
  logoContainerStyle,
  logoStyle,
  titleStyle,
  dateStyle,
  contentContainerStyle,
  contentTextStyle,
  hintTextStyle,
} from "./NQuizTitle.css";

export const NQuizTitle = () => {
  return (
    <div css={containerStyle}>
      <div css={logoContainerStyle}>
        <NLogo css={logoStyle} />
        <span css={titleStyle}>퀴즈</span>
      </div>
      <div css={dateStyle}>2024. 07. 29 ~ 08. 02</div>
      <div css={contentContainerStyle}>
        <div css={contentTextStyle}>
          아반떼 N에 관한 정보를 알아보는 간단한 퀴즈를 맞혀보세요!
        </div>
        <div css={contentTextStyle}>매일 선착순 200명에게 경품을 드립니다!</div>
        <div css={hintTextStyle}>
          HINT! 상단 바 아반떼 N 페이지에서 정답을 찾을 수 있습니다!
        </div>
      </div>
    </div>
  );
};
