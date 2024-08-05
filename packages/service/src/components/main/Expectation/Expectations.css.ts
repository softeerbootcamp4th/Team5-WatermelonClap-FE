import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const container = css`
  position: relative;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 90px;
    padding: 40px 0;
    z-index: 1;
    top: 0;

    ${mobile(css`
      display: none;
    `)}
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, black 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, black 0%, transparent 100%);
  }
`;

export const expectationCard = css`
  border-radius: 20px;
  background: ${theme.color.gray100};
  box-shadow: 0px 0px 20px 0px #fff;
  padding: 20px 28px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  max-width: 600px;
  box-sizing: content-box;
  text-align: center;
  overflow: hidden;

  &:hover {
    background: ${theme.color.white};
    box-shadow: 0px 0px 20px 0px ${theme.color.eventSkyblue};
  }

  > .text {
    ${theme.font.preM18}
    line-height: 1.6rem;
  }

  ${mobile(css`
    padding: 0 12px;

    > .text {
      font-size: 14px;
      line-height: 18px;
    }
  `)}
`;
