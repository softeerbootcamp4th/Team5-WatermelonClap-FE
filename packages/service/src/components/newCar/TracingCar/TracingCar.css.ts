import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

export const bodyStyles = css`
  height: 2000vh;
  width: 100%;
  position: absolute;
  opacity: 0.6;
  margin-top: -250px;

  ${mobile(css`
    height: 100%;
    margin-top: 0;
  `)}
`;

export const containerStyles = css`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const carStyles = (path: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  offset-path: path("${path}");
  padding-bottom: 40px;

  ${path === "" ? "display : none" : ""};

  ${mobile(css`
    width: 70px;
    height: auto;
    padding-bottom: 20px;
  `)}
`;
