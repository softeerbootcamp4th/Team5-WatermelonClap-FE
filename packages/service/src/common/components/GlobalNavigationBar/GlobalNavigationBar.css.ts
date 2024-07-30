import { css } from "@emotion/react";
import { contentLayoutStyles } from "@service/common/styles/contentLayoutStyles";
import { theme, baseStyles } from "@watermelon-clap/core";

export const headerContainerStyles = css`
  padding: 16px 0px;
  gap: 32px;
  ${baseStyles.flex.between}
  ${contentLayoutStyles}
`;

export const logoStyles = css`
  ${theme.color.white}
  width: 220px;
  height: 40px;
`;
