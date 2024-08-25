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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { mobile } from "@service/common/responsive/responsive";
import { useMobile } from "@service/common/hooks/useMobile";
import { apiGetPartsRemain } from "@service/apis/partsEvent";
import { apiGetMyShareLink } from "@service/apis/link/apiGetMyShareLink";
import { apiGetLotteryStatus } from "@service/apis/lottery/apiGetLotteryStatus";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { useAuth, useModal } from "@watermelon-clap/core/src/hooks";
import { IApiGetCheckExpectation } from "@service/apis/expectation/type";
import { apiGetCheckExpectation } from "@service/apis/expectation/apiGetCheckExpectation";
import { apiPostExpectation } from "@service/apis/expectation/apiPostExpectation";

export const LotteryApplyInfo = () => {
  const navigate = useNavigate();
  const shareLinkRef = useRef(null);
  const [shareLink, setShareLink] = useState<string>();
  const [remainChance, setRemainChance] = useState<number>();
  const [expectation, setExpectation] = useState("");
  const [isExpectationNull, setIsExpectationNull] = useState(true);
  const [isPostExpectation, setIsPostExpectation] = useState(false);
  const { handleTokenError } = useAuth();
  const { openModal } = useModal();
  const isMobile = useMobile();

  const {
    data: { applied: isApplied },
  } = useSuspenseQuery({
    queryKey: ["isApplied", getAccessToken()],
    queryFn: apiGetLotteryStatus,
    staleTime: 0,
  });

  const {
    data: { exist: existExpectation },
  } = useSuspenseQuery<IApiGetCheckExpectation>({
    queryKey: ["existExpectation", getAccessToken()],
    queryFn: apiGetCheckExpectation,
  });

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

    if (existExpectation) {
      return openModal({
        type: "alert",
        props: { content: "이미 기대평을 작성하셨습니다" },
      });
    }

    apiPostExpectation(expectation)
      .then(() => {
        openModal({
          type: "alert",
          props: {
            content: "기대평이 등록되었습니다",
          },
        });
        setIsPostExpectation(true);
        setIsExpectationNull(true);
      })
      .catch((error) => {
        handleTokenError(error);

        openModal({
          type: "alert",
          props: { content: "기대평 등록에 실패했습니다" },
        });
      });
  };

  useEffect(() => {
    apiGetMyShareLink().then(({ link }) => setShareLink(link));

    apiGetPartsRemain().then(({ remainChance }) =>
      setRemainChance(remainChance),
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>
          내 아반떼 N 자랑하기 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트
          스포츠카
        </title>
        <meta name="description" content="내 아반떼 N 자랑하기 페이지" />
      </Helmet>
      <div css={style.mainBg}>
        <div>
          <h1 css={style.pageTitle}>내 아반떼 N 자랑하기</h1>

          {existExpectation || (
            <>
              <Space size={60} />

              <div
                css={[
                  theme.flex.column,
                  css`
                    padding: 0 30px;
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
            </>
          )}

          <Space size={isMobile ? 40 : 60} />
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

          <Space size={isMobile ? 40 : 70} />

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
      </div>
    </>
  );
};
