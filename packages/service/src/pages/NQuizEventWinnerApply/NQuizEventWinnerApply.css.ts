import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const backgroundStyle = css`
  background-image: url("/images/quiz/nQuizBackground.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;

  ${theme.flex.center}
  ${theme.flex.column}

  padding: 100px 18vw;
  padding-bottom: 94px;

  gap: 20px;

  ${mobile(css`
    min-width: 0px;
    padding: 20vw 6vw;
    padding-bottom: 47px;
  `)};
`;

export const logoContainerStyle = css`
  ${theme.flex.center};
  ${theme.gap.gap32};

  ${mobile(css`
    ${theme.gap.gap16};
  `)}
`;

export const logoStyle = css`
  width: 208px;
  height: 87px;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.6);

  ${mobile(css`
    width: 104px;
    height: 43px;
  `)}
`;

export const titleStyle = css`
  ${theme.font.pcpB82}
  color: ${theme.color.white};
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.6);

  ${mobile(css`
    font-size: 41px;
  `)};
`;

export const contentContainerStyle = css`
  ${theme.flex.center};
  ${theme.flex.column};
  ${theme.gap.gap8};

  ${mobile(css`
    ${theme.gap.gap4};
  `)}
`;

export const cheersTextStyle = css`
  ${theme.font.preB38}
  color: ${theme.color.eventBlue};
  text-align: center;

  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const contentTextStyle = css`
  ${theme.font.preB24}
  color: ${theme.color.white};
  text-align: center;

  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const inputContainerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inputStyle = (isPhoneNumberValid: boolean) => css`
  display: flex;
  width: 566px;
  height: 52px;
  padding: 15px 18px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Gray-100, #ececec);

  outline: 1px solid ${isPhoneNumberValid ? theme.color.eventBlue : "#FF6B6B"};
`;

export const listStyle = css`
  width: 566px;
  display: flex;
  flex-direction: column;
  color: ${theme.color.gray300};
  align-items: start;
  gap: 10px;
`;

export const listItemStyle = css`
  ${theme.font.preM18}
  color: ${theme.color.gray300};
  margin-left: 22px;
`;

export const rewardContainerStyle = css`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const centeredContainerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const submitButtonStyle = css`
  background-color: ${theme.color.eventBlue};

  :hover {
    background-color: ${theme.color.eventSkyblue};
  }
`;
