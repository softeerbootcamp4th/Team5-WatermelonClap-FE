import { useNavigate } from "react-router-dom";
import * as style from "./LotteryApplyInfo.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { theme } from "@watermelon-clap/core/src/theme";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import { PARTS_COLLECTION_PAGE_ROUTE } from "@service/constants/routes";
import { useEffect, useRef, useState } from "react";
import { mobile } from "@service/common/responsive/responsive";
import { useMobile } from "@service/common/hooks/useMobile";
import { apiGetMyShareLink } from "@service/apis/link/apiGetMyShareLink";

export const LotteryApplyInfo = () => {
  const navigate = useNavigate();
  const shareLinkRef = useRef(null);
  const [shareLink, setShareLink] = useState<string>();

  useEffect(() => {
    apiGetMyShareLink().then(({ link }) => {
      setShareLink(link);
    });
  }, []);

  const isMobile = useMobile();

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>응모 내역 확인</h1>
      <h2 css={style.subtitle}>내 아반떼 N 뽑기 이벤트 응모 내역 입니다.</h2>

      <Space size={isMobile ? 40 : 130} />

      <section css={[theme.flex.center]}>
        <div
          css={[
            theme.flex.column,
            css`
              align-items: start;
              gap: 20px;
            `,
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
            <span css={[theme.font.pcpB82]}>32</span>
          </div>
        </div>
      </section>

      <Space size={120} />

      <Button
        variant={ButtonVariant.LONG}
        css={style.btn}
        onClick={() => navigate(PARTS_COLLECTION_PAGE_ROUTE)}
      >
        내 컬렉션 바로가기
      </Button>
    </div>
  );
};

// const getPartsData = async () => {
//   try {
//     return await apiGetMyParts();
//   } catch (error: any) {
//     if (error.message === "403") {
//       reLogin().then(() => refetch());
//     }
//     throw error;
//   }
// };
