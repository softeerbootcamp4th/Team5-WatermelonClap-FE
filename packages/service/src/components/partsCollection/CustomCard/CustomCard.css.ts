import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

export const card = css`
  width: 700px;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  flex-shrink: 0;

  ${mobile(css`
    width: 350px;
    margin: 0 auto;
  `)}
`;

export const bgImg = css`
  position: absolute;
  width: 700px;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 20px;
  height: 100%;

  ${mobile(css`
    width: 350px;
  `)}
`;

export const carImg = css`
  width: 700px;
  z-index: 2;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mobile(css`
    width: 350px;
  `)}
`;

export const colorImg = css`
  width: 700px;
  z-index: 2;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mobile(css`
    width: 350px;
  `)}
`;

export const wheelImg = css`
  z-index: 3;

  position: absolute;
  width: 245px;
  bottom: 95px;
  left: 305px;

  ${mobile(css`
    bottom: 47px;
    left: 153px;
    width: 123px;
  `)}
`;

export const spoilerImg = css`
  z-index: 3;
  position: absolute;
  width: 50px;
  top: 144px;
  right: 118px;

  ${mobile(css`
    width: 26.7px;
    top: 72px;
    right: 57.1px;
  `)}
`;
