import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const loadingStyle = css`
  background-image: url("/images/parts/background.svg");
  background-size: cover;
  background-position: center;

  ${theme.flex.center}
  ${theme.flex.column}
  ${theme.gap.gap32}

  height: 100vh;
  color: ${theme.color.white};
`;
