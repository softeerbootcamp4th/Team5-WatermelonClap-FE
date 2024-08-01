import { css } from "@emotion/react";
import { baseStyles, theme } from "@watermelon-clap/core";

export const clipButtonStyle = css`
  ${baseStyles.flex.center}
  ${theme.font.pretend.bold.body18}
  cursor: pointer;
  width: 265px;
  height: 50px;
  padding: 9px 57px;
  font-weight: 500;
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
  ${baseStyles.flex.center}
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
  ${baseStyles.flex.center}
  ${theme.font.pretend.bold.body18}
  color: ${theme.color.black};
  font-weight: 500;
  gap: 10px;
`;

export const clipButtonSuccessContentStyle = css`
  ${baseStyles.flex.center}
  ${theme.font.pretend.bold.body18}
  color: ${theme.color.eventBlue};
  font-weight: 500;
  gap: 10px;
  rect {
    stroke: ${theme.color.eventBlue};
  }
`;
