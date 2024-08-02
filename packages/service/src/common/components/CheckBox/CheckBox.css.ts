import { css } from "@emotion/react";
import { baseStyles, theme } from "@watermelon-clap/core";

export const checkBoxContainerStyle = css`
  ${baseStyles.flex.center}
`;

export const checkBoxButtonStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const checkBoxStyle = (isChecked: boolean) => {
  const { gray300, white } = theme.color;

  return css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    border: 2px solid ${gray300};
    border-radius: 4px;
    transition: all 0.5s;
    cursor: pointer;
    background-color: ${isChecked ? white : "transparent"};
    border-color: ${isChecked ? white : gray300};
  `;
};

export const checkBoxSvgStyle = css`
  position: absolute;
  height: 14px;
  width: 14px;
  color: ${theme.color.black};
  pointer-events: none;
`;

export const checkBoxLabelStyle = css`
  ${theme.font.pretend.medium.bodyM18}
  color: ${theme.color.gray300};
  margin-left: 8px;
  transition: color 0.3s ease-out;
`;
