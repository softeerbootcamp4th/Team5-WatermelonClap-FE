import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const eventCard = (isMainEvent: boolean) => css`
  padding: 72px;
  background: ${isMainEvent ? theme.color.mainEventCardBg : theme.color.white};
  width: 452px;
  border-radius: 20px;
  text-align: center;
  white-space: pre-wrap;
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.5);

  ${mobile(css`
    padding: 24px;
    width: fit-content;
  `)}
`;
export const eventNumber = css`
  border-radius: 50%;
  background-color: ${theme.color.black};
  width: 34px;
  height: 34px;
  color: ${theme.color.white};
  margin: 0 auto;
  ${theme.flex.center}
  ${theme.font.preB24}

  ${mobile(css`
    width: 28px;
    height: 28px;
    font-size: 18px;
  `)}
`;

export const eventTitle = css`
  ${theme.font.pcpB};
  ${theme.margin.mg12}
  font-size: 30px;

  ${mobile(css`
    font-size: 16px;
  `)}
`;

export const joinButton = css`
  ${theme.font.preB};
  font-size: 24px;
  width: 80%;
  height: 70px;
  border-radius: 18px;
`;

export const eventType = css`
  ${theme.font.preB};
  font-size: 26px;
  margin-top: 28px;
  margin-bottom: 12px;

  ${mobile(css`
    font-size: 24px;
  `)}
`;
export const subTitle = css`
  ${theme.font.preB};
  font-size: 20px;
  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const desc = css`
  ${theme.font.preM}
  font-size : 18px;
  margin: 20px 0;

  ${mobile(css`
    font-size: 0.9rem;
  `)}
`;
