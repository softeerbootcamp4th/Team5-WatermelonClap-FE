import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const pickTitleContainerStyle = css`
  ${theme.flex.center}
  ${theme.flex.column}
  padding-bottom: 40px;
`;

export const pickTitleHeaderStyle = css`
  ${theme.font.pcpB};
  font-size: 3rem;
  color: ${theme.color.white};
  white-space: nowrap;

  ${mobile(css`
    font-size: 2.2rem;
  `)}
`;

export const pickTitleSpanStyle = css`
  ${theme.font.preM20};
  color: ${theme.color.white};

  ${mobile(css`
    font-size: 14px;
  `)}
`;
