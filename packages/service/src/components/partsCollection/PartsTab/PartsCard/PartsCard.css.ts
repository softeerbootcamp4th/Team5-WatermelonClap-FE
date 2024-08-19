import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  ${theme.flex.column}
  width : 31.2%;
  cursor: pointer;

  ${mobile(css`
    width: 46%;
  `)}
`;

export const card = (equipped: boolean) => css`
  border-radius: 20px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  background-color: ${theme.color.white};
  ${theme.flex.center};
  ${mobile(css`
    border-radius: 10px;
  `)}

  &::before {
    visibility: ${!equipped ? "visible" : "hidden"};
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    visibility: ${equipped ? "visible" : "hidden"};
    content: "장착중";
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: ${theme.color.white};
    ${theme.font.preB24}
    font-size: 16px;
    background-color: ${theme.color.eventBlue};
    padding: 10px 20px;
    animation: fadeInOut 1s infinite alternate;

    width: 80%;
    height: 5%;
    bottom: 0;

    ${mobile(css`
      font-size: 14px;
    `)}
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const img = (cate: string) => css`
  width: 100%;
  width: ${(cate === "REAR" || cate === "WHEEL") && "80%"};
  height: ${cate === "REAR" && "80%"};
`;

export const name = css`
  ${theme.font.preB16};
  color: ${theme.color.white};
  margin-top: 20px;

  ${mobile(css`
    font-size: 14px;
    margin-top: 10px;
  `)}
`;
