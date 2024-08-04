import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const containerStyle = css`
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  color: white;
  gap: 12px;

  ${mobile(css`
    gap: 6px;
  `)}
`;

export const dateStyle = css`
  ${theme.font.pcpL28}

  ${mobile(css`
    font-size: 10px;
  `)}
`;

export const rewardContainerStyle = css`
  ${theme.flex.center}
  ${theme.flex.column}
  background-color: white;
  border-radius: 8px;
  padding-top: 7%;
  width: 100%;
  aspect-ratio: 1 / 1;

  ${mobile(css`
    border-radius: 4px;
  `)}
`;

export const imgStyle = css`
  width: 100%;
  aspect-ratio: 2 / 1;
`;

export const nameStyle = css`
  ${theme.font.preB16}
  font-size: 12px;
  white-space: nowrap;
  color: black;
  padding-top: 7%;
  padding-bottom: 7%;

  ${mobile(css`
    font-size: 4px;
  `)}
`;

export const openExpectedDateStyle = css`
  ${theme.font.preB16}
  white-space: nowrap;

  ${mobile(css`
    font-size: 6px;
  `)}
`;
