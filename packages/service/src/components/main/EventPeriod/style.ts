import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const container = css`
  color: ${theme.color.white};
  text-align: center;
  margin: 70px;
`;

export const period = css`
  ${theme.font.pcpL32};
  -webkit-text-stroke-width: 1px;
  font-size: 40px;
  color: ${theme.color.eventSkyblue};
  margin-top: 10px;
`;

export const timer = css`
  ${theme.font.pcpL};
  font-size: 112px;
  -webkit-text-stroke-width: 2px;
  margin: 24px;
  word-spacing: 8px;
`;
