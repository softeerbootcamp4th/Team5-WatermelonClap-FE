import { css, SerializedStyles } from "@emotion/react";

// Galaxy S20 Ultra 기준
export const MOBILE_MAX_WIDTH = "412px" as const;

/**
 * 두 번째 인자로 원하는 픽셀값을 넣어줄 수 있음, default 값은 "412px"
 */
export const mobile = (
  styles: SerializedStyles,
  maxWidth: string = MOBILE_MAX_WIDTH,
) => css`
  @media screen and (max-width: ${maxWidth}) {
    ${styles}
  }
`;
