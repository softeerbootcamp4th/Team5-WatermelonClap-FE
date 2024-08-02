import { EventCard } from "@service/components/main/EventCard";
import * as style from "./style";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { baseStyles } from "@watermelon-clap/core";
import { eventData } from "./eventData";

export const Main = () => {
  return (
    <div>
      <img src="images/main/main-bg.svg" css={style.mainBg} />
      <Banner />
      <EventPeriod />
      <Expectations />
      <div css={[baseStyles.flex.center, baseStyles.gap.gap24]}>
        {eventData.map((data) => (
          <EventCard eventData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
