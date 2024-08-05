import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import {
  nQuizHeaderContainerStyles,
  nLogoStyles,
  nQuizLogoStyles,
  nQuizHeaderTextStyles,
} from "./NQuizHeader.css";
import { eventStatusType } from "../../NQuizReward/type";

interface NQuizHeaderProps {
  date: string;
  status: eventStatusType;
}

export const NQuizHeader = ({ date, status }: NQuizHeaderProps) => {
  return (
    <div css={nQuizHeaderContainerStyles}>
      <div css={nQuizLogoStyles}>
        <NLogo css={nLogoStyles} />
        <span css={nQuizHeaderTextStyles}>퀴즈</span>
      </div>
      <span css={nQuizHeaderTextStyles}>{status === "open" && date}</span>
    </div>
  );
};
