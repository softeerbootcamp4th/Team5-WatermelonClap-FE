import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core";

export const prizeContainer = css`
  display: flex;
  flex-direction: column;
  gap: 160px;
  width: 1000px;
  margin: 0 auto;

  ${mobile(
    css`
      align-items: center;
      width: fit-content;
    `,
    PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT,
  )}
`;

export const container = css`
  border-radius: 30px;
  border: 2px solid ${theme.color.white};
  box-shadow: 0px 0px 10px 0px #fff;
  color: ${theme.color.white};
  ${theme.flex.column}
  padding: 120px 80px;

  ${mobile(
    css`
      width: fit-content;
      padding: 10px;
      border: none;
      box-shadow: none;
    `,
    PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT,
  )}
`;

export const title = css`
  ${theme.font.pcpB}
  text-align : center;
  font-size: calc(4vw + 10px);
  margin-bottom: 80px;

  ${mobile(
    css`
      width: 320px;
      font-size: 40px;
      border-left: 3px solid white;
      border-right: 3px solid white;
      padding: 0 10px;
    `,
    PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT,
  )}
`;

export const prizeWrap = css`
  display: grid;
  gap: 120px;
  margin-top: 100px;
  grid-template-columns: repeat(2, 1fr);

  ${mobile(
    css`
      grid-template-columns: 1fr;
    `,
    PICK_EVENT_PRIZE_CONTAINER_BREAKPOINT,
  )}
`;
