import * as style from "./PrizeItem.css";

interface IPrizeItemProps {
  img: string;
  rank: string;
  name: string;
  winner?: boolean;
}

export const PrizeItem = ({ img, rank, name, winner }: IPrizeItemProps) => {
  return (
    <div css={style.Container}>
      <img src={img} css={style.img(winner)} />
      <h2 css={style.rank}>{rank}</h2>
      <h1 css={style.name}>{name}</h1>
    </div>
  );
};
