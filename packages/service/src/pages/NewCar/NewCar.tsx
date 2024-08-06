import { NewCarInfo } from "@service/components/newCar/NewCarInfo/NewCarInfo";
import * as style from "./NewCar.css";

export const NewCar = () => {
  return (
    <div css={style.bg}>
      <img src="images/newCar/new-car-main-img.svg" css={style.mainImg} />
      <NewCarInfo />
    </div>
  );
};
