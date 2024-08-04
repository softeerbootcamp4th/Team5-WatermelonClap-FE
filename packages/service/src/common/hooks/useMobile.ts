import { MOBILE_BREAKPOINT } from "@service/constants/breakpoints";
import { useMediaQuery } from "react-responsive";

/**
 * 모바일 환경이면 true, 아니면 false 반환
 *
 * 인자로 원하는 픽셀값을 넣어줄 수 있음, default 값은 "412px"
 */
export const useMobile = (maxWidth: string = MOBILE_BREAKPOINT) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${maxWidth})`,
  });
  return isMobile;
};
