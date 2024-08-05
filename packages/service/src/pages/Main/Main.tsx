import { EventCard } from "@service/components/main/EventCard";
import * as style from "./Main.css";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { eventData } from "./eventData";

export const Main = () => {
  return (
    <>
      <Banner />
      <div css={style.mainBg}>
        <EventPeriod />
        <Expectations />
        <div css={style.eventCardWrap}>
          {eventData.map((data) => (
            <EventCard eventData={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};
