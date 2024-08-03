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
