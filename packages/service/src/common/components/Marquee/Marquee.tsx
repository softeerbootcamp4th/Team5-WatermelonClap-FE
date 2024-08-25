import { ReactNode, ReactElement } from "react";
import * as style from "./Marquee.css";
import { toPx, toS } from "@service/common/utils/formatter";

interface MarqueeItemProps {
  children: ReactNode;
}

const MarqueeItem = ({ children }: MarqueeItemProps) => {
  return <div css={style.marqueeItemStyles}>{children}</div>;
};

interface MarqueeProps {
  pauseOnHover?: boolean;
  reverse?: boolean;
  repeat?: number;
  duration?: number | string; // number로 들어올 경우 s로 포맷팅 됩니다.
  gap?: number | string; // number로 들어올 경우 px로 포맷팅 됩니다.
  children: Array<ReactElement<typeof MarqueeItem>>;
}

export const Marquee = ({
  pauseOnHover = false,
  reverse = false,
  repeat = 4,
  duration = "40s",
  gap = "2rem",
  children,
  ...props
}: MarqueeProps) => {
  const formattedDuration = toS(duration);
  const formattedGap = toPx(gap);

  const repeatedChildren = Array.from({ length: repeat }).flatMap(
    () => children,
  );

  return (
    <div
      css={style.marqueeStyles({
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
