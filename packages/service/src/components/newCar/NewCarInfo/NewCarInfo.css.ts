import { css } from "@emotion/react";

const SCROLL_SPEED = "1000vh";

export const scrollContainer = css`
  height: ${SCROLL_SPEED};
`;

export const stickyWrap = css`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const infoImg = css`
  height: calc(300px + 10vw);
`;

export const imgWrap = css`
  display: flex;
  gap: calc(10px + 22vw);
`;
