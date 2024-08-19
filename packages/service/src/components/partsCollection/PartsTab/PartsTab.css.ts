import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const container = css`
  ${theme.flex.column}
  margin: 0 auto;
`;

export const tabWrap = css`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 700px;

  ${mobile(css`
    width: 80vw;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
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
    border: ${isSelected ? `1px solid ${theme.color.white}` : `none`};
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    padding: 6px 12px;
    font-size: 14px;
  `)}
`;

export const partsCardWrap = css`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;

  gap: 20px 20px;
  flex-wrap: wrap;
  width: 700px;
  margin-top: 30px;
  height: 540px;
  border: 2px solid ${theme.color.gray200};
  padding: 20px;
  border-radius: 16px;

  ${mobile(css`
    border: none;
    padding: 0;
    max-width: 350px;
    height: fit-content;
  `)}
`;
