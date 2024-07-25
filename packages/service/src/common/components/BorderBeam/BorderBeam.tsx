import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorSperator?: string;
  colorTo?: string;
}
/**
 * background: transparent;는 안된다.
 */
const BorderBeam: FC<PropsWithChildren<BorderBeamProps>> = ({
  className,
  duration = 10,
  colorFrom = "#032146",
  colorSperator = "#c3f2ff",
  colorTo = "#b00",
  children,
}) => {
  return (
    <div
      css={css`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        background-color: white;
        position: relative;
        &::before,
        &::after {
          content: "";
          position: absolute;
          inset: -0.2rem;
          z-index: -1;
          background: linear-gradient(
            var(--angle),
            ${colorFrom},
            ${colorSperator},
            ${colorTo}
          );
          border-radius: inherit;
          animation: rotate ${duration}s linear infinite;
        }
        &::after {
          filter: blur(10px);
        }
        @keyframes rotate {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }
      `}
      className={className}
      children={children}
    />
  );
};

export default BorderBeam;
