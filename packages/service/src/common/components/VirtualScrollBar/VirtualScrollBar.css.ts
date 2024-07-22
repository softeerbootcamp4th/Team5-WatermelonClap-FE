import { css } from "@emotion/react";

export const scrollContainerStyles = css`
  position: fixed;
  top: 25vh;
  right: 16px;
  width: 20px;
  height: 50vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  opacity: 0.5;
`;

export const scrollBoxStyles = css`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 4px;
`;

export const scrollProgressStyles = css`
  width: 4px;
  background-color: #ff00bb;
`;
