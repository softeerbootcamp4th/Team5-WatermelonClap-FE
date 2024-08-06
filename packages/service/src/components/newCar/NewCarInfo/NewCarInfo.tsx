import * as style from "./NewCarInfo.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import { useEffect, useRef, useState } from "react";

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

  return (
    <>
      <section ref={ref}>
        <div css={style.scrollContainer}>
          <div css={style.stickyWrap}>
            <motion.div ref={carouselRef} style={{ x }}>
              <img
                src="images/newCar/new-car-scroll-img.svg"
                css={style.infoImg}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
