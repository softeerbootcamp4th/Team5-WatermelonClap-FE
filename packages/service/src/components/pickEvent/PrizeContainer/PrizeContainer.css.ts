import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const prizeContainer = css`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: start;
  width: fit-content;
  margin: 0 auto;
  flex-wrap: wrap;

  ${mobile(css`
    align-items: center;
    width: fit-content;
    gap: 120px;
  `)}
`;

export const container = css`
  border-radius: 30px;
  border: 2px solid ${theme.color.white};
  box-shadow: 0px 0px 10px 0px #fff;
  color: ${theme.color.white};
  ${theme.flex.column}
  width : 550px;
  padding: 80px;

  ${mobile(css`
    width: fit-content;
    padding: 10px;
    border: none;
    box-shadow: none;
  `)}
`;

export const title = css`
  ${theme.font.pcpB}
  text-align : center;
  font-size: clamp(0px, calc(3vw + 10px), 44px);
  margin-bottom: 40px;

  ${mobile(css`
    width: 260px;
    font-size: 28px;
    border-left: 3px solid white;
    border-right: 3px solid white;
    padding: 0 10px;
  `)}
`;

export const prizeWrap = css`
  display: grid;
  gap: 70px;
  margin-top: 100px;
  grid-template-columns: repeat(2, 1fr);

  ${mobile(css`
    gap: 50px 30px;
  `)}
`;
