import { useNavigate } from "react-router-dom";
import * as style from "./LotteryApplyInfo.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { theme } from "@watermelon-clap/core/src/theme";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import {
  PARTS_COLLECTION_PAGE_ROUTE,
  PICK_EVENT_PAGE_ROUTE,
} from "@service/constants/routes";
import { useEffect, useRef, useState } from "react";
import { mobile } from "@service/common/responsive/responsive";
import { useMobile } from "@service/common/hooks/useMobile";
import { apiGetPartsRemain } from "@service/apis/partsEvent";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { apiGetMyShareLink } from "@service/apis/link/apiGetMyShareLink";
import { apiGetLotteryStatus } from "@service/apis/lottery/apiGetLotteryStatus";

export const LotteryApplyInfo = () => {
  const navigate = useNavigate();
  const shareLinkRef = useRef(null);
  const [shareLink, setShareLink] = useState<string>();
  const [remainChance, setRemainChance] = useState<number>();
  const [isApplied, setIsApplied] = useState<boolean>();

  const { handleTokenError } = useAuth();

  useEffect(() => {
    apiGetLotteryStatus()
      .then(({ applied }) => setIsApplied(applied))
      .catch((error: Error) => handleTokenError(error));

    apiGetMyShareLink().then(({ link }) => setShareLink(link));

    apiGetPartsRemain().then(({ remainChance }) =>
      setRemainChance(remainChance),
    );
  }, []);

  const isMobile = useMobile();

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>응모 내역 확인</h1>
      <h2 css={style.subtitle}>내 아반떼 N 뽑기 이벤트 응모 내역 입니다.</h2>

      <Space size={isMobile ? 100 : 130} />
      {isApplied ? (
        <section css={[theme.flex.center]}>
          <div
            css={[
              theme.flex.column,
              css`
                align-items: start;
                gap: 20px;
              `,
              mobile(css`
                width: 80%;
              `),
            ]}
          >
            <span css={style.sectionTitle}>내 컬렉션 URL</span>
            <span>친구 링크 클릭 수 만큼 당첨 확률도 같이 올라가요! </span>

            <div
              css={[
                theme.flex.center,
                theme.gap.gap12,
                mobile(css`
                  flex-direction: column;
                  width: 100%;
                  align-items: start;
                `),
              ]}
            >
              <div css={style.shareLinkBox} ref={shareLinkRef}>
                {shareLink}
              </div>
              <ClipBoardButton copyRef={shareLinkRef} />
            </div>

            <div css={[theme.flex.center, theme.gap.gap24]}>
              <span css={[theme.font.pcB28]}>남은 뽑기권</span>
              <span
                css={[
                  theme.font.pcB40,
                  mobile(css`
                    font-size: 30px;
                  `),
                ]}
              >
                {remainChance}
              </span>
            </div>
          </div>
        </section>
      ) : (
        <div
          css={[
            theme.font.pcB28,
            css`
              text-align: center;
            `,
            mobile(css`
              font-size: 16px;
              width: 90%;
              margin: 0 auto;
            `),
          ]}
        >
          내 아반떼 N 뽑기 이벤트에 참여한 이력이 없습니다.
        </div>
      )}

      <Space size={120} />

      {isApplied ? (
        <Button
          variant={ButtonVariant.LONG}
          css={style.btn}
          onClick={() => navigate(PARTS_COLLECTION_PAGE_ROUTE)}
        >
          내 컬렉션 바로가기
        </Button>
      ) : (
        <Button
          variant={ButtonVariant.LONG}
          css={style.btn}
          onClick={() => navigate(PICK_EVENT_PAGE_ROUTE)}
        >
          내 아반떼 N 뽑으러 가기
        </Button>
      )}
    </div>
  );
};
