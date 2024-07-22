import { css } from "@emotion/react";
import { Button } from "../../../common/components/Button";
import { contentLayoutStyles } from "../../../common/styles/contentLayoutStyles";

export const MainBannerContent = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 4px;
        margin-top: 80px;
        ${contentLayoutStyles}
      `}
    >
      <span
        css={css`
          display: flex;
          flex-direction: column;
          align-items: end;
          border-radius: 16px;
          padding: 16px;
          backdrop-filter: blur(2px);
        `}
      >
        <h1
          css={css`
            color: var(--White, #fff);
            font-family: "Happiness Sans VF";
            font-size: 86px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
          `}
        >
          AVANTE N
        </h1>
        <h2
          css={css`
            color: var(--White, #fff);
            font-family: Pretendard;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          `}
        >
          최대 290마력, 일상 속 스포츠카 출시
        </h2>
        <div
          css={css`
            display: flex;
            gap: 24px;
            margin-top: 24px;
          `}
        >
          <Button variant="bordered">자세히 보기</Button>
          <Button variant="filled">이벤트 바로 가기</Button>
        </div>
      </span>
    </div>
  );
};
