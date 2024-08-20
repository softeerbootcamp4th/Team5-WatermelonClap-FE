import { css } from "@emotion/react";
import { Space } from "@service/common/styles/Space";
import { theme } from "@watermelon-clap/core/src/theme";
import { ReactComponent as NLogo } from "public/images/gnb/n-logo.svg";

export const MODAL_N_QUIZ_TITLE = (
  <div css={[theme.flex.center, theme.gap.gap4]}>
    <NLogo
      css={css`
        width: 32px;
        height: 14px;
      `}
    />
    <h2>퀴즈</h2>
  </div>
);

export const MODAL_CONTENT_QUIZ_END = (
  <div css={[theme.flex.center, theme.flex.column]}>
    <p>아쉽지만 선착순 이벤트가 마감되었습니다.</p>
    <p>다음 기회에 다시 참여해 주세요.</p>
  </div>
);

export const MODAL_CONTENT_QUIZ_CLOSED = (
  <div css={[theme.flex.center, theme.flex.column]}>
    <p>오늘의 선착순 이벤트가 마감되었습니다.</p>
    <p>다음 기회에 다시 참여해 주세요</p>
  </div>
);

export const MODAL_CONTENT_QUIZ_UPCOMING = (
  <p>아직 이벤트 참여 기간이 아닙니다."</p>
);

export const MODAL_CONTENT_QUIZ_WRONG = (
  <div css={[theme.flex.center, theme.flex.column]}>
    <h3>오답입니다.</h3>
    <Space size={8} />
    <p>아반떼 N 페이지에서 정답을 확인해 주세요.</p>
  </div>
);

export const MODAL_CONTENT_ORDER_EVENT_APPLY_SUCCESS = (
  <div css={[theme.flex.center, theme.flex.column]}>
    <p>신청되었습니다.</p>
    <p>경품은 추후 문자를 통해 발송됩니다.</p>
  </div>
);

export const MODAL_CONTENT_ORDER_EVENT_APPLY_DUPPLICATION = (
  <div css={[theme.flex.center, theme.flex.column]}>
    <p>이미 신청이 완료된 번호입니다.</p>
    <p>하루에 한 번 참여가 가능합니다.</p>
  </div>
);
