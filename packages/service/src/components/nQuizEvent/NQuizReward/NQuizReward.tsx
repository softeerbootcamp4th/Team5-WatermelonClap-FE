import * as style from "./NQuizReward.css";
import { EventStatusType } from "./type";

export interface NQuizRewardProps {
  imgSrc: string;
  name: string;
  startDate: string;
  status: EventStatusType;
}

export const NQuizReward = ({
  imgSrc,
  name,
  startDate,
  status,
}: NQuizRewardProps) => {
  const month = parseInt(startDate.slice(5, 7), 10);
  const day = parseInt(startDate.slice(8, 10), 10);
  const formattedDate = `${month}월 ${day}일`;
  const openExpectedDate = `${day}일 오전 10시 오픈 예정`;

  return (
    <div css={style.containerStyle(status)}>
      <span css={style.dateStyle(status)}>{formattedDate}</span>
      <div css={style.rewardContainerStyle(status)}>
        <img src={imgSrc} alt="N퀴즈 이벤트 보상 이미지" css={style.imgStyle} />
        <span css={style.nameStyle}>{name}</span>
      </div>
      <span css={style.endTextStyle(status)}>마감</span>
      <span css={style.openExpectedDateStyle(status)}>{openExpectedDate}</span>
    </div>
  );
};
