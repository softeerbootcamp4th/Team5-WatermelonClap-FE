import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core/src/theme";

export const Container = css`
  color: ${theme.color.white};
  ${theme.font.preB}
  ${theme.flex.column}
  text-align: center;
  width: fit-content;
  width: 350px;
`;

export const img = css`
  margin-bottom: 40px;

  ${mobile(
    css`
      width: 300px;
      margin-bottom: 20px;
    `,
    PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT,
  )}
`;

export const rank = css`
  font-size: 24px;
  margin-bottom: 14px;
`;

export const name = css`
  font-size: 32px;
  width: 280px;
`;
