import { css, SerializedStyles } from "@emotion/react";
import { MOBILE_BREAKPOINT } from "@service/constants/breakpoints";

/**
 * 두 번째 인자로 원하는 픽셀값을 넣어줄 수 있음, default 값은 "412px"
 */
export const mobile = (
  styles: SerializedStyles,
  maxWidth: string = MOBILE_BREAKPOINT,
) => css`
  @media screen and (max-width: ${maxWidth}) {
    ${styles}
  }
`;
