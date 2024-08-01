import { css } from "@emotion/react";

export const container = css`
  position: relative;
  min-width: 600px;
`;

interface IBannerImg {
  index: number;
  currentIndex: number;
}
export const bannerImg = ({ index, currentIndex }: IBannerImg) => css`
  width: 100%;
  opacity: ${index === currentIndex ? 1 : 0};
  transition: opacity 1s ease-in-out;
  position: absolute;
`;

export const bannerContent = css`
  text-align: right;
  position: absolute;
  top: calc(180px - 2vw);
  right: 10%;
`;
