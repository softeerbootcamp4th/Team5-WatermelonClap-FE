import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const descriptionModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

export const descriptionModalBodyStyles = css`
  ${theme.flex.center}
  ${theme.flex.column}
  gap: 30px;
  padding: 23px 10px;
  width: 350px;
  text-align: center;

  ${mobile(css`
    width: 70vw;
    padding: 20px 10px;
  `)}
`;

export const imageStyle = css`
  width: 300px;
  border-radius: 20px;

  ${mobile(css`
    border-radius: 10px;
    width: 60vw;
  `)}
`;

export const descriptionStyle = css`
  word-break: keep-all;
  white-space: pre-wrap;
`;
