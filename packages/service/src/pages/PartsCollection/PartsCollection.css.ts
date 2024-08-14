import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const mainBg = css`
  background-image: url("/images/common/main-bg.webp");
  background-size: cover;
  padding-bottom: 200px;
`;

export const pageTitle = css`
  text-align: center;
  ${theme.font.pcpB}
  font-size : calc(50px + 2vw);
  padding: 100px;
  color: ${theme.color.white};

  ${mobile(css`
    font-size: calc(20px + 2vw);
    padding: 100px 0 50px 0;
  `)}
`;
