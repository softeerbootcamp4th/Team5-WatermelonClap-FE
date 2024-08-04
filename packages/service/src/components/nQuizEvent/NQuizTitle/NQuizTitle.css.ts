import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const containerStyle = css`
  ${theme.flex.center};
  ${theme.flex.column};
  ${theme.gap.gap48};
  color: ${theme.color.white};

  ${mobile(css`
    ${theme.gap.gap24};
  `)}
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

  ${mobile(css`
    width: 104px;
    height: 43px;
  `)}
`;

export const titleStyle = css`
  ${theme.font.pcpB82}
  color: ${theme.color.white};

  ${mobile(css`
    font-size: 41px;
  `)}
`;

export const dateStyle = css`
  ${theme.font.pcpL32}
  color: ${theme.color.eventSkyblue};

  ${mobile(css`
    font-size: 16px;
  `)}
`;

export const contentContainerStyle = css`
  ${theme.flex.center};
  ${theme.flex.column};
  ${theme.gap.gap8};

  ${mobile(css`
    ${theme.gap.gap4};
  `)}
`;

export const contentTextStyle = css`
  ${theme.font.preB28}
  color: ${theme.color.white};
  white-space: nowrap;

  ${mobile(css`
    font-size: 14px;
  `)}
`;

export const hintTextStyle = css`
  ${theme.font.preB28}
  color: ${theme.color.eventBlue};
  white-space: nowrap;

  ${mobile(css`
    font-size: 14px;
  `)}
`;
