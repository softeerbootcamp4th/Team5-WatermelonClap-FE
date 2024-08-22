import { useMobile } from "@service/common/hooks/useMobile";
import * as style from "./PartsCard.css";
import { IParts } from "@watermelon-clap/core/src/types";

interface IPartsCardProps {
  partsData: IParts;
}

export const PartsCard = ({ partsData }: IPartsCardProps) => {
  const isMobile = useMobile();

  return (
    <div css={style.container}>
      <div css={style.card}>
        <img
          src={partsData.thumbnailImgSrc}
          css={style.img(partsData.category)}
        />
      </div>
      {isMobile ? <span css={style.name}>{partsData.name}</span> : <></>}
    </div>
  );
};
