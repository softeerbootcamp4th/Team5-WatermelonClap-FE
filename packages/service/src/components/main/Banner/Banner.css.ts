import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  position: relative;

  ${mobile(css`
    padding-top: 54px;
  `)}
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
  top: calc(40px + 10vw);
  right: 10%;

  ${mobile(css`
    top: 70px;
    right: 20px;
  `)}
`;

export const title = css`
  ${theme.font.preSB86}
  color: ${theme.color.white};
  font-size: calc(30px + 2.4vw);

  ${mobile(css`
    font-size: 30px;
  `)}
`;
export const subTitle = css`
  ${theme.font.preB38};
  color: ${theme.color.white};
  font-size: calc(12px + 1.5vw);

  ${mobile(css`
    font-size: 20px;
    ${theme.flex.column}
    margin-top : 10px;
    align-items: end;
  `)}
`;
