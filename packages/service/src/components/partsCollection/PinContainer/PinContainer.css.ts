import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
  ${theme.flex.center}
`;

export const pivotContainer = css`
  position: absolute;
  width: 700px;
  aspect-ratio: 16 / 9;
  z-index: 1;
  padding: 10%;

  ${mobile(css`
    width: 350px;
  `)}
`;

export const perspectiveContainer = css`
  position: absolute;
  perspective: 1000px;
  transform: rotateX(70deg);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const innerContainer = css`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: start;
  align-items: start;
  transition: all 0.7s;
`;

export const pinCommonImg = css`
  width: 180px;
  margin-bottom: -10px;

  ${mobile(css`
    width: 100px;
    margin-bottom: -5px;
  `)}
`;

export const pinCommonCustom = css`
  height: 240px;
  top: -60px;
  left: 115px;

  ${mobile(css`
    height: 122px;
    top: -40px;
    left: 52px;
  `)}
`;

export const pinBgImg = css`
  width: 120px;
  margin-bottom: 10px;

  ${mobile(css`
    width: 60px;
    margin-bottom: 5px;
  `)}
`;

export const pinBgCustom = css`
  height: 200px;
  top: -90px;
  left: 320px;

  ${mobile(css`
    height: 94px;
    top: -50px;
    left: 162px;
  `)}
`;

export const pinWheelImg = css`
  width: 120px;
  margin-bottom: 3px;

  ${mobile(css`
    width: 60px;
    margin-bottom: 5px;
  `)}
`;

export const pinWheelCustom = css`
  height: 182px;
  top: 10px;
  left: 229px;

  ${mobile(css`
    height: 100px;
    top: -10px;
    left: 114px;
  `)}
`;

export const pinSpoilerImg = css`
  width: 130px;
  margin-bottom: 8px;

  ${mobile(css`
    width: 70px;
    margin-bottom: 3px;
  `)}
`;

export const pinSpoilerCustom = css`
  height: 174px;
  top: -14px;
  left: 410px;

  ${mobile(css`
    height: 89px;
    top: -18px;
    left: 218px;
  `)}
`;
