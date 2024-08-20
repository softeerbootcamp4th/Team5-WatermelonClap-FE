import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core/src/theme";

export const longButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preM20}
  background: ${theme.color.eventBlue};
  color: ${theme.color.white};
  width: 360px;
  height: 70px;
  padding: 26px 7px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.eventSkyblue};
  }
`;

export const shortButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preM18}
  background: ${theme.color.gray500};
  color: ${theme.color.white};
  width: 238px;
  height: 52px;
  padding: 26px 7px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray600};
    color: ${theme.color.gray300};
  }
  &:disabled {
    background: ${theme.color.gray300};
    pointer-events: none;
  }
`;

export const smallDarkButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preM20}
  background: rgba(0, 0, 0, 0.3);
  color: ${theme.color.white};
  width: 180px;
  height: 52px;
  padding: 24px 12px;
  gap: 10px;
  border: 2px solid ${theme.color.white};
  border-radius: 100px;
  box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4.699999809265137px);

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray600};
    color: ${theme.color.gray300};
  }
`;

export const smallLightButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preM20}
  color: ${theme.color.black};
  font-weight: 600;
  background: ${theme.color.white};
  width: 180px;
  height: 52px;
  padding: 24px 12px;
  gap: 10px;
  border-radius: 82px;
  box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.7);
  border: none;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray200};
    color: ${theme.color.black};
  }
`;

export const hugeButtonStyle = css`
  ${theme.flex.center}
  ${theme.font.preB38}
  background: ${theme.color.white};
  color: ${theme.color.black};
  width: 597px;
  height: 115px;
  padding: 35px 138px;
  font-weight: 700;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: ${theme.color.gray200};
    color: ${theme.color.black};
  }
`;
