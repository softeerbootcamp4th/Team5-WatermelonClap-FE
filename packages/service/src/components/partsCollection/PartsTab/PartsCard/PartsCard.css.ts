import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const container = css`
  ${theme.flex.column}
  width : 48%;
  cursor: pointer;

  &:last-child {
  }
`;

export const card = css`
  border-radius: 20px;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  background-color: ${theme.color.white};
  ${theme.flex.center};
  > img {
    width: 100%;
  }
`;

export const name = css`
  ${theme.font.preB24};
  color: ${theme.color.white};
  margin-top: 20px;
`;
