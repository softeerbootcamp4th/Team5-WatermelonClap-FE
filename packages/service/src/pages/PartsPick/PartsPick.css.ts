import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const partsPickBackgroundStyle = css`
  background-image: url("/images/common/main-bg.webp");
  background-size: cover;
  background-position: center;

  ${theme.flex.center}
  ${theme.flex.column}

  min-height: 100vh;
  padding: 0 18vw;

  ${mobile(css`
    min-height: calc(100vh - 136.5px);
    padding: 20vw 6vw;
  `)}
`;

export const partsPickButtonStyle = css`
  background-color: ${theme.color.white};
  color: ${theme.color.black};

  :active {
    background-color: ${theme.color.gray300};
  }

  ${mobile(css`
    width: 80%;
    padding: 14px 10px;
  `)}
`;

export const partsPickModalContentStyle = css`
  ${theme.flex.center};
  ${theme.flex.column};
  p {
    margin: 0;
  }
`;

export const partsNameStyle = css`
  color: var(--White, #fff);
  text-align: center;
  text-shadow: 0px 0px 40px #ffb7ff;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #fed2ff;
  ${theme.font.pcpB}
  font-size: 40px;

  ${mobile(css`
    font-size: 24px;
  `)}
`;
