import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";
import { eventStatusType } from "../NQuizReward/type";

export const nQuizSectionStyles = css`
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  aspect-ratio: 1.37 / 1;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: ${theme.color.white};
  padding: 40px 48px;

  ${mobile(css`
    padding: 20px 21px;
    border-radius: 10px;
  `)}
`;

export const nQuizSectionHeaderContainerStyles = css`
  width: 100%;
  height: 14%;
`;

export const nQuizSectionBodyContainerStyles = (status: eventStatusType) => css`
  position: relative;
  width: 100%;
  height: 86%;
  padding-top: 10px;
  gap: 40px;

  ${(status === "end" || status === "closed") && "visibility: hidden;"}

  ${mobile(css`
    padding-top: 0;
  `)}
`;
