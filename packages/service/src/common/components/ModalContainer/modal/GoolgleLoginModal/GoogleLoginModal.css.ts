import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

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
  ${theme.flex.center}
  ${theme.flex.column}
  gap: 48.5px;
  padding: 23px 94px;

  ${mobile(css`
    gap: 30px;
    padding: 12px 23px;
  `)}
`;
