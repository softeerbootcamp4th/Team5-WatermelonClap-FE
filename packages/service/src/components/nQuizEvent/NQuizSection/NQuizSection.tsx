import { nQuizSectionStyles } from "./NQuizSection.css";
import { NQuizHeader } from "../NQuizHeader";
import { NQuizInput } from "../NQuizInput";
import {
  nQuizSectionHeaderContainerStyles,
  nQuizSectionBodyContainerStyles,
} from "./NQuizSection.css";

export interface NQuizSectionProps {
  imgSrc: string;
  startDate: string;
}

export const NQuizSection = ({ imgSrc, startDate }: NQuizSectionProps) => {
  return (
    <section css={nQuizSectionStyles}>
      <div css={nQuizSectionHeaderContainerStyles}>
        <NQuizHeader date={startDate} />
      </div>

      <div css={nQuizSectionBodyContainerStyles}>
        <img src={imgSrc} alt="N뽑기 이벤트 퀴즈 이미지" width="100%" />
        <NQuizInput />
      </div>
    </section>
  );
};
