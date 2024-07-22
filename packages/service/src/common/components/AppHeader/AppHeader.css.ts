import { css } from "@emotion/react";
import { contentLayoutStyles } from "@service/common/styles/contentLayoutStyles";

export const headerContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  gap: 32px;
  ${contentLayoutStyles}
`;

export const logoStyles = css`
  color: var(--White, #fff);
  width: 220px;
  height: 40px;
`;
