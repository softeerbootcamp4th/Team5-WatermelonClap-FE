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
  padding-bottom: 94px;

  ${mobile(css`
    min-width: 412px;
    padding: 20vw 6vw;
    padding-bottom: 47px;
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

export const termTitleStyle = css`
  color: ${theme.color.gray400};
  ${theme.font.preM20};
  line-height: 140%;
  align-self: self-start;
  padding-top: 94px;

  ${mobile(css`
    font-size: 10px;
    padding-top: 47px;
  `)}
`;

export const termListStyle = css`
  color: ${theme.color.gray400};
  ${theme.font.preM20};
  line-height: 140%;
  align-self: self-start;
  margin-left: 2rem;

  ${mobile(css`
    font-size: 10px;
    margin-left: 1rem;
  `)}
`;