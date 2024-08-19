import { css, keyframes } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

interface MarqueeStylesProps {
  pauseOnHover: boolean;
  reverse: boolean;
  duration: string;
  gap: string;
}

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(-300vw);
  }
`;

const mobileMarqueeAnimation = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(-700vw);
  }
`;

export const marqueeItemStyles = css`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  animation: ${marqueeAnimation} var(--duration) linear infinite;
  ${mobile(css`
    animation: ${mobileMarqueeAnimation} var(--duration) linear infinite;
  `)}
  animation-direction: var(--direction);
  animation-play-state: running;
`;

export const marqueeStyles = ({
  pauseOnHover,
  reverse,
  duration,
  gap,
}: MarqueeStylesProps) => css`
  display: flex;
  overflow: hidden;
  padding: 20px 2rem;
  gap: ${gap};
  --duration: ${duration};
  --direction: ${reverse ? "reverse" : "normal"};

  &:hover {
    ${pauseOnHover &&
    `div {
        animation-play-state: paused;
      }
    `}
  }
`;
