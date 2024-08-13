import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const headerContainerStyles = css`
  padding: 16px 10%;
  ${theme.flex.between}
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 800;
`;

export const logoStyles = css`
  color: ${theme.color.white};
  cursor: pointer;
  flex-shrink: 0;
  z-index: 2;
`;

export const topStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
