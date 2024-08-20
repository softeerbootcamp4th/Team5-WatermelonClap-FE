import { EventCard } from "@service/components/main/EventCard";
import * as style from "./Main.css";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { eventData } from "./eventData";
import { Space } from "@service/common/styles/Space";
import { useMobile } from "@service/common/hooks/useMobile";

export const Main = () => {
  const isMobile = useMobile();

  return (
    <>
      <Banner />
      <div css={style.mainBg}>
        <EventPeriod />
        <Space size={isMobile ? 30 : 100} />
        <Expectations />
        <Space size={isMobile ? 30 : 120} />
        <div id="scrollMove" css={style.eventCardWrap}>
          {eventData.map((data) => (
            <EventCard eventData={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
};
