import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  ${theme.flex.column}
  width : 20%;
  flex-shrink: 1;

  ${mobile(css`
    width: 30%;
    margin: 0 4%;
  `)}
`;

export const card = css`
  border-radius: 20px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  background-color: ${theme.color.white};
  ${theme.flex.center};
`;

export const img = (cate: string) => css`
  width: 100%;
  width: ${cate === "REAR" && "80%"};
  ${cate === "DRIVE_MODE" &&
  "height : 80%; width : 80%; border-radius : 10px; object-fit : cover"};
`;

export const name = css`
  ${theme.font.preB};
  font-size: clamp(0px, calc(10px + 1vw), 24px);
  color: ${theme.color.white};
  margin-top: 20px;
`;
