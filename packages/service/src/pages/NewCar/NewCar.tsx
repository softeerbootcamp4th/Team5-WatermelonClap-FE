import { NewCarInfo } from "@service/components/newCar";
import * as style from "./NewCar.css";
import { Helmet } from "react-helmet";

export const NewCar = () => {
  return (
    <>
      <Helmet>
        <title>
          아반떼 N 소개 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트 스포츠카
        </title>
        <meta name="description" content="아반떼 N 소개 페이지" />
      </Helmet>
      <div css={style.bg}>
        <img src="images/newCar/new-car-main-img.webp" css={style.mainImg} />
        <NewCarInfo />
      </div>
    </>
  );
};
