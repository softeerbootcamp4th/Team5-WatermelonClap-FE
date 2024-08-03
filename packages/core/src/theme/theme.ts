import { css, SerializedStyles } from "@emotion/react";

interface ITheme {
  color: {
    black: string;
    white: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    eventBlue: string;
    eventSkyblue: string;
    hyundaiActiveRed: string;
    hyundaiBlue: string;
    mainEventCardBg: string;
  };

  font: {
    pre: SerializedStyles;
    preSB86: SerializedStyles;
    preB38: SerializedStyles;
    preB28: SerializedStyles;
    preB24: SerializedStyles;
    preB18: SerializedStyles;
    preB16: SerializedStyles;
    preM20: SerializedStyles;
    preM18: SerializedStyles;
    preM14: SerializedStyles;

    pcp: SerializedStyles;
    pcpB82: SerializedStyles;
    pcpB28: SerializedStyles;
    pcpL80: SerializedStyles;
    pcpL32: SerializedStyles;
    pcpL28: SerializedStyles;

    pc: SerializedStyles;
    pcB40: SerializedStyles;
    pcB28: SerializedStyles;
    pcB16: SerializedStyles;
  };

  flex: {
    between: SerializedStyles;
    center: SerializedStyles;
    column: SerializedStyles;
  };

  gap: {
    gap4: SerializedStyles;
    gap8: SerializedStyles;
    gap12: SerializedStyles;
    gap16: SerializedStyles;
    gap24: SerializedStyles;
    gap32: SerializedStyles;
    gap48: SerializedStyles;
  };

  padding: {
    pd4: SerializedStyles;
    pd8: SerializedStyles;
    pd12: SerializedStyles;
    pd16: SerializedStyles;
    pd24: SerializedStyles;
    pd32: SerializedStyles;
    pd48: SerializedStyles;
  };

  margin: {
    mg4: SerializedStyles;
    mg8: SerializedStyles;
    mg12: SerializedStyles;
    mg16: SerializedStyles;
    mg24: SerializedStyles;
    mg32: SerializedStyles;
    mg48: SerializedStyles;
  };
}

export const theme: ITheme = {
  color: {
    black: "#000000",
    white: "#ffffff",
    gray100: "#ececec",
    gray200: "#cccccc",
    gray300: "#999999",
    gray400: "#666666",
    gray500: "#333333",
    gray600: "#1a1a1a",
    eventBlue: "#027df1",
    eventSkyblue: "#57adff",
    hyundaiActiveRed: "#e63312",
    hyundaiBlue: "#002c5f",
    mainEventCardBg:
      "background: linear-gradient(194deg, #e5ffa9 3.1%, #d2ecff 33.71%, #fffbdd 78.87%, #a9bcff 103.46%)",
  },
  font: {
    pre: css`
      font-family: "Pretendard-SemiBold";
    `,
    preSB86: css`
      font-family: "Pretendard-SemiBold";
      font-size: 86px;
    `,
    preB38: css`
      font-family: "Pretendard-Bold";
      font-size: 38px;
    `,
    preB28: css`
      font-family: "Pretendard-Bold";
      font-size: 28px;
    `,
    preB24: css`
      font-family: "Pretendard-Bold";
      font-size: 24px;
    `,
    preB18: css`
      font-family: "Pretendard-Bold";
      font-size: 18px;
    `,
    preB16: css`
      font-family: "Pretendard-Bold";
      font-size: 16px;
    `,
    preM20: css`
      font-family: "Pretendard-Medium";
      font-size: 20px;
    `,
    preM18: css`
      font-family: "Pretendard-Medium";
      font-size: 18px;
    `,
    preM14: css`
      font-family: "Pretendard-Medium";
      font-size: 14px;
    `,

    pcp: css`
      font-family: "PyeongChangPeace-Bold";
    `,
    pcpB82: css`
      font-family: "PyeongChangPeace-Bold";
      font-size: 82px;
    `,
    pcpB28: css`
      font-family: "PyeongChangPeace-Bold";
      font-size: 28px;
    `,
    pcpL80: css`
      font-family: "PyeongChangPeace-Light";
      font-size: 80px;
    `,
    pcpL32: css`
      font-family: "PyeongChangPeace-Light";
      font-size: 32px;
    `,
    pcpL28: css`
      font-family: "PyeongChangPeace-Light";
      font-size: 28px;
    `,

    pc: css`
      font-family: "PyeongChang-Bold";
    `,
    pcB40: css`
      font-family: "PyeongChang-Bold";
      font-size: 40px;
    `,
    pcB28: css`
      font-family: "PyeongChang-Bold";
      font-size: 28px;
    `,
    pcB16: css`
      font-family: "PyeongChang-Bold";
      font-size: 16px;
    `,
  },

  flex: {
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,

    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,

    column: css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  },

  gap: {
    gap4: css`
      gap: 4px;
    `,
    gap8: css`
      gap: 8px;
    `,
    gap12: css`
      gap: 12px;
    `,
    gap16: css`
      gap: 16px;
    `,
    gap24: css`
      gap: 24px;
    `,
    gap32: css`
      gap: 32px;
    `,
    gap48: css`
      gap: 48px;
    `,
  },

  padding: {
    pd4: css`
      padding: 4px;
    `,
    pd8: css`
      padding: 8px;
    `,
    pd12: css`
      padding: 12px;
    `,
    pd16: css`
      padding: 16px;
    `,
    pd24: css`
      padding: 24px;
    `,
    pd32: css`
      padding: 32px;
    `,
    pd48: css`
      padding: 48px;
    `,
  },

  margin: {
    mg4: css`
      margin: 4px;
    `,
    mg8: css`
      margin: 8px;
    `,
    mg12: css`
      margin: 12px;
    `,
    mg16: css`
      margin: 16px;
    `,
    mg24: css`
      margin: 24px;
    `,
    mg32: css`
      margin: 32px;
    `,
    mg48: css`
      margin: 48px;
    `,
  },
};
