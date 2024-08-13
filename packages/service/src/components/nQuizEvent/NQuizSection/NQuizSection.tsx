import { NQuizHeader } from "./NQuizHeader";
import { NQuizInput } from "./NQuizInput";
import { NQuizAlternativeBody } from "./NQuizAlternativeBody";
import { IOrderEvent } from "@service/apis/orderEvent/type";
import {
  nQuizSectionStyles,
  nQuizSectionHeaderContainerStyles,
  nQuizSectionBodyContainerStyles,
} from "./NQuizSection.css";

interface NQuizSectionProps {
  openedQuiz: IOrderEvent;
}

export const NQuizSection = ({ openedQuiz }: NQuizSectionProps) => {
  return (
    <section css={nQuizSectionStyles}>
      <div css={nQuizSectionHeaderContainerStyles}>
        <NQuizHeader
          date={openedQuiz.startDate.slice(0, 10)}
          status={openedQuiz.status}
        />
      </div>

      <div css={nQuizSectionBodyContainerStyles(openedQuiz.status)}>
        <img
          src={openedQuiz.quiz?.imgSrc}
          alt="N뽑기 이벤트 퀴즈 이미지"
          width="80%"
        />
        <NQuizInput openedQuiz={openedQuiz} />
      </div>

      <NQuizAlternativeBody status={openedQuiz.status} />
    </section>
  );
};
