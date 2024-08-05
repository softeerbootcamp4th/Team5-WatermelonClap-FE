import { EventCard } from "@service/components/main/EventCard";
import * as style from "./Main.css";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { eventData } from "./eventData";
import { theme } from "@watermelon-clap/core";

export const Main = () => {
  return (
    <>
      <Banner />
      <div css={style.mainBg}>
        <EventPeriod />
        <Expectations />
        <div css={[theme.flex.center, theme.gap.gap24]}>
          {eventData.map((data) => (
            <EventCard eventData={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};
