import { marqueeStyles, marqueeItemStyles } from "./Marquee.css";
import { ReactNode, ReactElement, Children } from "react";

interface MarqueeItemProps {
  children: ReactNode;
}

const MarqueeItem = ({ children }: MarqueeItemProps) => {
  return <div css={marqueeItemStyles}>{children}</div>;
};

interface MarqueeProps {
  pauseOnHover?: boolean;
  reverse?: boolean;
  repeat?: number;
  duration?: number | string; // number로 들어올 경우 s로 포맷팅 됩니다.
  gap?: number | string; // number로 들어올 경우 px로 포맷팅 됩니다.
  children: Array<ReactElement<typeof MarqueeItem>>;
}

const Marquee = ({
  pauseOnHover = false,
  reverse = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  children,
  ...props
}: MarqueeProps) => {
  const formattedDuration =
    typeof duration === "number" ? `${duration}s` : duration;

  const formattedGap = typeof gap === "number" ? `${gap}px` : gap;

  const repeatedChildren = Children.toArray(children).flatMap((child) =>
    Array(repeat).fill(child),
  );

  return (
    <div
      css={marqueeStyles({
        pauseOnHover,
        reverse,
        duration: formattedDuration,
        gap: formattedGap,
      })}
      {...props}
    >
      {repeatedChildren}
    </div>
  );
};

Marquee.Item = MarqueeItem;

export default Marquee;
