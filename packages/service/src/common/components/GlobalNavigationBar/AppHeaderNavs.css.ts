import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const navsContainerStyles = css`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const nLogoStyles = css`
  width: 32px;
  height: 14px;
`;

export const gapStyles = css`
  max-width: 120px;
  min-width: 30px;
`;

export const linkStyles = css`
  ${theme.color.white}
  ${theme.font.pretend.bold.body16}
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;
