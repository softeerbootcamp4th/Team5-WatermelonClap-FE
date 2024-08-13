import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const eventCard = (isMainEvent: boolean) => css`
  padding: 72px;
  background: ${isMainEvent ? theme.color.mainEventCardBg : theme.color.white};
  width: 552px;
  border-radius: 20px;
  text-align: center;
  white-space: pre-wrap;
  gap: 38px;
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.5);

  ${mobile(css`
    padding: 24px 18px;
    width: fit-content;
  `)}
`;
export const eventNumber = css`
  border-radius: 50%;
  background-color: ${theme.color.black};
  width: 44px;
  height: 44px;
  color: ${theme.color.white};
  margin: 0 auto;
  ${theme.flex.center}
  ${theme.font.preB24}

  ${mobile(css`
    width: 34px;
    height: 34px;
    font-size: 18px;
  `)}
`;

export const eventTitle = css`
  ${theme.font.pcpB};
  ${theme.margin.mg12}
  font-size: 40px;

  ${mobile(css`
    font-size: 24px;
  `)}
`;

export const joinButton = css`
  ${theme.font.preB38};
  width: 100%;
  height: 120px;
  border-radius: 18px;
`;

export const eventType = css`
  ${theme.font.preB28};
  margin-top: 28px;
  margin-bottom: 12px;

  ${mobile(css`
    font-size: 28px;
  `)}
`;
export const subTitle = css`
  ${theme.font.preB24};

  ${mobile(css`
    font-size: 18px;
  `)}
`;

export const desc = css`
  ${theme.font.preM20}
  margin: 20px 0;

  ${mobile(css`
    font-size: 1.1rem;
  `)}
`;
