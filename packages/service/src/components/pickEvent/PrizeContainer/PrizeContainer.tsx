import { miniatureData, prizeData, winnerPrizeData } from "./data";
import * as style from "./PrizeContainer.css";
import { PrizeItem } from "./PrizeItem";

export const PrizeContainer = () => {
  return (
    <div css={style.prizeContainer}>
      <div css={style.container}>
        <h1 css={style.title}>추첨 경품</h1>
        <PrizeItem {...winnerPrizeData} winner />
        <div css={style.prizeWrap}>
          {prizeData.map((info, idx) => (
            <PrizeItem {...info} key={idx} />
          ))}
        </div>
      </div>
      <div css={style.container}>
        <h1 css={style.title}>미니어처 경품</h1>
        <PrizeItem winner {...miniatureData} />
      </div>
    </div>
  );
};
