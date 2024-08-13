import { css } from "@emotion/react";
import { EventStatusType } from "../../NQuizReward/type";
import { theme } from "@watermelon-clap/core";

export const alternativeBodyStyles = (status: EventStatusType) => css`
  position: absolute;
  margin: 0 auto;
  ${theme.font.preB38}

  ${(status === "OPEN" || status === "UPCOMING") && "visibility: hidden;"}
`;
