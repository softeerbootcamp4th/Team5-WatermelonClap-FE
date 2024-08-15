import { useNavigate } from "react-router-dom";
import * as style from "./LotteryApplyFinish.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { theme } from "@watermelon-clap/core/src/theme";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";

export const LotteryApplyFinish = () => {
  const navigator = useNavigate();
  return (
    <div css={style.mainBg}>
      <section>
        <h1 css={style.pageTitle}>응모완료</h1>
        <span>이벤트에 응모되었습니다.</span>
      </section>

      <section
        css={css`
          margin: 0 auto;
        `}
      >
        <div>
          <span>내 컬렉션 URL</span>
          <span>
            링크를 통해 친구가 이벤트를 참여하면 추가 뽑기권을 드려요!
          </span>

          <div css={[theme.flex.center, theme.gap.gap12]}>
            <div css={style.shareLinkBox}>공유링크</div>
            <ClipBoardButton />
          </div>
        </div>

        <Space size={100} />

        <div>
          <span css={theme.font.pcB28}>
            새롭게 출시된 아반떼 N에 대한 기대평을 남겨주세요 🥳
          </span>
          <span css={theme.font.preM18}>
            남겨주신 기대평은 홈화면에 노출될 수 있습니다! 최대 50자까지 작성할
            수 있어요.
          </span>

          <div css={[theme.flex.center, theme.gap.gap12]}>
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
        onClick={() => navigator(MAIN_PAGE_ROUTE)}
      >
        홈으로 가기
      </Button>
    </div>
  );
};
