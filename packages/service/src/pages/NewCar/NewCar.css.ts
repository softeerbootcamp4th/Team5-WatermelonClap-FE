import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const bg = css`
  background-color: ${theme.color.black};
`;

export const mainImg = css`
  width: 100%;
  vertical-align: bottom;
  height: 100vh;
  object-fit: cover;

  ${mobile(css`
    height: auto;
  `)}
`;
