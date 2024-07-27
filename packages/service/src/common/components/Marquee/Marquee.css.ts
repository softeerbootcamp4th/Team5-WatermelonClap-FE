import { css, keyframes } from "@emotion/react";

interface MarqueeItemStylesProps {
  reverse: boolean;
}

interface MarqueeContainerStylesProps {
  pauseOnHover: boolean;
  duration: string;
  gap: string;
}

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const marqueeItemStyles = ({ reverse }: MarqueeItemStylesProps) => css`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  gap: var(--gap);
  animation: ${marqueeAnimation} var(--duration) linear infinite;
  animation-direction: ${reverse ? "reverse" : "normal"};
  animation-play-state: running;
`;

export const marqueeContainerStyles = ({
  pauseOnHover,
  duration,
  gap,
}: MarqueeContainerStylesProps) => css`
  display: flex;
  overflow: hidden;
  padding: 2rem;
  --duration: ${duration};
  --gap: ${gap};
  gap: var(--gap);

  &:hover {
    ${pauseOnHover &&
    `
      div {
        animation-play-state: paused;
      }
    `}
  }
`;
