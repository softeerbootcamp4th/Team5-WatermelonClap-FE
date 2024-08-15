import { useNavigate } from "react-router-dom";
import * as style from "./LotteryApplyFinish.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { theme } from "@watermelon-clap/core/src/theme";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import { useEffect, useRef, useState } from "react";
import { apiGetMyShareLink } from "@service/apis/link/apiGetMyShareLink";

export const LotteryApplyFinish = () => {
  const navigate = useNavigate();
  const shareLinkRef = useRef(null);
  const [shareLink, setShareLink] = useState<string>();

  useEffect(() => {
    apiGetMyShareLink().then(({ link }) => {
      setShareLink(link);
    });
  }, []);

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>응모완료</h1>

      <Space size={100} />

      <section
        css={[
          theme.flex.column,
          css`
            margin: 0 auto;
            width: 70%;
            max-width: 1000px;
            justify-content: start;
            align-items: start;
          `,
        ]}
      >
        <div
          css={[
            theme.flex.column,
            css`
              align-items: start;
              gap: 14px;
            `,
          ]}
        >
          <span css={theme.font.pcB28}>내 컬렉션 URL</span>
          <span>
            링크를 통해 친구가 이벤트를 참여하면 추가 뽑기권을 드려요!
          </span>
          <div css={[theme.flex.center, theme.gap.gap12]}>
            <div css={style.shareLinkBox} ref={shareLinkRef}>
              {shareLink}
            </div>
            <ClipBoardButton copyRef={shareLinkRef} />
          </div>
        </div>

        <Space size={40} />

        <div
          css={[
            theme.flex.column,
            css`
              align-items: start;
              gap: 14px;
            `,
          ]}
        >
          <span css={theme.font.pcB28}>
            새롭게 출시된 아반떼 N에 대한 기대평을 남겨주세요 🥳
          </span>
          <span css={theme.font.preM18}>
            남겨주신 기대평은 홈화면에 노출될 수 있습니다! 최대 50자까지 작성할
            수 있어요.
          </span>

          <div css={[theme.flex.center, theme.gap.gap16]}>
            <textarea
              placeholder="여기에 기대평을 작성해주세요"
              css={style.expectationInput}
            />
            <Button variant={ButtonVariant.LONG} css={style.applyBtn}>
              제출하기
            </Button>
          </div>
        </div>
      </section>

      <Space size={100} />

      <Button
        variant={ButtonVariant.LONG}
        css={style.btn}
        onClick={() => navigate(MAIN_PAGE_ROUTE)}
      >
        홈으로 가기
      </Button>
    </div>
  );
};
