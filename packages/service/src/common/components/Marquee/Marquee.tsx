import { ReactNode } from "react";
import { marqueeContainerStyles, marqueeItemStyles } from "./Marquee.css";

interface MarqueeProps {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
  duration?: number | string; // number로 들어올 경우 s로 포맷팅 됩니다.
  gap?: number | string; // number로 들어올 경우 px로 포맷팅 됩니다.
}

export const Marquee = ({
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
    <div
      css={marqueeContainerStyles({
        pauseOnHover,
        duration: formattedDuration,
        gap: formattedGap,
      })}
      {...props}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div css={marqueeItemStyles({ reverse })} key={i}>
          {children}
        </div>
      ))}
    </div>
  );
};
