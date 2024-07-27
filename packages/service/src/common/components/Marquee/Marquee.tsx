import { ReactNode, useState } from "react";
import { MarqueeContainer, MarqueeItem } from "./Marquee.css";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  ...props
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <MarqueeContainer
      vertical={vertical}
      className={className}
      pauseOnHover={pauseOnHover}
      isPaused={isPaused}
      duration={duration}
      {...props}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <MarqueeItem
          key={i}
          vertical={vertical}
          reverse={reverse}
          isPaused={isPaused}
        >
          {children}
        </MarqueeItem>
      ))}
    </MarqueeContainer>
  );
};
