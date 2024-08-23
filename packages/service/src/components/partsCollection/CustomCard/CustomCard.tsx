import { IParts } from "@watermelon-clap/core/src/types";
import * as style from "./CustomCard.css";

export interface ICustomCardProps {
  bgParts?: IParts;
  spoilerParts?: IParts;
  wheelParts?: IParts;
  colorParts?: IParts;
}

export const CustomCard = ({
  bgParts,
  spoilerParts,
  wheelParts,
  colorParts,
}: ICustomCardProps) => {
  return (
    <div css={style.card}>
      <img css={style.carImg} src="/images/partsCollection/defaultCar.webp" />

      {bgParts?.imgSrc && <img css={style.bgImg} src={bgParts.imgSrc} />}
      <img css={style.spoilerImg} src={spoilerParts?.imgSrc} />
      <img css={style.wheelImg} src={wheelParts?.imgSrc} />
      <img css={style.colorImg} src={colorParts?.imgSrc} />
    </div>
  );
};
