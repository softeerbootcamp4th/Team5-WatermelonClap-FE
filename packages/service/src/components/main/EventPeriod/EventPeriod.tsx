import * as style from "./style";
import { baseStyles, theme } from "@watermelon-clap/core";
import { css } from "@emotion/react";
import { Timer } from "./Timer";

export const EventPeriod = () => {
  const today = new Date(); // Get the current date
  const futureDate = new Date(today); // Create a new date object
  futureDate.setDate(today.getDate() + 2);
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
      <div css={baseStyles.margin.mg48}></div>
      <Timer date={futureDate} />
    </div>
  );
};