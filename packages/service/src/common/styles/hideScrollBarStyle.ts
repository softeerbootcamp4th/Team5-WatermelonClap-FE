import { css } from "@emotion/react";

/**
 * 해당 엘리먼트의 스크롤을 숨기기 위한 스타일입니다.
 * 안티 패턴이므로 강력하게 `VirtualScrollBar` 컴포넌트를 사용하길 권장합니다.
 */
export const hideScrollBarStyle = css`
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
