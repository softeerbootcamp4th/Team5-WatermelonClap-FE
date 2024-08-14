import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const errorContainerStyle = css`
  background-image: url("/images/parts/background.svg");
  background-size: cover;
  background-position: center;

  ${theme.flex.center}
  ${theme.flex.column}
  ${theme.gap.gap32}

  height: 100vh;
`;

export const errorMessageStyle = css`
  ${theme.font.preB24}
  color: ${theme.color.white};
`;
