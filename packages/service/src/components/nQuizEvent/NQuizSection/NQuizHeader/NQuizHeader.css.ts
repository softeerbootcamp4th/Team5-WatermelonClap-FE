import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const nQuizHeaderContainerStyles = css`
  ${theme.flex.between};
  border-bottom: 2px solid ${theme.color.black};
  padding-bottom: 1vw;
`;

export const nLogoStyles = css`
  width: 68px;
  height: auto;

  ${mobile(css`
    width: 34px;
  `)}
`;

export const nQuizLogoStyles = css`
  ${theme.flex.center}
  ${theme.gap.gap12}

  ${mobile(css`
    gap: 6px;
  `)}
`;

export const nQuizHeaderTextStyles = css`
  ${theme.font.pcpB28};

  ${mobile(css`
    font-size: 12px;
  `)}
`;
