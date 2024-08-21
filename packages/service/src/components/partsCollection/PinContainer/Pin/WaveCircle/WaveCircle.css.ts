import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

export const containerStyle = css`
  perspective: 1000px;
  transform: rotateX(75deg) translateZ(0);
  position: absolute;
  z-index: 20;
  bottom: -1rem;
`;

export const circleStyle = css`
  position: absolute;
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);

  ${mobile(css`
    height: 3.25rem;
    width: 3.25rem;
  `)}
`;

export const animationVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  visible: {
    opacity: [0, 1, 0.5, 0],
    scale: 1,
    z: 0,
  },
};
