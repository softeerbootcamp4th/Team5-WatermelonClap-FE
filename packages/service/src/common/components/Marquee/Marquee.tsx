import { ReactNode } from "react";
import { MarqueeContainer, MarqueeItem } from "./Marquee.css";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
  duration?: number | string; // number로 들어올 경우 s로 포맷팅 됩니다.
  gap?: number | string; // number로 들어올 경우 px로 포맷팅 됩니다.
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  ...props
}: MarqueeProps) => {
  const formattedDuration =
    typeof duration === "number" ? `${duration}s` : duration;

  const formattedGap = typeof gap === "number" ? `${gap}px` : gap;

  return (
    <MarqueeContainer
      className={className}
      pauseOnHover={pauseOnHover}
      duration={formattedDuration}
      gap={formattedGap}
      {...props}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <MarqueeItem key={i} reverse={reverse}>
          {children}
        </MarqueeItem>
      ))}
    </MarqueeContainer>
  );
};
