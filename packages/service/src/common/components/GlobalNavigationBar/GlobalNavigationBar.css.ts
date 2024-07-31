import { css } from "@emotion/react";
import { theme, baseStyles } from "@watermelon-clap/core";

export const headerContainerStyles = css`
  padding: 16px 0px;
  gap: 32px;
  ${baseStyles.flex.between}
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: space-around;
`;

export const logoStyles = css`
  color: ${theme.color.white};
  width: 220px;
  flex-grow: 0.2;
`;
