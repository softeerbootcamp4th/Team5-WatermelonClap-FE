import { JoinInfo } from "@service/components/pickEvent/JoinInfo/JoinInfo";
import * as style from "./PickEvent.css";

export const PickEvent = () => {
  return (
    <div css={style.bg}>
      <JoinInfo />
    </div>
  );
};
