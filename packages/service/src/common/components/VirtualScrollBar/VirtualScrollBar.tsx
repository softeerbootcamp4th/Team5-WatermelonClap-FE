import { useScroll, motion, useTransform } from "framer-motion";
import { RefObject } from "react";
import {
  scrollContainerStyles,
  scrollBoxStyles,
  scrollProgressStyles,
} from "./VirtualScrollBar.css";

interface VirtualScrollBarProps {
  scrollTargetRef: RefObject<HTMLDivElement>;
}
/**
 * `hideScrollBarStyle`을 사용 시 해당 페이지의 스크롤바가 숨겨지기에 스크롤바를 대체하기 위한 컴포넌트
 */
export const VirtualScrollBar = ({
  scrollTargetRef,
}: VirtualScrollBarProps) => {
  const { scrollYProgress } = useScroll({
    container: scrollTargetRef,
    layoutEffect: false,
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      css={scrollContainerStyles}
      whileHover={{
        scaleX: 1.5,
        scaleY: 1.2,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div css={scrollBoxStyles}>
        <motion.div
          style={{
            height: height,
          }}
          css={scrollProgressStyles}
        ></motion.div>
      </div>
    </motion.div>
  );
};
