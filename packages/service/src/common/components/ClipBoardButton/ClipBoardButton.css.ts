import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const clipButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preB18}
  cursor: pointer;
  width: 265px;
  height: 50px;
  padding: 9px 57px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${theme.color.white};
  border: 2px solid ${theme.color.white};
  border: none;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray200};
  }
`;

export const clipButtonSuccessStyle = css`
  ${theme.flex.center}
  cursor: pointer;
  width: 265px;
  height: 50px;
  padding: 9px 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${theme.color.white};
  border: 2px solid ${theme.color.eventBlue};
  overflow: hidden;
`;

export const clipButtonContentStyle = css`
  ${theme.flex.center}
  ${theme.font.preB18}
  color: ${theme.color.black};
  gap: 10px;
`;

export const clipButtonSuccessContentStyle = css`
  ${theme.flex.center}
  ${theme.font.preB18}
  color: ${theme.color.eventBlue};
  gap: 10px;
  rect {
    stroke: ${theme.color.eventBlue};
  }
`;
