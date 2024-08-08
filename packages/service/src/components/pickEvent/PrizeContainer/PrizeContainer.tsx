import { miniatureData, prizeData, winnerPrizeData } from "./data";
import * as style from "./PrizeContainer.css";
import { PrizeItem } from "./PrizeItem";

export const PrizeContainer = () => {
  return (
    <div css={style.prizeContainer}>
      <div css={style.container}>
        <h1 css={style.title}>경품 안내</h1>
        <PrizeItem {...winnerPrizeData} imgSize="500px" />
        <div css={style.prizeWrap}>
          {prizeData.map((info, idx) => (
            <PrizeItem {...info} key={idx} />
          ))}
        </div>
      </div>
      <div css={style.container}>
        <h1 css={style.title}>미니어처 이벤트 경품 안내</h1>
        <PrizeItem {...miniatureData} />
      </div>
    </div>
  );
};
