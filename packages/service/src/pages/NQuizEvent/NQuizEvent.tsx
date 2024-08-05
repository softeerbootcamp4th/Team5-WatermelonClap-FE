import {
  NQuizSection,
  NQuizTitle,
  NQuizReward,
  NQuizRewardProps,
} from "@service/components/nQuizEvent";
import {
  containerStyle,
  backgroundStyle,
  gridStyle,
  termTitleStyle,
  termListStyle,
} from "./NQuizEvent.css";
import { nQuizEventTermTitle, nQuizEventTerms } from "@service/constants/terms";

const rewardList: NQuizRewardProps[] = [
  {
    imgSrc: "/images/quiz/reward1.svg",
    name: "스타벅스 아이스 아메리카노 T",
    startDate: "2024-08-01",
    status: "closed",
  },
  {
    imgSrc: "/images/quiz/reward2.svg",
    name: "배스킨라빈스 더블주니어",
    startDate: "2024-08-02",
    status: "closed",
  },
  {
    imgSrc: "/images/quiz/reward3.svg",
    name: "네이버페이 5천원 쿠폰",
    startDate: "2024-08-03",
    status: "closed",
  },
  {
    imgSrc: "/images/quiz/reward4.svg",
    name: "배달의민족 5천원 쿠폰",
    startDate: "2024-08-04",
    status: "open",
  },
  {
    imgSrc: "/images/quiz/reward5.svg",
    name: "GS25 편의점 5천원 쿠폰",
    startDate: "2024-08-05",
    status: "upcoming",
  },
];

export const NQuizEvent = () => {
  return (
    <div css={containerStyle}>
      <div css={backgroundStyle}>
        <NQuizTitle />

        <div css={gridStyle}>
          {rewardList.map((reward, index) => (
            <NQuizReward
              key={index}
              imgSrc={reward.imgSrc}
              name={reward.name}
              startDate={reward.startDate}
              status={reward.status}
            />
          ))}
        </div>

        <NQuizSection
          imgSrc="/images/quiz/quiz1.svg"
          startDate="8월 4일"
          status="open"
        />

        <span css={termTitleStyle}>{nQuizEventTermTitle}</span>
        <ul css={termListStyle}>
          {nQuizEventTerms.map((term) => (
            <li>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
