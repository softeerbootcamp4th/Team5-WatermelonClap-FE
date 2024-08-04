import {
  containerStyle,
  dateStyle,
  rewardContainerStyle,
  imgStyle,
  nameStyle,
  openExpectedDateStyle,
} from "./NQuizReward.css";

export interface NQuizRewardProps {
  imgSrc: string;
  name: string;
  startDate: string;
}

export const NQuizReward = ({ imgSrc, name, startDate }: NQuizRewardProps) => {
  const month = parseInt(startDate.slice(5, 7), 10);
  const day = parseInt(startDate.slice(-2), 10);
  const formattedDate = `${month}월 ${day}일`;
  const openExpectedDate = `${day}일 오전 10시 오픈 예정`;

  return (
    <div css={containerStyle}>
      <span css={dateStyle}>{formattedDate}</span>
      <div css={rewardContainerStyle}>
        <img src={imgSrc} alt="N퀴즈 이벤트 보상 이미지" css={imgStyle} />
        <span css={nameStyle}>{name}</span>
      </div>
      <span css={openExpectedDateStyle}>{openExpectedDate}</span>
    </div>
  );
};
