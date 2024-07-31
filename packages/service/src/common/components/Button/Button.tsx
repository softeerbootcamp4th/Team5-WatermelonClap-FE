import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "./type";
import {
  hugeButtonStyle,
  longButtonStyle,
  shortButtonStyle,
  smallDarkButtonStyle,
  smallLightButtonStyle,
} from "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  onClick?: () => void;
}

const getButtonVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.LONG:
      return longButtonStyle;
    case ButtonVariant.SHORT:
      return shortButtonStyle;
    case ButtonVariant.SMALL_DARK:
      return smallDarkButtonStyle;
    case ButtonVariant.SMALL_LIGHT:
      return smallLightButtonStyle;
    case ButtonVariant.HUGE:
      return hugeButtonStyle;
  }
};

const Button = ({
  variant = ButtonVariant.SHORT,
  onClick = () => {},
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      css={css`
        cursor: pointer;
        ${getButtonVariantStyles(variant)}
      `}
    />
  );
};

export default Button;
