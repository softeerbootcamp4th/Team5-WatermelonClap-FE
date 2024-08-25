import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import * as style from "./NQuizHeader.css";
import { EventStatusType } from "../../NQuizReward/type";

interface NQuizHeaderProps {
  date: string;
  status: EventStatusType;
}

export const NQuizHeader = ({ date, status }: NQuizHeaderProps) => {
  return (
    <div css={style.nQuizHeaderContainerStyles}>
      <div css={style.nQuizLogoStyles}>
        <NLogo css={style.nLogoStyles} />
        <span css={style.nQuizHeaderTextStyles}>퀴즈</span>
      </div>
      <span css={style.nQuizHeaderTextStyles}>{status === "OPEN" && date}</span>
    </div>
  );
};
