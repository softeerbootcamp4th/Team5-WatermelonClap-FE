import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const pinContainer = (opacity: number) => css`
  position: absolute;
  display: flex;
  justify-content: center;

  width: 200px;
  height: fit-content;

  visibility: ${opacity === 1 ? "visible" : "hidden"};
  opacity: ${opacity};
  z-index: 60;

  transition: opacity ${opacity === 1 ? "1.5s" : "0.5s"} ease;

  ${mobile(css`
    width: 100px;
    height: 200px;
  `)}
`;

export const pinItemContainer = css`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 10;
  top: 0;

  filter: drop-shadow(0 0 2px #fff);
  border-radius: 10px;

  :hover {
    filter: drop-shadow(0 0 3px #fff);
  }
`;

export const pinItem = css`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  padding: 0.3rem 1rem;
  cursor: pointer;
`;

export const pinItemContent = css`
  z-index: 20;
  color: ${theme.color.white};
  ${theme.font.preB16}
  padding: 2px 4px;

  ${mobile(css`
    font-size: 12px;
    padding: 1px 2px;
  `)}
`;

export const pinItemBottom = css`
  position: absolute;
  bottom: 0;
  left: 1.125rem;
  height: 2px;
  width: calc(100% - 2.25rem);

  background: linear-gradient(
    to right,
    rgba(52, 211, 153, 0) 0%,
    rgba(52, 211, 153, 0.9) 50%,
    rgba(52, 211, 153, 0) 100%
  );

  transition: opacity 0.5s;
  opacity: 1;
  z-index: 22;
`;

export const pinLineContainer = css`
  position: absolute;
  width: 100px;
  height: 100%;
`;

export const pinLine = css`
  position: relative;
  background: linear-gradient(to bottom, transparent, ${theme.color.white});
  transform: translateY(14px);
  width: 1px;
  height: 100%;
  z-index: 9;
  left: 50px;

  filter: blur(0.5px);
`;
