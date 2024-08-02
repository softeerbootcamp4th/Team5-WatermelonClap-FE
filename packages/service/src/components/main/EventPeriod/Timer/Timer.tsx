import { css } from "@emotion/react";
import { motion, useAnimationControls } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import ReactCountdown from "react-countdown";
import type { CountdownProps, CountdownRendererFn } from "react-countdown";
import {
  IAnimatedCardBottomProps,
  IAnimatedCardProps,
  IFlipContainerProps,
  IStaticCardProps,
} from "./type";
import {
  animatedCardBottomStyles,
  animatedCardStyles,
  flipBoxStyles,
  flipContainerStyles,
  staticCardStyles,
  textStyles,
} from "./style";
import { theme } from "@watermelon-clap/core";

export const Timer = ({ date }: CountdownProps) => {
  return <ReactCountdown date={date} renderer={renderer} />;
};

const renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days,
}) => {
  if (completed) return null;
  return (
    <div
      css={css`
        background-color: ${theme.color.black};
        width: fit-content;
        margin: 0 auto;
        border-radius: 50px;
        box-shadow: 0 0 20px 10px ${theme.color.black};
        padding: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 1.25rem;
        `}
      >
        <FlipContainer number={days} title="days" />{" "}
        <span
          css={css`
            ${textStyles("", "days")};
            margin-right: 50px;
          `}
        >
          일
        </span>
        <FlipContainer number={hours} title="hours" />{" "}
        <span css={textStyles("", "")}>:</span>
        <FlipContainer number={minutes} title="mins" />{" "}
        <span css={textStyles("", "")}>:</span>
        <FlipContainer number={seconds} title="secs" />{" "}
      </div>
    </div>
  );
};

const FlipContainer = ({ number, title }: IFlipContainerProps) => {
  const { current, previous } = useMemo(() => {
    const currentDigit = number;
    const previousDigit = number + 1;

    const current =
      currentDigit < 10
        ? `0${currentDigit}`
        : (title === "secs" || title === "mins") && currentDigit === 60
          ? "00"
          : currentDigit;
    const previous =
      previousDigit < 10
        ? `0${previousDigit}`
        : (title === "secs" || title === "mins") && previousDigit === 60
          ? "00"
          : previousDigit;

    return { current, previous };
  }, [number]);

  return (
    <div css={flipContainerStyles}>
      <div css={flipBoxStyles}>
        <StaticCard position="upper" unit={current} title={title} />
        <StaticCard position="lower" unit={previous} title={title} />
        <AnimatedCard current={current} previous={previous} title={title} />
        <AnimatedCardBottom unit={current} title={title} />
      </div>
    </div>
  );
};

const StaticCard = ({ position, unit, title }: IStaticCardProps) => (
  <div css={staticCardStyles(position)}>
    <div css={textStyles(position === "upper" ? "50%" : "-50%", title)}>
      {unit}{" "}
    </div>
  </div>
);

const AnimatedCard = memo(
  ({ current, previous, title }: IAnimatedCardProps) => {
    const [displayUnit, setDisplayUnit] = useState(previous);
    const controls = useAnimationControls();

    useEffect(() => {
      controls.start({
        rotateX: [0, -180],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      setDisplayUnit(previous);
    }, [previous]);

    return (
      <motion.div
        id="animated-card"
        animate={controls}
        css={animatedCardStyles}
        onAnimationComplete={() => {
          setDisplayUnit(current);
          controls.set({ rotateX: 0 });
        }}
      >
        <div css={textStyles("50%", title)}>{displayUnit}</div>
      </motion.div>
    );
  },
);

const AnimatedCardBottom = ({ unit, title }: IAnimatedCardBottomProps) => {
  const [displayUnit, setDisplayUnit] = useState(unit);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      rotateX: [180, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    setDisplayUnit(unit);
  }, [unit]);

  return (
    <motion.div
      id="animated-card"
      animate={controls}
      css={animatedCardBottomStyles}
    >
      <div css={textStyles("-50%", title)}>{displayUnit}</div>
    </motion.div>
  );
};
