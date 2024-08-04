import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";
import {
  nQuizHeaderContainerStyles,
  nLogoStyles,
  nQuizLogoStyles,
  nQuizHeaderTextStyles,
} from "./NQuizHeader.css";

interface NQuizHeaderProps {
  date: string;
}

export const NQuizHeader = ({ date }: NQuizHeaderProps) => {
  return (
    <div css={nQuizHeaderContainerStyles}>
      <div css={nQuizLogoStyles}>
        <NLogo css={nLogoStyles} />
        <span css={nQuizHeaderTextStyles}>퀴즈</span>
      </div>
      <span css={nQuizHeaderTextStyles}>{date}</span>
    </div>
  );
};
