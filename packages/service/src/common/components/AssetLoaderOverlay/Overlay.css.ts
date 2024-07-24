import { css } from "@emotion/react";

export const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
`;

export const loadingBarStyle = (percentage?: number) => css`
  height: 4px;
  background: #fff;
  width: ${percentage}%;
  transition: width 0.3s;
`;
