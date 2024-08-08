import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const bg = css`
  background-image: url("images/common/main-bg.svg");
  background-size: cover;
  padding-top: 54px;
  padding-bottom: 200px;
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

  &:hover {
    transform: scale(1.02);
    background-color: ${theme.color.eventSkyblue};
  }
`;
