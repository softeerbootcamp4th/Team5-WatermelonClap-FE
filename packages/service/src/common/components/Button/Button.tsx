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
import { mobile } from "@service/common/responsive/responsive";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const getButtonVariantStyles = (variant: ButtonVariant) => {
  const commonStyle = css`
    cursor: pointer;
    ${mobile(css`
      width: 120px;
      height: fit-content;
      padding: 8px 10px;
      font-size: 14px;
    `)};
  `;

  let eachStyle;

  switch (variant) {
    case ButtonVariant.LONG:
      eachStyle = longButtonStyle;
      break;
    case ButtonVariant.SHORT:
      eachStyle = shortButtonStyle;
      break;
    case ButtonVariant.SMALL_DARK:
      eachStyle = smallDarkButtonStyle;
      break;
    case ButtonVariant.SMALL_LIGHT:
      eachStyle = smallLightButtonStyle;
      break;
    case ButtonVariant.HUGE:
      eachStyle = hugeButtonStyle;
      break;
  }

  return [commonStyle, eachStyle];
};

export const Button = ({
  variant = ButtonVariant.SHORT,
  onClick = () => {},
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      css={getButtonVariantStyles(variant)}
    />
  );
};
