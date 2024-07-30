import { css, SerializedStyles } from "@emotion/react";

interface ITheme {
  color: {
    black: SerializedStyles;
    white: SerializedStyles;
    gray100: SerializedStyles;
    gray200: SerializedStyles;
    gray300: SerializedStyles;
    gray400: SerializedStyles;
    gray500: SerializedStyles;
    gray600: SerializedStyles;
    eventBlue: SerializedStyles;
    eventSkyblue: SerializedStyles;
    hyundaiActiveRed: SerializedStyles;
    hyundaiBlue: SerializedStyles;
    mainEventCardBg: SerializedStyles;
  };
  font: {
    pretend: {
      semiBold: {
        headSB86: SerializedStyles;
      };
      bold: {
        titleB38: SerializedStyles;
        titleB28: SerializedStyles;
        body24: SerializedStyles;
        body18: SerializedStyles;
        body16: SerializedStyles;
      };
      medium: {
        bodyM20: SerializedStyles;
        bodyM18: SerializedStyles;
        bodyM14: SerializedStyles;
      };
    };
    pyeongChangPeace: {
      bold: {
        head: SerializedStyles;
        title: SerializedStyles;
      };
      light: {
        head: SerializedStyles;
        title32: SerializedStyles;
        title28: SerializedStyles;
      };
    };
    pyeongChang: {
      bold: {
        title40B: SerializedStyles;
        title28B: SerializedStyles;
        body16B: SerializedStyles;
      };
    };
  };
}

const theme: ITheme = {
  color: {
    black: css`
      color: #000000;
    `,
    white: css`
      color: #ffffff;
    `,
    gray100: css`
      color: #ececec;
    `,
    gray200: css`
      color: #cccccc;
    `,
    gray300: css`
      color: #999999;
    `,
    gray400: css`
      color: #666666;
    `,
    gray500: css`
      color: #333333;
    `,
    gray600: css`
      color: #1a1a1a;
    `,
    eventBlue: css`
      color: #027df1;
    `,
    eventSkyblue: css`
      color: #57adff;
    `,
    hyundaiActiveRed: css`
      color: #e63312;
    `,
    hyundaiBlue: css`
      color: #002c5f;
    `,
    mainEventCardBg: css`
      background: linear-gradient(
        194deg,
        #e5ffa9 3.1%,
        #d2ecff 33.71%,
        #fffbdd 78.87%,
        #a9bcff 103.46%
      );
    `,
  },
  font: {
    pretend: {
      semiBold: {
        headSB86: css`
          font-family: "Pretendard-SemiBold";
          font-size: 86px;
        `,
      },
      bold: {
        titleB38: css`
          font-family: "Pretendard-Bold";
          font-size: 38px;
        `,
        titleB28: css`
          font-family: "Pretendard-Bold";
          font-size: 28px;
        `,
        body24: css`
          font-family: "Pretendard-Bold";
          font-size: 24px;
        `,
        body18: css`
          font-family: "Pretendard-Bold";
          font-size: 18px;
        `,
        body16: css`
          font-family: "Pretendard-Bold";
          font-size: 16px;
        `,
      },
      medium: {
        bodyM20: css`
          font-family: "Pretendard-Medium";
          font-size: 20px;
        `,
        bodyM18: css`
          font-family: "Pretendard-Medium";
          font-size: 18px;
        `,
        bodyM14: css`
          font-family: "Pretendard-Medium";
          font-size: 14px;
        `,
      },
    },
    pyeongChangPeace: {
      bold: {
        head: css`
          font-family: "PyeongChangPeace-Bold";
          font-size: 82px;
        `,
        title: css`
          font-family: "PyeongChangPeace-Bold";
          font-size: 28px;
        `,
      },
      light: {
        head: css`
          font-family: "PyeongChangPeace-Light";
          font-size: 80px;
        `,
        title32: css`
          font-family: "PyeongChangPeace-Light";
          font-size: 32px;
        `,
        title28: css`
          font-family: "PyeongChangPeace-Light";
          font-size: 28px;
        `,
      },
    },
    pyeongChang: {
      bold: {
        title40B: css`
          font-family: "PyeongChang-Bold";
          font-size: 40px;
        `,
        title28B: css`
          font-family: "PyeongChang-Bold";
          font-size: 28px;
        `,
        body16B: css`
          font-family: "PyeongChang-Bold";
          font-size: 16px;
        `,
      },
    },
  },
};

export default theme;
