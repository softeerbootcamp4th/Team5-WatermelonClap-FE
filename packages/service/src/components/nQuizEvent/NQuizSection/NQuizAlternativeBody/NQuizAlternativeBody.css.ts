import { css } from "@emotion/react";
import { eventStatusType } from "../../NQuizReward/type";
import { theme } from "@watermelon-clap/core";

export const alternativeBodyStyles = (status: eventStatusType) => css`
  position: absolute;
  margin: 0 auto;
  ${theme.font.preB38}

  ${(status === "open" || status === "upcoming") && "visibility: hidden;"}
`;
