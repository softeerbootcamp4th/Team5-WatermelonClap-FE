import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  color: ${theme.color.white};
  text-align: center;
  padding-top: 70px;
  ${mobile(css`
    padding-top: 30px;
  `)}
`;

export const period = css`
  ${theme.font.pcpL32};
  -webkit-text-stroke-width: 1px;
  font-size: calc(20px + 2vw);
  color: ${theme.color.eventSkyblue};
  margin-top: 10px;

  ${mobile(css`
    font-size: 20px;
  `)}
`;

export const title = css`
  ${theme.font.pcpB};
  font-size: calc(40px + 3vw);

  ${mobile(css`
    font-size: 26px;
  `)}
`;
