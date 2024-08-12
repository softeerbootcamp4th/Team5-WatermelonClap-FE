import {
  containerStyle,
  dateStyle,
  rewardContainerStyle,
  imgStyle,
  nameStyle,
  openExpectedDateStyle,
  endTextStyle,
} from "./NQuizReward.css";
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
  const day = parseInt(startDate.slice(-2), 10);
  const formattedDate = `${month}월 ${day}일`;
  const openExpectedDate = `${day}일 오전 10시 오픈 예정`;

  return (
    <div css={containerStyle(status)}>
      <span css={dateStyle(status)}>{formattedDate}</span>
      <div css={rewardContainerStyle(status)}>
        <img src={imgSrc} alt="N퀴즈 이벤트 보상 이미지" css={imgStyle} />
        <span css={nameStyle}>{name}</span>
      </div>
      <span css={endTextStyle(status)}>마감</span>
      <span css={openExpectedDateStyle(status)}>{openExpectedDate}</span>
    </div>
  );
};
