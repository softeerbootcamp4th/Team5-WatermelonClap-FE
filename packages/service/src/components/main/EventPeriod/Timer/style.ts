import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const staticCardStyles = (position: "upper" | "lower") => css`
  position: relative;
  justify-content: center;
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  ${position === "upper"
    ? "align-items: flex-end;"
    : "align-items: flex-start; background-color: #000000;"}
  border-radius: ${position === "upper" ? "6px 6px 0 0;" : "0 0 6px 6px;"}
`;

export const textStyles = (translateY?: string, title?: string) => css`
  font-family: "PyeongChang Peace";
  font-size: 102px;
  -webkit-text-stroke-width: 2px;
  font-weight: normal;
  transform: translateY(${translateY});
  color: ${title === "days" ? theme.color.eventBlue : theme.color.white};
`;

export const animatedCardStyles = css`
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  top: 0;
  align-items: flex-end;
  transform-origin: 50% 100%;
  background-color: #000000;
  border-radius: 6px 6px 0 0;
`;

export const animatedCardBottomStyles = css`
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  top: 50%;
  align-items: flex-start;
  transform-origin: 50% 0%;
  background-color: #000000;
`;

export const flipContainerStyles = css`
  box-shadow: 0px 10px 10px -10px black;
  border-radius: 6px;
`;

export const flipBoxStyles = css`
  display: block;
  position: relative;
  width: 140px;
  height: 120px;
  background-color: #000000;
  border-radius: 6px;
  perspective: 300px;
  perspective-origin: 50% 50%;
`;
