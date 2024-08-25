import { EventCard } from "@service/components/main/EventCard";
import * as style from "./Main.css";
import { Banner, EventPeriod, Expectations } from "@service/components/main";
import { eventData } from "./eventData";
import { Space } from "@service/common/styles/Space";
import { useMobile } from "@service/common/hooks/useMobile";
import { Helmet } from "react-helmet";
import { ClickInduceIcon } from "@service/common/components/ClickInduceIcon";
import { css } from "@emotion/react";

export const Main = () => {
  const isMobile = useMobile();

  return (
    <>
      <Helmet>
        <title>현대자동차 - 아반떼 N 2024 | 고성능 컴팩트 스포츠카</title>
        <meta name="description" content="내 컬렉션 공유 페이지" />
      </Helmet>

      <Banner />
      <div css={style.mainBg}>
        <ClickInduceIcon
          text={"SCROLL"}
          customCss={css`
            top: -100px;
          `}
        />
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
