import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainContainerStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 10%;
  gap: 30px;
`;

export const headerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const buttonStyles = (isSelected: boolean) => css`
  background-color: ${isSelected ? theme.color.gray400 : "transparent"};
  color: ${isSelected ? "white" : theme.color.gray300};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.color.gray400};
    color: white;
  }
`;

export const drawButtonStyles = css`
  width: 200px;
  height: 50px;
  ${theme.font.preB16}
`;
