import { css } from "@emotion/react";
import { baseStyles, theme } from "@watermelon-clap/core";

export const eventCard = (isMainEvent: boolean) => css`
  padding: 72px;
  background: ${isMainEvent ? theme.color.mainEventCardBg : theme.color.white};
  width: 552px;
  height: 1036px;
  border-radius: 20px;
  text-align: center;
  white-space: pre-wrap;
  ${baseStyles.flex.column}
  gap : 38px;
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.5);

  .title {
    ${theme.font.pyeongChangPeace.bold.title};
    ${baseStyles.margin.mg12}
    font-size: 40px;
  }

  .event-number {
    border-radius: 50%;
    background-color: ${theme.color.black};
    width: 40px;
    height: 40px;
    color: ${theme.color.white};
    margin: 0 auto;
    ${baseStyles.flex.center}
    ${theme.font.pretend.bold.body24}
  }
`;

export const joinButton = css`
  ${theme.font.pretend.bold.titleB38};
  width: 100%;
  height: 120px;
  border-radius: 18px;
`;
