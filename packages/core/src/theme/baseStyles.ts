import { css, SerializedStyles } from "@emotion/react";

interface IBaseStyles {
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

const baseStyles: IBaseStyles = {
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

export default baseStyles;
