import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import * as style from "./NQuizTitle.css";

export const NQuizTitle = () => {
  return (
    <div css={style.containerStyle}>
      <div css={style.logoContainerStyle}>
        <NLogo css={style.logoStyle} />
        <span css={style.titleStyle}>퀴즈</span>
      </div>
      <div css={style.dateStyle}>2024. 08. 19 ~ 08. 23</div>
      <div css={style.contentContainerStyle}>
        <div css={style.contentTextStyle}>
          아반떼 N에 관한 정보를 알아보는 간단한 퀴즈를 맞혀보세요!
        </div>
        <div css={style.contentTextStyle}>
          매일 선착순 200명에게 경품을 드립니다!
        </div>
        <div css={style.hintTextStyle}>
          HINT! 상단 바 아반떼 N 페이지에서 정답을 찾을 수 있습니다!
        </div>
      </div>
    </div>
  );
};
