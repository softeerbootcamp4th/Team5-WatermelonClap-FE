import { css } from "@emotion/react";
import { motion, MotionValue } from "framer-motion";
import { useEffect, useState, useMemo, RefObject } from "react";
import { theme } from "@watermelon-clap/core/src/theme";
import { bodyStyles, carStyles, containerStyles } from "./TracingCar.css";
import { useMobile } from "@service/common/hooks/useMobile";
import {
  generateSinPath,
  generateVerticalSinPath,
} from "../util/pathGenerator";

interface TracingCarProps {
  x: MotionValue<number>;
  imgViewRef: RefObject<HTMLDivElement>;
  screenViewRef?: RefObject<HTMLDivElement>;
}

export const TracingCar = ({
  x,
  imgViewRef,
  screenViewRef,
}: TracingCarProps) => {
  const isMobile = useMobile();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [offsetDistance, setOffsetDistance] = useState(0);

  const pathData = useMemo(() => {
    if (isMobile)
      return generateVerticalSinPath(width / 3, 5, width, height, width);
    else return generateSinPath(300, 10, height, 1000, width);
  }, [isMobile, width, height]);

  useEffect(() => {
    if (isMobile) {
      setHeight(imgViewRef.current?.clientHeight as number);
      setWidth(imgViewRef.current?.clientWidth as number);
    } else {
      setHeight((imgViewRef.current?.clientWidth as number) - 400);
      setWidth(screenViewRef?.current?.clientWidth as number);
    }
  }, [
    imgViewRef.current?.clientHeight,
    imgViewRef.current?.clientWidth,
    screenViewRef?.current?.clientWidth,
  ]);

  useEffect(() => {
    const updateOffsetDistance = () => {
      let newOffset;

      if (isMobile) {
        const pivotHeight = height - 270;
        const innerHeight = window.innerHeight;
        const prevY = x.getPrevious() as number;
        const curY = x.get();
        const diffY = prevY - curY;
        const offsetY = diffY > 0 ? innerHeight * 0.1 : innerHeight * 0.6;

        console.log(offsetY);

        newOffset =
          ((x.get() * pivotHeight + offsetY) / (pivotHeight + offsetY)) * 100;
      } else {
        const prevX = x.getPrevious() as number;
        const curX = x.get();
        const diffX = prevX - curX;
        const offsetX = diffX > 0 ? width * 0.8 : width * 0.2;
        newOffset = ((Math.abs(x.get()) + offsetX) / height) * 100;
      }

      if (isNaN(newOffset) || !isFinite(newOffset)) {
        newOffset = 0;
      }

      setOffsetDistance(newOffset);
    };

    const unsubscribe = x.onChange(() => {
      requestAnimationFrame(updateOffsetDistance);
    });

    return () => unsubscribe();
  }, [x, isMobile, width, height]);

  return (
    <div css={bodyStyles}>
      <div css={containerStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          css={css`
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: contain;
          `}
        >
          <motion.path
            d={pathData}
            fill="transparent"
            strokeWidth="2"
            stroke={theme.color.gray500}
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          css={css`
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: contain;
          `}
        >
          <motion.path
            d={pathData}
            fill="transparent"
            strokeWidth="2"
            stroke={theme.color.eventBlue}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: offsetDistance / 100 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <motion.img
          src="images/newCar/tracingCar.svg"
          css={carStyles(pathData)}
          initial={{ offsetDistance: "0%", scale: 1 }}
          animate={{
            offsetDistance: `${offsetDistance}%`,
            scale: 1,
          }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};
