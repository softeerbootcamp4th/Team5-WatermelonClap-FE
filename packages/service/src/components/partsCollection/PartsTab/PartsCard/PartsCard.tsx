import { IParts } from "@service/apis/partsEvent/type";
import * as style from "./PartsCard.css";

interface IPartsCardProps {
  partsData: IParts;
}

export const PartsCard = ({ partsData }: IPartsCardProps) => {
  return (
    <div css={style.container}>
      <div css={style.card}>
        <img src={partsData.thumbnailImgSrc} />
      </div>
      <span css={style.name}>{partsData.name}</span>
    </div>
  );
};
