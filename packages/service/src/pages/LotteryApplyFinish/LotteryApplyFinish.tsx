import { useLocation, useNavigate } from "react-router-dom";
import * as style from "./LotteryApplyFinish.css";
import { Button, ButtonVariant } from "@service/common/components/Button";
import { ClipBoardButton } from "@service/common/components/ClipBoardButton";
import { theme } from "@watermelon-clap/core/src/theme";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import { MAIN_PAGE_ROUTE } from "@service/constants/routes";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { apiGetMyShareLink } from "@service/apis/link/apiGetMyShareLink";
import { apiPostExpectation } from "@service/apis/expectation/apiPostExpectation";
import { useModal } from "@watermelon-clap/core/src/hooks";
import { mobile } from "@service/common/responsive/responsive";
import { useMobile } from "@service/common/hooks/useMobile";

export const LotteryApplyFinish = () => {
  const navigate = useNavigate();
  const shareLinkRef = useRef(null);
  const [shareLink, setShareLink] = useState<string>();
  const [expectation, setExpectation] = useState("");
  const [isExpectationNull, setIsExpectationNull] = useState(true);
  const [isPostExpectation, setIsPostExpectation] = useState(false);

  const { openModal } = useModal();
  const {
    state: { isApplied },
  } = useLocation();

  useEffect(() => {
    apiGetMyShareLink().then(({ link }) => {
      setShareLink(link);
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;
    setIsExpectationNull(!text.length ? true : false);
    if (text.length >= 50) {
      openModal({
        type: "alert",
        props: { content: "기대평은 50자 이내 작성 가능합니다" },
      });
      return;
    }
    setExpectation(text);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!expectation) {
      return;
    }

    apiPostExpectation(expectation)
      .then(() => {
        openModal({
          type: "alert",
          props: {
            content: "기대평을 성공적으로 등록하였습니다",
          },
        });
        setIsPostExpectation(true);
        setIsExpectationNull(true);
      })
      .catch(() =>
        openModal({
          type: "alert",
          props: { content: "기대평 등록에 실패했습니다" },
        }),
      );
  };

  const isMobile = useMobile();

  return (
    <div css={style.mainBg}>
      <h1 css={style.pageTitle}>응모완료</h1>

      <Space size={isMobile ? 40 : 100} />

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
              width: 100%;
            `,
          ]}
        >
          <span css={style.sectionTitle}>내 컬렉션 URL</span>
          <span>
            링크를 통해 친구가 이벤트를 참여하면 추가 뽑기권을 드려요!
          </span>
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
        </div>

        <Space size={40} />

        {isApplied || (
          <div
            css={[
              theme.flex.column,
              css`
                align-items: start;
                gap: 24px;
              `,
            ]}
          >
            <span css={style.sectionTitle}>
              새롭게 출시된 아반떼 N에 대한 기대평을 남겨주세요 🥳
            </span>
            <span css={theme.font.preM18}>
              남겨주신 기대평은 홈화면에 노출될 수 있습니다! 최대 50자까지
              작성할 수 있어요.
            </span>

            <form
              onSubmit={handleSubmit}
              css={[
                theme.flex.center,
                theme.gap.gap16,
                mobile(css`
                  flex-direction: column;
                  width: 100%;
                `),
              ]}
            >
              <textarea
                placeholder="여기에 기대평을 작성해주세요"
                css={style.expectationInput}
                value={expectation}
                onChange={handleChange}
                disabled={isPostExpectation && true}
              />
              <Button
                type="submit"
                variant={ButtonVariant.LONG}
                css={style.applyBtn(isExpectationNull)}
                disabled={isExpectationNull}
              >
                제출하기
              </Button>
            </form>
          </div>
        )}
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
