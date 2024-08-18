import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";
import { EventStatusType } from "../NQuizReward/type";

export const nQuizSectionStyles = (status: EventStatusType) => css`
  position: relative;
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  aspect-ratio: 1.37 / 1;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: ${theme.color.white};
  padding: 40px 48px;

  ${status !== "OPEN" && "opacity: 0.3;"}

  ${mobile(css`
    padding: 20px 21px;
    border-radius: 10px;
  `)}
`;

export const nQuizSectionHeaderContainerStyles = css`
  width: 100%;
  height: 14%;
`;

export const nQuizSectionBodyContainerStyles = (status: EventStatusType) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 86%;
  padding-top: 10px;

  ${(status === "END" || status === "UPCOMING") && "visibility: hidden;"}

  ${mobile(css`
    padding-top: 0;
  `)}
`;
