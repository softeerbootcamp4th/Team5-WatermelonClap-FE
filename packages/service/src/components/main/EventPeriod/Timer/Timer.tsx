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
  rendererWrap1,
  rendererWrap2,
  staticCardStyles,
  textStyles,
} from "./Timer.css";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

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
    <div css={rendererWrap1}>
      <div css={rendererWrap2}>
        <div css={[theme.flex.center, theme.gap.gap4]}>
          <span css={[textStyles("", "days")]}>D</span>
          <span css={[textStyles("", "days")]}>-</span>
          <FlipContainer number={days} title="days" />{" "}
        </div>
        <div
          css={mobile(css`
            margin-right: 10px;
          `)}
        ></div>
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
