import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const Container = css`
  color: ${theme.color.white};
  ${theme.font.preB}
  ${theme.flex.column}
  text-align: center;
  width: fit-content;
`;

export const img = (winner?: boolean) => css`
  margin-bottom: 10px;
  width: ${winner ? "300px" : "180px"};

  ${mobile(css`
    width: ${winner ? "200px" : "140px"};
    margin-bottom: 20px;
  `)}
`;

export const rank = css`
  font-size: 16px;
  margin-bottom: 14px;
`;

export const name = css`
  font-size: 22px;
  width: 180px;
`;
