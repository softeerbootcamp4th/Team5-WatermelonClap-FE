import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const container = css`
  ${theme.flex.column}
  width : 48%;
  cursor: pointer;

  &:last-child {
  }
`;

export const card = (equipped: boolean) => css`
  border-radius: 20px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;

  background-color: ${theme.color.white};
  ${theme.flex.center};
  > img {
    width: 100%;
  }

  &::after {
    visibility: ${equipped ? "hidden" : "visible"};
    content: "미장착";
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: ${theme.color.white};
    ${theme.font.preB24}

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const name = css`
  ${theme.font.preB24};
  color: ${theme.color.white};
  margin-top: 20px;
`;
