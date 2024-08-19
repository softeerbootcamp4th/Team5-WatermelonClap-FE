import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const containerStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 25%;
  gap: 10px;
`;

export const errorMessageStyle = css`
  ${theme.font.preB24}
  color: ${theme.color.black};
`;
