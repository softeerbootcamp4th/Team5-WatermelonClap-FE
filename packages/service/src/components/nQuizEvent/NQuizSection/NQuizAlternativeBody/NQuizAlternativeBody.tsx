import {
  QUIZ_ALERT_CONTENT_CLOSED,
  QUIZ_ALERT_CONTENT_END,
  QUIZ_ALERT_CONTENT_UPCOMMING,
  QUIZ_ALERT_HINT,
  QUIZ_ALERT_TITLE_FINISHED,
  QUIZ_ALERT_TITLE_UPCOMMING,
} from "../../../../constants/quizContents";
import { EventStatusType } from "../../NQuizReward/type";
import {
  alternativeBodyStyles,
  titleStyle,
  contentStyle,
  hintStyle,
} from "./NQuizAlternativeBody.css";

interface NQuizAlternativeBodyProps {
  status: EventStatusType;
}

export const NQuizAlternativeBody = ({ status }: NQuizAlternativeBodyProps) => {
  let displayText;
  let displayTitle;

  switch (status) {
    case "UPCOMING":
      displayText = QUIZ_ALERT_CONTENT_UPCOMMING;
      displayTitle = QUIZ_ALERT_TITLE_UPCOMMING;
      break;
    case "CLOSED":
      displayText = QUIZ_ALERT_CONTENT_CLOSED;
      displayTitle = QUIZ_ALERT_TITLE_FINISHED;
      break;
    case "END":
      displayText = QUIZ_ALERT_CONTENT_END;
      displayTitle = QUIZ_ALERT_TITLE_FINISHED;
      break;
    default:
      displayText = QUIZ_ALERT_CONTENT_END;
      displayTitle = QUIZ_ALERT_TITLE_FINISHED;
      break;
  }

  return (
    <div css={alternativeBodyStyles(status)}>
      <h1 css={titleStyle}>{displayTitle}</h1>
      <p css={contentStyle}>{displayText}</p>
      {status === "UPCOMING" && <p css={hintStyle}>{QUIZ_ALERT_HINT}</p>}
    </div>
  );
};
