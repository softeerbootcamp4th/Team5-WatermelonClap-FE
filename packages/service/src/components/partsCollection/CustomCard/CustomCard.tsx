import * as style from "./CustomCard.css";

interface ICustomCardProps {
  bgImg?: string;
  spoilerImg?: string;
  wheelImg?: string;
  colorImg?: string;
}

export const CustomCard = ({
  bgImg,
  spoilerImg,
  wheelImg,
  colorImg,
}: ICustomCardProps) => {
  return (
    <div css={style.card}>
      <img css={style.carImg} src="images/partsCollection/defaultCar.svg" />

      <img css={style.bgImg} src={bgImg} />
      <img css={style.spoilerImg} src={spoilerImg} />
      <img css={style.wheelImg} src={wheelImg} />
      <img css={style.colorImg} src={colorImg} />
    </div>
  );
};
