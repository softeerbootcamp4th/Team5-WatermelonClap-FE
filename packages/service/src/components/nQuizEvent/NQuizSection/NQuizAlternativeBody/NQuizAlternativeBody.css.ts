import { css } from "@emotion/react";
import { EventStatusType } from "../../NQuizReward/type";
import { theme } from "@watermelon-clap/core/src/theme";
import { mobile } from "@service/common/responsive/responsive";

export const alternativeBodyStyles = (status: EventStatusType) => css`
  position: absolute;
  margin: 0 auto;
  text-align: center;
  color: ${theme.color.gray200};
  ${theme.font.preB38}

  ${status === "OPEN" && "visibility: hidden;"};
`;

export const titleStyle = css`
  ${theme.font.preSB}
  font-size: 68px;

  white-space: nowrap;
  ${mobile(css`
    font-size: 32px;
  `)};
`;

export const contentStyle = css`
  ${theme.font.preB}
  font-size: 32px;

  ${mobile(css`
    font-size: 16px;
  `)};
`;

export const hintStyle = css`
  ${theme.font.preB}
  color: ${theme.color.gray300};
  opacity: 0.6;
  padding-top: 20px;
  font-size: 18px;

  ${mobile(css`
    padding-top: 10px;
    font-size: 9px;
  `)};
`;
