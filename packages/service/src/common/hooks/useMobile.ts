import { useMediaQuery } from "react-responsive";
import { MOBILE_MAX_WIDTH } from "../responsive/responsive";

// 모바일 환경이면 true, 아니면 false 반환
export const useMobile = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${MOBILE_MAX_WIDTH})`,
  });
  return isMobile;
};
