import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";
import { eventStatusType } from "./type";

export const containerStyle = (status: eventStatusType) => css`
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  color: ${theme.color.white};
  gap: 12px;

  ${status === "open" && `color: ${theme.color.eventBlue};`}

  ${mobile(css`
    gap: 6px;
    width: 26vw;
  `)};
`;

export const dateStyle = (status: eventStatusType) => css`
  ${theme.font.pcpL28}
  ${(status === "closed" || status === "end") && "opacity: 0.3;"}
  ${status === "upcoming" && "opacity: 0.6;"}

  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const rewardContainerStyle = (status: eventStatusType) => css`
  position: relative;
  ${theme.flex.center}
  ${theme.flex.column}
  background-color: ${theme.color.white};
  border-radius: 8px;
  padding-top: 7%;
  width: 100%;
  aspect-ratio: 1 / 1;

  ${(status === "closed" || status === "end") && "opacity: 0.3;"}
  ${status === "upcoming" && "opacity: 0.6;"}
  ${status === "open" && `border: 4px solid ${theme.color.eventBlue};`}

  ${mobile(css`
    border-radius: 4px;
    ${status === "open" && `border: 2px solid ${theme.color.eventBlue};`}
  `)}
`;

export const imgStyle = css`
  width: 100%;
  aspect-ratio: 2 / 1;
`;

export const nameStyle = css`
  ${theme.font.preB16}
  text-align: center;
  font-size: 12px;
  color: black;
  padding-top: 7%;
  padding-bottom: 7%;
  word-break: keep-all;

  ${mobile(css`
    font-size: 10px;
  `)}
`;

export const openExpectedDateStyle = (status: eventStatusType) => css`
  ${theme.font.preB16}

  ${status === "upcoming" && "opacity: 0.6;"}
  ${status !== "upcoming" && "visibility: hidden;"}

  ${mobile(css`
    font-size: 8px;
  `)}
`;

export const endTextStyle = (status: eventStatusType) => css`
  position: absolute;
  margin: 0 auto;
  ${theme.font.preB28}
  color: ${theme.color.white};

  ${(status === "open" || status === "upcoming") && "visibility: hidden;"}

  ${mobile(css`
    font-size: 18px;
  `)}
`;
