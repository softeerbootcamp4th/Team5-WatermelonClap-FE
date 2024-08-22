import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { SHARE_BREAKPOINT } from "@service/constants/breakpoints";

export const partsCardWrap = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 144px;
  gap: 10px;
  padding-top: 44px;

  ${mobile(
    css`
      padding-top: 0;
      gap: 80px 10px;
      flex-direction: row;
      width: fit-content;
    `,
    SHARE_BREAKPOINT,
  )}
`;
