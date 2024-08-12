import { NQuizHeader } from "./NQuizHeader";
import { NQuizInput } from "./NQuizInput";
import { NQuizAlternativeBody } from "./NQuizAlternativeBody";
import {
  nQuizSectionStyles,
  nQuizSectionHeaderContainerStyles,
  nQuizSectionBodyContainerStyles,
} from "./NQuizSection.css";

import { EventStatusType } from "../NQuizReward/type";

export interface NQuizSectionProps {
  imgSrc: string;
  startDate: string;
  status: EventStatusType;
}

export const NQuizSection = ({
  imgSrc,
  startDate,
  status,
}: NQuizSectionProps) => {
  return (
    <section css={nQuizSectionStyles}>
      <div css={nQuizSectionHeaderContainerStyles}>
        <NQuizHeader date={startDate} status={status} />
      </div>

      <div css={nQuizSectionBodyContainerStyles(status)}>
        <img src={imgSrc} alt="N뽑기 이벤트 퀴즈 이미지" width="100%" />
        <NQuizInput />
      </div>

      <NQuizAlternativeBody status={status} />
    </section>
  );
};
