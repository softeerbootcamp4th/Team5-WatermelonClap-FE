import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const navsContainerStyles = css`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  justify-content: end;
  gap: calc(10px + 5%);
`;

export const nLogoStyles = css`
  width: 32px;
  height: 14px;
`;

export const linkStyles = css`
  color: ${theme.color.white};
  ${theme.font.preB16}
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
  color: ${theme.color.gray300};

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const activeLinkStyles = css`
  color: white;
  font-weight: bold;
`;
