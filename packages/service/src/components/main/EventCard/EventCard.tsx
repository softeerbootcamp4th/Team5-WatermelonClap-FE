import { theme } from "@watermelon-clap/core";
import * as style from "./style";
import { IEventData } from "@service/pages/Main/eventData";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { css } from "@emotion/react";

interface IEventDataProps {
  eventData: IEventData;
}
export const EventCard = ({ eventData }: IEventDataProps) => {
  return (
    <div css={style.eventCard(eventData.id === 1)}>
      <div css={style.eventNumber}>{eventData.id}</div>
      <div css={[theme.flex.column, theme.gap.gap32]}>
        <div>
          <h2
            css={css`
              ${theme.font.preB28};
              margin-top: 28px;
              margin-bottom: 12px;
            `}
          >
            {eventData.eventType}
          </h2>
          <h1 css={style.eventTitle}>{eventData.title}</h1>
          <h3 css={theme.font.preB24}> {eventData.subTitle}</h3>
        </div>

        <img src={eventData.img} />

        <p css={[theme.font.preM20, theme.margin.mg32]}>{eventData.desc}</p>

        <Button variant={ButtonVariant.LONG} css={style.joinButton}>
          참여하기
        </Button>
      </div>
    </div>
  );
};
