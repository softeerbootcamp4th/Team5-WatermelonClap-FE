import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const containerStyle = css`
  width: 100vw;
`;

export const backgroundStyle = css`
  background-image: url("/images/quiz/nQuizBackground.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 1200px;

  ${theme.flex.center}
  ${theme.flex.column}

  padding: 12vw 18vw;

  ${mobile(css`
    min-width: 412px;
    padding: 20vw 18vw;
  `)}
`;

export const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  min-width: 800px;
  margin: 82px 0;
  gap: 16px;

  ${mobile(css`
    min-width: 350px;
    margin: 41px 0;
    gap: 8px;
  `)}
`;
