import * as style from "./style";
import { Banner, EventPeriod } from "@service/components/main";

export const Main = () => {
  return (
    <div>
      <img src="images/main/main-bg.svg" css={style.mainBg} />
      <Banner />
      <EventPeriod />
    </div>
  );
};
