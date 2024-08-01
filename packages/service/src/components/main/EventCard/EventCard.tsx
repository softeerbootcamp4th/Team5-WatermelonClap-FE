import { baseStyles, theme } from "@watermelon-clap/core";
import * as style from "./style";
import { IEventData } from "@service/pages/Main/eventData";
import { Button, ButtonVariant } from "@service/common/components/Button";

interface IEventDataProps {
  eventData: IEventData;
}
export const EventCard = ({ eventData }: IEventDataProps) => {
  return (
    <div css={style.eventCard(eventData.id === 1)}>
      <div className="event-number">{eventData.id}</div>
      <div>
        <h2 css={theme.font.pretend.bold.titleB28}>{eventData.eventType}</h2>
        <h1 className="title">{eventData.title}</h1>
        <h3 css={theme.font.pretend.bold.body24}> {eventData.subTitle}</h3>
      </div>

      <img src={eventData.img} />

      <p css={[theme.font.pretend.medium.bodyM20, baseStyles.margin.mg32]}>
        {eventData.desc}
      </p>

      <Button variant={ButtonVariant.LONG} css={style.joinButton}>
        참여하기
      </Button>
    </div>
  );
};
