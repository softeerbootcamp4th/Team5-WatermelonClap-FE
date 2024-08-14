import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const title = css`
  ${theme.font.pcpB28};
  text-align: center;
  color: ${theme.color.white};
  margin-bottom: 50px;
`;
export const iconWrap = css`
  ${theme.flex.center};
  gap: 38px;

  ${mobile(css`
    gap: 28px;
  `)}
`;

export const icon = (idx: number) => css`
  width: ${idx % 2 === 0 ? "calc(30px + 6%)" : "calc(10px + 2%)"};

  ${mobile(css`
    width: ${idx % 2 === 0 ? "calc(50px + 6%)" : "calc16px + 2%)"};
  `)}
`;
