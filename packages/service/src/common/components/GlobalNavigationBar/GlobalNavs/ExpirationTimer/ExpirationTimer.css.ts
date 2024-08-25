import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  ${theme.flex.center}
  gap : 10px;
`;

export const timer = css`
  border: 1px solid white;
  border-radius: 100px;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  justify-content: center;
  color: white;
  ${theme.font.preM}
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  min-width: 170px;
`;
