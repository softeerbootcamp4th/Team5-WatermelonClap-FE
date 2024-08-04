import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const nQuizSectionStyles = css`
  ${theme.flex.center}
  ${theme.flex.column}
  width: 100%;
  aspect-ratio: 1.37 / 1;
  min-width: 800px;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: ${theme.color.white};
  padding: 40px 48px;

  ${mobile(css`
    min-width: 350px;
    padding: 20px 21px;
    border-radius: 10px;
  `)}
`;

export const nQuizSectionHeaderContainerStyles = css`
  width: 100%;
  height: 14%;
`;

export const nQuizSectionBodyContainerStyles = css`
  width: 100%;
  height: 86%;
  padding-top: 10px;
  gap: 40px;

  ${mobile(css`
    padding-top: 0;
  `)}
`;
