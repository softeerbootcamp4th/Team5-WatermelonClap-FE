import { css } from "@emotion/react";
import { baseStyles } from "@watermelon-clap/core";

export const googleLoginModalStyles = {
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

export const googleLoginModalBodyStyles = css`
  ${baseStyles.flex.center}
  ${baseStyles.flex.column}
  gap: 48.5px;
  padding: 23px 94px;
`;
