import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MarqueeItem = styled.div<{
  reverse: boolean;
}>`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  gap: var(--gap);
  animation: ${marqueeAnimation} var(--duration) linear infinite;
  animation-direction: ${({ reverse }) => (reverse ? "reverse" : "normal")};
  animation-play-state: running;
`;

export const MarqueeContainer = styled.div<{
  pauseOnHover: boolean;
  duration: string;
  gap: string;
}>`
  display: flex;
  overflow: hidden;
  padding: 2rem;
  --duration: ${({ duration }) => duration};
  --gap: ${({ gap }) => gap};
  gap: var(--gap);

  &:hover {
    ${({ pauseOnHover }) =>
      pauseOnHover &&
      `
      div.marquee-item {
        animation-play-state: paused;
      }
    `}
  }
`;
