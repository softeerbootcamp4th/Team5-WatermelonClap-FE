import { EventCard } from "@service/components/main/EventCard";
import * as style from "./style";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { eventData } from "./eventData";
import { theme } from "@watermelon-clap/core";

export const Main = () => {
  return (
    <div>
      <img src="images/main/main-bg.svg" css={style.mainBg} />
      <Banner />
      <EventPeriod />
      <Expectations />
      <div css={[theme.flex.center, theme.gap.gap24]}>
        {eventData.map((data) => (
          <EventCard eventData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
