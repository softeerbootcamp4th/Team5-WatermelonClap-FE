import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const nQuizInputStyles = css`
  ${theme.font.preM20}
  width: 75%;
  height: 64px;
  border-radius: 10px;
  border: 2px solid ${theme.color.gray200};
  color: ${theme.color.gray400};
  padding: 25px 22px;
  &:focus {
    border: 2px solid ${theme.color.gray400};
    outline: none;
  }

  ${mobile(css`
    height: 30px;
    font-size: 12px;
    padding: 12px 11px;
    border-radius: 5px;
    border: 1px solid ${theme.color.gray200};
  `)}
`;

export const nQuizSubmitButtonStyles = css`
  width: 20%;
  height: 64px;
  font-size: 24px;

  ${mobile(css`
    width: 22%;
    height: 30px;
    font-size: 12px;
    padding: 10px 10px;
  `)}
`;
