import { theme } from "@watermelon-clap/core/src/theme";
import * as style from "./EventCard.css";
import { IEventData } from "@service/pages/Main/eventData";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { useMobile } from "@service/common/hooks/useMobile";

interface IEventDataProps {
  eventData: IEventData;
}
export const EventCard = ({ eventData }: IEventDataProps) => {
  const isMobile = useMobile();

  return (
    <div css={style.eventCard(eventData.id === 1)}>
      <div css={style.eventNumber}>{eventData.id}</div>
      <div css={[theme.flex.column, theme.gap.gap32]}>
        <div>
          <h2 css={style.eventType}>{eventData.eventType}</h2>
          <h1 css={style.eventTitle}>{eventData.title}</h1>
          <h3 css={style.subTitle}> {eventData.subTitle}</h3>
        </div>
        <img src={eventData.img} width={isMobile ? 200 : 300} />

        <p css={style.desc}>{eventData.desc}</p>

        <Button variant={ButtonVariant.LONG} css={style.joinButton}>
          참여하기
        </Button>
      </div>
    </div>
  );
};
