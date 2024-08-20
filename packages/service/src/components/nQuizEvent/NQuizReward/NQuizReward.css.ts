import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";
import { EventStatusType } from "./type";

export const containerStyle = (status: EventStatusType) => css`
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  color: ${theme.color.white};
  gap: 12px;

  ${status === "OPEN" && `color: ${theme.color.eventBlue};`}

  ${mobile(css`
    gap: 6px;
    width: 26vw;
  `)};
`;

export const dateStyle = (status: EventStatusType) => css`
  ${theme.font.pcpL28}
  ${(status === "CLOSED" || status === "END") && "opacity: 0.3;"}
  ${status === "UPCOMING" && "opacity: 0.6;"}

  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const rewardContainerStyle = (status: EventStatusType) => css`
  position: relative;
  ${theme.flex.center}
  ${theme.flex.column}
  background-color: ${theme.color.white};
  border-radius: 8px;
  padding-top: 7%;
  width: 100%;
  aspect-ratio: 1 / 1;

  ${(status === "CLOSED" || status === "END") && "opacity: 0.3;"}
  ${status === "UPCOMING" && "opacity: 0.6;"}
  ${status === "OPEN" && `border: 4px solid ${theme.color.eventBlue};`}

  ${mobile(css`
    border-radius: 4px;
    ${status === "OPEN" && `border: 2px solid ${theme.color.eventBlue};`}
  `)}
`;

export const imgStyle = css`
  width: 70%;
  aspect-ratio: 1 / 1;
  object-fit: contain;

  ${mobile(css`
    width: 55%;
  `)}
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

export const openExpectedDateStyle = (status: EventStatusType) => css`
  ${theme.font.preB16}

  ${status === "UPCOMING" && "opacity: 0.6;"}
  ${status !== "UPCOMING" && "visibility: hidden;"}

  white-space: nowrap;

  ${mobile(css`
    font-size: 10px;
  `)}
`;

export const endTextStyle = (status: EventStatusType) => css`
  position: absolute;
  margin: 0 auto;
  ${theme.font.preB28}
  color: ${theme.color.white};

  ${(status === "OPEN" || status === "UPCOMING") && "visibility: hidden;"}

  ${mobile(css`
    font-size: 18px;
  `)}
`;
