import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { SHARE_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  ${theme.flex.column}
  align-items: center;
  justify-content: start;
  flex-shrink: 1;
  text-align: center;
  cursor: pointer;

  ${mobile(
    css`
      width: 15%;
    `,
    SHARE_BREAKPOINT,
  )}
`;

export const card = css`
  border-radius: 20px;
  aspect-ratio: 1.6 / 1;
  overflow: hidden;
  position: relative;
  background-color: ${theme.color.white};
  ${theme.flex.center};

  ${mobile(
    css`
      aspect-ratio: 1 / 1;
    `,
    SHARE_BREAKPOINT,
  )}
`;

export const img = (cate: string) => css`
  width: 100%;
  width: ${cate === "REAR" && "80%"};
  ${cate === "DRIVE_MODE" &&
  "height : 80%; width : 80%; border-radius : 10px; object-fit : cover"};
`;

export const name = css`
  ${theme.font.preB};
  font-size: clamp(0px, calc(10px + 1vw), 20px);
  color: ${theme.color.white};
  word-break: keep-all;
  margin-top: 10px;
`;
