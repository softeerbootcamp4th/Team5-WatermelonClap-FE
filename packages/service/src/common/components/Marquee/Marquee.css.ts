import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const marqueeHorizontalAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const marqueeVerticalAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const MarqueeItem = styled.div<{
  vertical: boolean;
  reverse: boolean;
  isPaused: boolean;
}>`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  gap: var(--gap);
  ${({ vertical }) => css`
    animation: ${vertical
        ? marqueeVerticalAnimation
        : marqueeHorizontalAnimation}
      var(--duration) linear infinite;
  `}
  animation-direction: ${({ reverse }) => (reverse ? "reverse" : "normal")};
  animation-play-state: ${({ isPaused }) => (isPaused ? "paused" : "running")};
`;

export const MarqueeContainer = styled.div<{
  vertical: boolean;
  pauseOnHover: boolean;
  isPaused: boolean;
  duration: number;
}>`
  display: flex;
  overflow: hidden;
  padding: 2rem;
  --duration: ${({ duration }) => `${duration}s`};
  --gap: 1rem;
  gap: var(--gap);
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};

  &:hover {
    .marquee-item {
      animation-play-state: ${({ pauseOnHover }) =>
        pauseOnHover ? "paused" : "running"};
    }
  }
`;
