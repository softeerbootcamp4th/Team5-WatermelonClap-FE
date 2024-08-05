import { eventStatusType } from "../../NQuizReward/type";
import { alternativeBodyStyles } from "./NQuizAlternativeBody.css";

interface NQuizAlternativeBodyProps {
  status: eventStatusType;
}

export const NQuizAlternativeBody = ({ status }: NQuizAlternativeBodyProps) => {
  let displayText;

  switch (status) {
    case "upcoming":
      displayText = "퀴즈가 오픈될 예정입니다.";
      break;
    case "closed":
      displayText = "퀴즈가 종료되었습니다.";
      break;
    case "end":
      displayText = "퀴즈 이벤트가 모두 종료되었습니다.";
      break;
    default:
      displayText = "퀴즈가 종료되었습니다.";
      break;
  }

  return <div css={alternativeBodyStyles(status)}>{displayText}</div>;
};
