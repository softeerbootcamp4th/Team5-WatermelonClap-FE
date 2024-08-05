import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { GNB_BREAKPOINT } from "@service/constants/breakpoints";
import { theme } from "@watermelon-clap/core";

export const navsContainerStyles = (isOpen: boolean) => css`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  justify-content: end;
  gap: calc(10px + 5%);
  ${mobile(
    css`
      position: absolute;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(6px);
      top: ${isOpen ? `50px` : `-400px`};
      opacity: ${isOpen ? 1 : 0};
      transition:
        top 0.8s cubic-bezier(0.165, 0.84, 0.44, 1),
        opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

      padding: 10px;
    `,
    GNB_BREAKPOINT,
  )}
`;

export const nLogoStyles = css`
  width: 32px;
  height: 14px;
`;

export const linkStyles = css`
  color: ${theme.color.white};
  ${theme.font.preB16}
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }

  ${mobile(
    css`
      display: block;
      width: 100%;
      padding: 18px 10px;
      border-bottom: 1px solid ${theme.color.white};
      transition: all 0.1s ease-in-out;

      &:hover,
      &:active {
        transform: none;
      }

      &:hover {
        background-color: ${theme.color.gray100};
        color: ${theme.color.black};
      }

      :last-child {
        border-bottom: none;
      }
    `,
    GNB_BREAKPOINT,
  )}
`;
