import { CardCarousel, JoinInfo } from "@service/components/pickEvent";
import * as style from "./PickEvent.css";

export const PickEvent = () => {
  return (
    <div css={style.bg}>
      <JoinInfo />
      <CardCarousel />
    </div>
  );
};
