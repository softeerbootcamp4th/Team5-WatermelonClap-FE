import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const pendingModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const pendingModalBodyStyles = css`
  ${theme.flex.center}
  ${theme.flex.column}
  gap: 48.5px;
  padding: 23px 46px;
  text-align: center;

  ${mobile(css`
    gap: 30px;
    padding: 12px 23px;
  `)}
`;

export const pendingImgStyle = css`
  width: 60%;

  ${mobile(css`
    width: 40%;
  `)}
`;
