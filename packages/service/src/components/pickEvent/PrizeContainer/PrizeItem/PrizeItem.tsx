import * as style from "./PrizeItem.css";

interface IPrizeItemProps {
  img: string;
  rank: string;
  name: string;
  imgSize?: string;
}

export const PrizeItem = ({
  img,
  rank,
  name,
  imgSize = "300px",
}: IPrizeItemProps) => {
  return (
    <div css={style.Container}>
      <img src={img} width={imgSize} css={style.img} />
      <h2 css={style.rank}>{rank}</h2>
      <h1 css={style.name}>{name}</h1>
    </div>
  );
};
