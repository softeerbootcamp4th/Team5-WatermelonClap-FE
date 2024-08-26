import {
  NQuizSection,
  NQuizTitle,
  NQuizReward,
} from "@service/components/nQuizEvent";
import { nQuizEventTermTitle, nQuizEventTerms } from "@service/constants/terms";
import { useSuspenseQuery } from "@tanstack/react-query";
import { apiGetOrderEvent } from "@service/apis/orderEvent";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import * as style from "./NQuizEvent.css";
import { Helmet } from "react-helmet";
import { formatEventDate } from "@service/common/utils";

export const NQuizEvent = () => {
  const { data: quizList } = useSuspenseQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
    staleTime: 0,
  });

  const openedQuiz = quizList.find(
    (quiz) => quiz.status === "OPEN",
  ) as IOrderEvent;

  const closedQuiz = quizList.find(
    (quiz) => quiz.status === "CLOSED",
  ) as IOrderEvent;

  const upcomingQuiz = quizList.find(
    (quiz) => quiz.status === "UPCOMING",
  ) as IOrderEvent;

  const startDate = quizList[0].startDate;
  const endDate = quizList[quizList.length - 1].endDate;

  const eventData = formatEventDate(startDate, endDate);

  return (
    <>
      <Helmet>
        <title>
          선착순 퀴즈 이벤트 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트
          스포츠카
        </title>
        <meta name="description" content="선착순 퀴즈 이벤트 페이지" />
      </Helmet>
      <div css={style.backgroundStyle}>
        <NQuizTitle eventDate={eventData} />

        <div css={style.rewardWrapStyle}>
          {quizList.map((quiz, index) => (
            <NQuizReward
              key={index}
              imgSrc={quiz.reward.imgSrc}
              name={quiz.reward.name}
              startDate={quiz.startDate}
              status={quiz.status}
            />
          ))}
        </div>

        {openedQuiz && <NQuizSection openedQuiz={openedQuiz} />}

        {!openedQuiz && closedQuiz && <NQuizSection openedQuiz={closedQuiz} />}

        {!openedQuiz && !closedQuiz && upcomingQuiz && (
          <NQuizSection openedQuiz={upcomingQuiz} />
        )}

        {!openedQuiz && !closedQuiz && !upcomingQuiz && (
          <NQuizSection openedQuiz={quizList[0]} />
        )}

        <span css={style.termTitleStyle}>{nQuizEventTermTitle}</span>
        <ul css={style.termListStyle}>
          {nQuizEventTerms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
