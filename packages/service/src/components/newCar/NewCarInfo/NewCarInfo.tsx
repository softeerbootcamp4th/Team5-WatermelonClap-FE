import * as style from "./NewCarInfo.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useMobile } from "@service/common/hooks/useMobile";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";
import { useElementViewportPosition } from "@service/common/hooks/useElementViewportPosition";
import { TracingCar } from "../TracingCar";

export const NewCarInfo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);
  const isMobile = useMobile();

  const initCarouselEndPosition = () => {
    if (!carouselRef || !carouselRef.current) return;

    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
  };

  if (isMobile)
    return (
      <div>
        <div ref={ref} css={style.m_imgWrap}>
          <Space size={10} />
          {carInfoImgs.slice(0, 4).map((imgSrc, idx) => (
            <img src={imgSrc} key={idx} css={style.m_infoImg(idx % 2)} />
          ))}

          <Space size={100} />
          <TracingCar x={scrollYProgress} imgViewRef={ref} />
          {carInfoImgs.slice(4).map((imgSrc, idx) => (
            <motion.img
              transition={{
                type: "spring",
                duration: 0.8,
              }}
              whileInView={{ y: -200, opacity: [0, 1] }}
              css={style.m_infoImg(idx % 2)}
              src={imgSrc}
              key={idx}
            />
          ))}
        </div>
      </div>
    );

  return (
    <section ref={ref} css={style.scrollContainer}>
      <div css={style.stickyWrap}>
        <img css={style.bgCirlce1} src="/images/common/bg-circle-green.svg" />
        <img css={style.bgCirlce2} src="/images/common/bg-circle-blue.svg" />
        <motion.div
          css={style.imgWrap}
          ref={carouselRef}
          style={{ x }}
          onViewportEnter={() => {
            initCarouselEndPosition();
          }}
        >
          <div
            css={css`
              margin-left: 200px;
            `}
          />
          <TracingCar x={x} imgViewRef={carouselRef} screenViewRef={ref} />
          {carInfoImgs.map((imgSrc, idx) => (
            <motion.img
              transition={{
                type: "spring",
                duration: 0.8,
              }}
              whileInView={{ x: -300, opacity: [0, 1] }}
              css={style.infoImg}
              src={imgSrc}
              key={idx}
            />
          ))}
          <div
            css={css`
              margin-right: 200px;
            `}
          />
        </motion.div>
      </div>
    </section>
  );
};

// 신차 소개 이미지 path
const carInfoImgs = Array.from(
  { length: 15 },
  (_, i) => `images/newCar/new-car-info-${i + 1}.webp`,
);
