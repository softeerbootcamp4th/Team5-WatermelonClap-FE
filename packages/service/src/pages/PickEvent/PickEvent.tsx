import { JoinInfo } from "@service/components/pickEvent/JoinInfo/JoinInfo";
import * as style from "./PickEvent.css";
import { CardCarousel } from "@service/components/pickEvent/CardCarousel";

export const PickEvent = () => {
  return (
    <div css={style.bg}>
      <JoinInfo />
      <CardCarousel />
    </div>
  );
};
