import * as style from "./NewCarInfo.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import { useEffect, useRef, useState } from "react";
import { useMobile } from "@service/common/hooks/useMobile";
import { theme } from "@watermelon-clap/core";
import { Space } from "@service/common/styles/Space";
import { css } from "@emotion/react";

const useElementViewportPosition = (ref: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
};

export const NewCarInfo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  const isMobile = useMobile();

  useEffect(() => {
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
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile)
    return (
      <div css={[theme.flex.column]}>
        <Space size={50} />
        {carInfoImgs.map((imgSrc, idx) => (
          <img css={style.m_infoImg(idx % 2)} src={imgSrc} key={idx} />
        ))}
      </div>
    );

  return (
    <section ref={ref} css={style.scrollContainer}>
      (
      <div css={style.stickyWrap}>
        <motion.div css={style.imgWrap} ref={carouselRef} style={{ x }}>
          <div
            css={css`
              padding-left: 2000px;
            `}
          ></div>
          {carInfoImgs.map((imgSrc, idx) => (
            <motion.img
              transition={{ duration: 0.8 }}
              whileInView={{ x: -300, opacity: [0, 1] }}
              css={style.infoImg}
              src={imgSrc}
              key={idx}
            />
          ))}
        </motion.div>
      </div>
      )
    </section>
  );
};

// 신차 소개 이미지 path
const carInfoImgs = Array.from(
  { length: 15 },
  (_, i) => `images/newCar/new-car-info-${i + 1}.svg`,
);
