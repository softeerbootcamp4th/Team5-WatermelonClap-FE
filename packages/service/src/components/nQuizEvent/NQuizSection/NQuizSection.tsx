import { NQuizHeader } from "./NQuizHeader";
import { NQuizInput } from "./NQuizInput";
import { NQuizAlternativeBody } from "./NQuizAlternativeBody";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import {
  nQuizSectionStyles,
  nQuizSectionHeaderContainerStyles,
  nQuizSectionBodyContainerStyles,
  nQuizContainerStyle,
  nQuizImageStyle,
} from "./NQuizSection.css";

interface NQuizSectionProps {
  openedQuiz: IOrderEvent;
}

export const NQuizSection = ({ openedQuiz }: NQuizSectionProps) => {
  return (
    <div css={nQuizContainerStyle}>
      <section css={nQuizSectionStyles(openedQuiz.status)}>
        <div css={nQuizSectionHeaderContainerStyles}>
          <NQuizHeader
            date={openedQuiz.startDate.slice(0, 10)}
            status={openedQuiz.status}
          />
        </div>

        <div css={nQuizSectionBodyContainerStyles(openedQuiz.status)}>
          <img
            css={nQuizImageStyle}
            src={openedQuiz.quiz?.imgSrc}
            alt="N뽑기 이벤트 퀴즈 이미지"
          />
          <NQuizInput openedQuiz={openedQuiz} />
        </div>
      </section>
      <NQuizAlternativeBody status={openedQuiz.status} />
    </div>
  );
};
