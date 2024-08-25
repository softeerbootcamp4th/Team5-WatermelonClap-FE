import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainBg = css`
  background-image: url("/images/common/main-bg.webp");
  background-size: cover;
  padding: 0 5%;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 356px);

  ${mobile(css`
    min-height: 100vh;
  `)}
`;

export const pageTitle = css`
  text-align: center;
  ${theme.font.pcpB}
  font-size : calc(40px + 1vw);
  padding: 100px 0 60px 0;
  color: ${theme.color.white};

  ${mobile(css`
    font-size: calc(20px + 2vw);
    padding: 100px 0 50px 0;
  `)}
`;

export const partsContainer = css`
  ${theme.flex.center}
  flex-wrap: wrap;
  gap: 100px;

  ${mobile(css`
    ${theme.flex.column}
    gap: 40px;
  `)};
`;

export const customCardContainer = css`
  ${theme.flex.center}
  width: 700px;
  aspect-ratio: 16 / 9;
  margin-top: 44px;

  ${mobile(css`
    width: 350px;
  `)}
`;

export const moveButton = css`
  width: 300px;
  height: 60px;

  ${mobile(css`
    width: 200px;
    height: 40px;
  `)}
`;
