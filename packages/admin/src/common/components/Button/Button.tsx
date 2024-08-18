import { ButtonHTMLAttributes } from "react";
import { buttonStyle } from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ onClick = () => {}, ...props }: ButtonProps) => {
  return <button onClick={onClick} {...props} css={buttonStyle} />;
};
