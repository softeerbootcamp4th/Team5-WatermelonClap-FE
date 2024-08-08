import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

const SCROLL_SPEED = "3000vh";

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
  z-index: 999;
`;

export const imgWrap = css`
  display: flex;
  gap: calc(10px + 30vw);
`;

export const m_imgWrap = css`
  position: relative;
  ${theme.flex.column}
  gap : 40px;
`;

export const m_infoImg = (num: number) => css`
  z-index: 999;
  width: 80%;
  align-self: ${num === 0 ? "start" : "end"};

  margin: 20px;
`;

export const bgCirlce1 = css`
  position: absolute;
  top: 0px;
  left: -200px;
  width: calc(300px + 36vw);
`;
export const bgCirlce2 = css`
  position: absolute;
  top: -200px;
  right: -250px;
  width: calc(400px + 40vw);
`;
