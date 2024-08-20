import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

export const mainBg = css`
  background-image: url("images/common/main-bg.webp");
  background-size: cover;
  padding-bottom: 200px;

  ${mobile(css`
    padding-bottom: 100px;
  `)}
`;

export const eventCardWrap = css`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;
