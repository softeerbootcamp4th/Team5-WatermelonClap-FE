import { css } from "@emotion/react";

export const navsContainerStyles = css`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const nLogoStyles = css`
  width: 32px;
  height: 14px;
`;

export const gapStyles = css`
  max-width: 120px;
  min-width: 30px;
`;
export const linkStyles = css`
  color: var(--White, #fff);
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  /* title/preten (GNB) body B16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;
