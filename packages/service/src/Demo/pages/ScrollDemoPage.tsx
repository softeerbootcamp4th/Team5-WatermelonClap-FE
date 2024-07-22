import { css } from "@emotion/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface TextTextProps {
  idx: number;
}
const TextText = ({ idx }: TextTextProps) => {
  return (
    <motion.span
      css={css`
        font-size: 50px;
        font-weight: bold;
      `}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{
        margin: "-200px",
      }}
    >
      테스트 텍스트{idx}입니다.
    </motion.span>
  );
};
export const ScrollDemoPage = () => {
  const { scrollYProgress } = useScroll();
  const [curIdx, setCurIdx] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurIdx(Math.floor(latest * 59) + 1);
  });
  const handleNext = () => {
    setCurIdx((prev) => (prev % 59) + 1);
  };

  const handlePrev = () => {
    setCurIdx((prev) => {
      if (prev === 1) {
        return 59;
      }
      return prev - 1;
    });
  };
  return (
    <div
      css={css`
        height: 200vh;
        width: 100vw;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: fixed;
          top: 0;
        `}
      >
        <button onClick={handlePrev}>prev</button>
        {curIdx}
        <button onClick={handleNext}>next</button>
      </div>
      <div
        css={css`
          position: fixed;
          top: 20%;
          z-index: 1;
        `}
      >
        <img
          src={`/images/0${curIdx.toString().padStart(2, "0")}.png`}
          alt="image"
        />
      </div>
      <motion.img
        src="/images/bg.jpg"
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 200vw; /* 배경 이미지를 넓게 설정 */
          height: 100vh;
          background: url("/images/bg.jpg") no-repeat;
          background-size: cover;
          z-index: -1;
        `}
        style={{
          x: `${(curIdx / 60) * -100}vw`,
        }}
      />
      <div
        css={css`
          display: flex;
          width: 100%;
          gap: 240px;
          flex-direction: column;
        `}
      >
        {[1, 2, 3].map((idx) => {
          return <TextText idx={idx} key={idx} />;
        })}
      </div>
    </div>
  );
};
