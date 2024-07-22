import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "bordered" | "filled";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const getButtonVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "bordered":
      return css`
        background: var(--Miscellaneous-Bar-border, rgba(0, 0, 0, 0.3));
        color: var(--White, #fff);
        &:hover {
          background: var(--Miscellaneous-Bar-border-hover, rgba(0, 0, 0, 0.6));
        }
        &:active {
          background: var(
            --Miscellaneous-Bar-border-active,
            rgba(0, 0, 0, 0.9)
          );
        }
      `;
    case "filled":
      return css`
        color: var(--Black, #000);
        background: var(--White, #fff);
        &:hover {
          background: var(
            --White-Hover,
            linear-gradient(90deg, #f0f0f0 0%, #ffffff 100%)
          );
        }
        &:active {
          background: var(--White-Active, #f0f0f0);
        }
      `;
  }
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      css={css`
        cursor: pointer;
        display: inline-flex;
        padding: 10px 22px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 82px;
        border: 2px solid var(--White, #fff);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        ${getButtonVariantStyles(variant)}
      `}
    />
  );
};
