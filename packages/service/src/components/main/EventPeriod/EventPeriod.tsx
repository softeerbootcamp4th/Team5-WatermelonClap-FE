import * as style from "./EventPeriod.css";
import { theme } from "@watermelon-clap/core/src/theme";
import { Timer } from "./Timer";

export const EventPeriod = () => {
  const endData = new Date("2024/09/08 23:59:59");

  return (
    <div css={style.container}>
      <h1 css={style.title}>아반떼 N 출시 기념 이벤트</h1>
      <h2 css={style.period}>2024. 08. 19 ~ 09. 08</h2>
      <div css={theme.margin.mg24}></div>
      <Timer date={endData} />
    </div>
  );
};
