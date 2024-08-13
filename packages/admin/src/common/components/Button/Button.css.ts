import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const buttonStyle = css`
  ${theme.flex.center}
  ${theme.font.preM14}
  background: ${theme.color.gray500};
  color: ${theme.color.white};
  padding: 10px 12px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray600};
    color: ${theme.color.gray300};
  }
  &:disabled {
    background: ${theme.color.gray500};
    pointer-events: none;
  }
`;
