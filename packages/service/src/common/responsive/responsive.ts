import { css, SerializedStyles } from "@emotion/react";

// Galaxy S20 Ultra 기준
const MOBILE_MAX_WIDTH = "412px" as const;

export const mobile = (styles: SerializedStyles) => css`
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    ${styles}
  }
`;
