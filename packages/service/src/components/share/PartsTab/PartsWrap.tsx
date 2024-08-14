import * as style from "./PartsWrap.css";
import { PartsCard } from "./PartsCard";
import { IParts } from "@watermelon-clap/core/src/types";

export interface IPartsWrapProps {
  equippedPartsData?: IParts[];
}

export const PartsWrap = ({ equippedPartsData }: IPartsWrapProps) => {
  return (
    <div css={style.container}>
      <div css={style.partsCardWrap}>
        {equippedPartsData?.map((partsData, idx) => (
          <PartsCard partsData={partsData} key={idx} />
        ))}
      </div>
    </div>
  );
};
