import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const container = css`
  ${theme.flex.column}
  margin: 0 auto;
`;
export const tabWrap = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 80px;
  width: 700px;

  ${mobile(css`
    width: 100%;
    flex-wrap: wrap;

    justify-content: space-around;
  `)}
`;

export const tabBtn = (isSelected: boolean) => css`
  border: ${isSelected ? `2px solid ${theme.color.white}` : `none`};
  ${theme.font.preB};
  font-size: 20px;
  border-radius: 100px;
  width: 130px;
  height: 48px;

  cursor: pointer;
  background: none;
  color: ${isSelected ? theme.color.white : theme.color.gray300};
  outline: none;

  ${mobile(css`
    margin: 10px 8%;
  `)}
`;

export const partsCardWrap = css`
  ${theme.flex.between}
  gap: 80px 20px;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1000px;
  margin-top: 30px;

  ${mobile(css`
    justify-content: center;
  `)}
`;
