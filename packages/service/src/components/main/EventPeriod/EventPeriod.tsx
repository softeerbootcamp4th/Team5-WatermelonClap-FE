import * as style from "./style";
import { theme } from "@watermelon-clap/core";
import { css } from "@emotion/react";

export const EventPeriod: React.FC = () => {
  return (
    <div css={style.container}>
      <h1
        css={css`
          ${theme.font.pyeongChangPeace.bold.head};
          font-size: 70px;
        `}
      >
        아반떼 N 출시 기념 이벤트
      </h1>
      <h2 css={style.period}>2024. 07. 29 ~ 08. 18</h2>
      {/* 남은 날짜, 시간 계산하여 표시하기*/}
      <h2 css={style.timer}>
        <span
          css={css`
            color: ${theme.color.eventBlue};
            margin-right: 80px;
          `}
        >
          07일
        </span>
        12 : 58 : 32
      </h2>
    </div>
  );
};
