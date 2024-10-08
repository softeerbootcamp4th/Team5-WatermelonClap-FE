import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainBg = css`
  background-image: url("/images/common/main-bg.webp");
  background-size: cover;
  padding-bottom: 200px;
  min-height: calc(100vh - 356px);

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile(css`
    padding-bottom: 100px;
    min-height: 100vh;
  `)}
`;

export const pageTitle = css`
  text-align: center;
  ${theme.font.pcpB}
  font-size : calc(26px + 2vw);
  padding-top: 120px;
  color: ${theme.color.white};

  ${mobile(css`
    font-size: calc(20px + 2vw);
    padding: 100px 0 20px 0;
  `)}
`;

export const subtitle = css`
  ${theme.font.preB}
  font-size : calc(16px + 0.5vw);
  text-align: center;

  ${mobile(css`
    font-size: calc(14px);
  `)}
`;

export const sectionTitle = css`
  ${theme.font.pcB28};
  ${mobile(css`
    font-size: 24px;
  `)}
`;

export const btn = css`
  margin: 0 auto;
  ${theme.font.preB}
  font-size : 24px;

  ${mobile(css`
    padding: 10px 20px;
    width: 200px;
  `)}
`;

export const shareLinkBox = css`
  background-color: ${theme.color.gray100};
  color: ${theme.color.gray500};
  ${theme.font.preM14}
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px 18px;
  width: 500px;

  ${mobile(css`
    width: 100%;
    padding: 10px;
  `)}
`;

export const expectationInput = css`
  padding: 18px;
  height: 100px;
  resize: none;
  width: 600px;
  border-radius: 14px;
  background-color: ${theme.color.gray100};
  outline: none;

  ${mobile(css`
    width: 100%;
  `)}
`;

export const applyBtn = (isExpectationNull: boolean) => css`
  padding: 50px 50px;
  height: 100px;
  background-color: ${isExpectationNull
    ? theme.color.gray400
    : theme.color.eventBlue};
  color: ${isExpectationNull ? theme.color.gray300 : theme.color.white};
  cursor: ${isExpectationNull ? "default" : "pointer"};

  &:active {
    background-color: ${isExpectationNull && theme.color.gray400};
  }

  width: fit-content;
`;
