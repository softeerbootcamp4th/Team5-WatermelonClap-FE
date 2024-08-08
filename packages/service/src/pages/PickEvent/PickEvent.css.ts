import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const bg = css`
  background-image: url("images/common/main-bg.svg");
  background-size: cover;
  padding-top: 54px;
  padding-bottom: 200px;
  ${mobile(css`
    padding-bottom: 50px;
  `)}
`;

export const textWrap = css`
  ${theme.flex.column}
  gap : 24px;
  color: white;
  text-align: center;

  h1 {
    ${theme.font.pcpB82}
    margin-bottom : 12px;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
  }

  span {
    ${theme.font.pcpL32}
    word-spacing : 2px;
    letter-spacing: 2px;
    -webkit-text-stroke: 2px;
  }

  pre {
    ${theme.font.preM20}
    line-height: 24px;
  }

  ${mobile(css`
    h1 {
      font-size: 30px;
    }

    span {
      font-size: 20px;
    }

    pre {
      font-size: 14px;
      white-space: pre-wrap;
      padding: 0 40px;
    }
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

export const btn = css`
  padding: 30px 110px;
  border-radius: 20px;
  background-color: ${theme.color.eventBlue};
  color: ${theme.color.white};
  ${theme.font.preB38}
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  margin: 0 auto;
  display: block;

  &:hover {
    transform: scale(1.02);
    background-color: ${theme.color.eventSkyblue};
  }

  ${mobile(css`
    font-size: 14px;
    padding: 12px 30px;
  `)}
`;

export const termWrap = css`
  padding: 100px;
  padding-bottom: 0px;

  ${mobile(css`
    padding: 20px;
  `)}
`;
