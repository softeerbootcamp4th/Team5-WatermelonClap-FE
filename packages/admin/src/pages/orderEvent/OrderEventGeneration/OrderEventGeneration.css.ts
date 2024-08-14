import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";

export const containerStyle = css`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 25%;
  gap: 10px;
`;

export const hrStyle = css`
  width: 100%;
  border: none;
  border-top: 2px solid #ccc;
  margin: 20px 0;
`;

export const quizImageStyle = css`
  margin-top: 20px;
  max-width: 200px;
  min-width: 200px;
  img {
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const rewardImageStyle = css`
  margin-top: 20px;
  max-width: 200px;
  min-width: 200px;
  img {
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
  },
  "&:active": {
    backgroundColor: "gray",
  },
};

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const LabelWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 100px; /* 라벨과 입력 필드 사이의 간격 */
`;

export const Label = styled("label")`
  font-weight: bold;
  min-width: 120px; /* 라벨의 최소 너비 */
`;

export const FlexBetween = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
