import { css } from "@emotion/react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// index.css에 overflow: hidden 제거 후 사용해주세요

export const ScrollTextPage: React.FC = () => {
  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <div
        css={css`
          height: 200vh;
          background-color: #000;
        `}
      ></div>
      <div
        css={css`
          height: 200vh;
          background-color: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
        ref={containerRef1}
      >
        <ScrollText
          containerRef={containerRef1}
          direction="right"
          endColor="#fff"
          fontSize="14vw"
          startColor="#000"
        >
          HYUNDAI
        </ScrollText>
      </div>
      <div
        css={css`
          height: 100vh;
          background-color: #000;
        `}
      ></div>
      <div
        css={css`
          height: 200vh;
          background-color: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
        ref={containerRef2}
      >
        <ScrollText
          containerRef={containerRef2}
          direction="left"
          endColor="#fff"
          fontSize="14vw"
          startColor="#000"
        >
          SOFTEER
        </ScrollText>
      </div>
      <div
        css={css`
          height: 200vh;
          background-color: #000;
        `}
      ></div>
    </>
  );
};

export const ScrollText: React.FC<ScrollTextProps> = ({
  children,
  startColor,
  endColor,
  direction,
  fontSize,
  containerRef,
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    layoutEffect: false,
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 10 });

  const backgroundGradient = useTransform(
    scaleX,
    [0, 1],
    [
      `linear-gradient(to ${direction}, ${endColor} 0%, ${startColor} 0%)`,
      `linear-gradient(to ${direction}, ${endColor} 100%, ${startColor} 100%)`,
    ],
  );
  return (
    <motion.h1
      style={{ background: backgroundGradient }}
      css={css`
        position: sticky;
        top: 50%;
        left: 0;
        font-size: ${fontSize};
        color: transparent;
        -webkit-text-stroke: 2px ${endColor};
        background-clip: text !important;
        display: inline-block;
      `}
    >
      {children}
    </motion.h1>
  );
};

interface ScrollTextProps {
  children: string;
  startColor: string;
  endColor: string;
  direction: "left" | "right";
  fontSize: string;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
}
