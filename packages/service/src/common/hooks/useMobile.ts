import { useMediaQuery } from "react-responsive";
import { MOBILE_MAX_WIDTH } from "../responsive/responsive";

/**
 * 모바일 환경이면 true, 아니면 false 반환
 *
 * 인자로 원하는 픽셀값을 넣어줄 수 있음, default 값은 "412px"
 */
export const useMobile = (maxWidth: string = MOBILE_MAX_WIDTH) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${maxWidth})`,
  });
  return isMobile;
};
