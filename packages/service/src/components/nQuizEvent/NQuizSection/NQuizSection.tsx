import { NQuizHeader } from "./NQuizHeader";
import { NQuizInput } from "./NQuizInput";
import { NQuizAlternativeBody } from "./NQuizAlternativeBody";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import {
  nQuizSectionStyles,
  nQuizSectionHeaderContainerStyles,
  nQuizSectionBodyContainerStyles,
} from "./NQuizSection.css";
import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

interface NQuizSectionProps {
  openedQuiz: IOrderEvent;
}

export const NQuizSection = ({ openedQuiz }: NQuizSectionProps) => {
  return (
    <div
      css={css`
        ${theme.flex.center}
        width: 100%;
        overflow: hidden;
      `}
    >
      <section css={nQuizSectionStyles(openedQuiz.status)}>
        <div css={nQuizSectionHeaderContainerStyles}>
          <NQuizHeader
            date={openedQuiz.startDate.slice(0, 10)}
            status={openedQuiz.status}
          />
        </div>

        <div css={nQuizSectionBodyContainerStyles(openedQuiz.status)}>
          <img
            css={css`
              overflow: hidden;
            `}
            src={openedQuiz.quiz?.imgSrc}
            alt="N뽑기 이벤트 퀴즈 이미지"
            width="80%"
          />
          <NQuizInput openedQuiz={openedQuiz} />
        </div>
      </section>
      <NQuizAlternativeBody status={openedQuiz.status} />
    </div>
  );
};
