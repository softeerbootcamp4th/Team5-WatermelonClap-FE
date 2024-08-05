import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const staticCardStyles = (position: "upper" | "lower") => css`
  position: relative;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  display: flex;
  ${position === "upper"
    ? "align-items: flex-end;"
    : "align-items: flex-start; background-color: #000000;"}
  border-radius: ${position === "upper" ? "6px 6px 0 0;" : "0 0 6px 6px;"};
`;

export const textStyles = (translateY?: string, title?: string) => css`
  font-family: "PyeongChang Peace";
  font-size: calc(20px + 3vw);
  -webkit-text-stroke-width: 2px;
  font-weight: normal;
  transform: translateY(${translateY});
  color: ${title === "days" ? theme.color.eventBlue : theme.color.white};

  ${mobile(css`
    font-size: 30px;
  `)}
`;

export const animatedCardStyles = css`
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  top: 0;
  align-items: flex-end;
  transform-origin: 50% 100%;
  background-color: #000000;
  border-radius: 6px 6px 0 0;

  ${mobile(css``)}
`;

export const animatedCardBottomStyles = css`
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  top: 50%;
  align-items: flex-start;
  transform-origin: 50% 0%;
  background-color: #000000;

  ${mobile(css`
    font-size: 10px;
  `)}
`;

export const flipContainerStyles = css`
  box-shadow: 0px 10px 10px -10px black;
  border-radius: 6px;
`;

export const flipBoxStyles = css`
  display: block;
  position: relative;
  width: 100%;
  background-color: #000000;
  border-radius: 6px;
  perspective: 300px;
  perspective-origin: 50% 50%;

  ${mobile(css`
    width: 40px;
  `)}
`;

export const rendererWrap1 = css`
  background-color: ${theme.color.black};
  border-radius: 50px;
  margin: 0 auto;
  box-shadow: 0 0 220px 10px ${theme.color.black};
  width: 70%;
`;

export const rendererWrap2 = css`
  display: flex;
  align-items: center;
  gap: calc(10px + 2vw);
  justify-content: center;
  ${mobile(css`
    gap: 0.3rem;
  `)};
`;
