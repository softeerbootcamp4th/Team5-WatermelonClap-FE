import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const timer = css`
  border: 1px solid white;
  border-radius: 100px;
  align-items: center;
  width: 100px;
  gap: 8px;
  padding: 4px 10px;
  justify-content: center;
  color: white;
  ${theme.font.preM}
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
`;
