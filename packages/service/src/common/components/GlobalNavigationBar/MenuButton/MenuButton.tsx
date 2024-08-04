import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";
import { motion, Transition } from "framer-motion";

interface IMenuButtonProps {
  isOpen?: boolean;
  transition?: Transition;
  onClick: () => void;
}

export const MenuButton = ({ isOpen = false, onClick }: IMenuButtonProps) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };

  const lineProps = {
    stroke: theme.color.white,
    strokeWidth: 3,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { ease: "easeOut", duration: 0.2 },
  };
  const unitHeight = 4.1;
  const unitWidth = (unitHeight * 30) / 22;

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={30}
      height={22}
      onClick={onClick}
      css={css`
        cursor: pointer;
      `}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};
