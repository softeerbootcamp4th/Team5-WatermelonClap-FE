import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { SHARE_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainBg = css`
  background-image: url("/images/common/main-bg.webp");
  background-size: cover;
  padding-bottom: 200px;

  ${mobile(css`
    min-height: calc(100vh - 120px);
    padding-bottom: 120px;
  `)}
`;

export const pageTitle = css`
  text-align: center;
  ${theme.font.pcpB}
  font-size : calc(24px + 2vw);
  padding: 100px;
  color: ${theme.color.white};

  ${mobile(css`
    font-size: calc(20px + 2vw);
    padding: 100px 0 50px 0;
  `)}
`;

export const btn = css`
  margin: 0 auto;
  ${mobile(css`
    width: fit-content;
    padding: 10px 20px;
  `)}
`;

export const customCardWrap = css`
  ${theme.flex.center}
  width: 700px;
  aspect-ratio: 16 / 9;
  margin-top: 44px;

  ${mobile(css`
    width: 350px;
  `)}
`;

export const customCardContainer = css`
  ${theme.flex.center}
`;

export const flexContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6%;
  flex-wrap: wrap;

  ${mobile(
    css`
      flex-direction: column;
      gap: 40px;
    `,
    SHARE_BREAKPOINT,
  )}
`;
