import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { GNB_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core";

// export const GNB_BREAKPOINT = "800px";

export const headerContainerStyles = css`
  padding: 16px calc(-30px + 10%);
  gap: 32px;
  ${theme.flex.between}
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: space-around;

  ${mobile(
    css`
      justify-content: center;
    `,
    GNB_BREAKPOINT,
  )}
`;

export const logoStyles = css`
  color: ${theme.color.white};
  cursor: pointer;
  flex-shrink: 0;
  z-index: 2;
`;
