import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";

export const cardBaseStyles = css`
  width: 600px;
  aspect-ratio: 1.6 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 5%;
  transition:
    transform 0.5s ease,
    box-shadow 0.2s ease;
  will-change: transform, filter;
  cursor: pointer;

  ${mobile(css`
    width: 80vw;
  `)}

  &:hover {
    box-shadow:
      -20px -20px 30px -25px var(--color1),
      20px 20px 30px -25px var(--color2),
      -7px -7px 10px -5px var(--color1),
      7px 7px 10px -5px var(--color2),
      0 0 13px 4px rgba(255, 255, 255, 0.3),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity: 0.5;
    mix-blend-mode: color-dodge;
    transition: all 0.33s ease;
  }

  &:before {
    background-position: 50% 50%;
    background-size: 300% 300%;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      var(--color1) 25%,
      transparent 47%,
      transparent 53%,
      var(--color2) 75%,
      transparent 100%
    );
    filter: brightness(0.5) contrast(1);
    z-index: 1;
  }

  &:after {
    opacity: 1;
    background-image: url("/images/parts/sparkles.gif"),
      url("/images/parts/holo.png"),
      linear-gradient(
        125deg,
        #ff008450 15%,
        #fca40040 30%,
        #ffff0030 40%,
        #00ff8a20 60%,
        #00cfff40 70%,
        #cc4cfa50 85%
      );
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
  }

  &.active:after,
  &:hover:after {
    filter: brightness(1) contrast(1);
    opacity: 1;
  }

  &.active,
  &:hover {
    animation: none;
    transition: box-shadow 0.1s ease-out;
  }

  &.active:before,
  &:hover:before {
    background-image: linear-gradient(
      110deg,
      transparent 25%,
      var(--color1) 48%,
      var(--color2) 52%,
      transparent 75%
    );
    background-position: 50% 50%;
    background-size: 250% 250%;
    opacity: 0.88;
    filter: brightness(0.66) contrast(1.33);
    transition: none;
  }

  &.animated {
    transition: none;
    animation: holoCard 12s ease 0s 1;
  }

  &.animated:before {
    animation: holoGradient 12s ease 0s 1;
  }

  &.animated:after {
    animation: holoSparkle 12s ease 0s 1;
  }

  &.flipped {
    animation: rotateCard 3s ease forwards;
  }

  &.iphoneFlipped {
    animation: rotateShake 1s ease forwards;
  }

  @keyframes rotateShake {
    0% {
      transform: rotate(0deg);
      opacity: 1;
    }
    25% {
      transform: rotate(5deg);
      opacity: 0.7;
    }
    50% {
      transform: rotate(-5deg);
      opacity: 0.5;
    }
    75% {
      transform: rotate(5deg);
      opacity: 0.7;
    }
    100% {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @-webkit-keyframes rotateCard {
    0% {
      -webkit-transform: perspective(800px) rotateY(0deg) rotateX(0deg) scale(1);
      opacity: 1;
    }
    25% {
      -webkit-transform: perspective(800px) rotateY(20deg) rotateX(10deg)
        scale(1.1);
      opacity: 0.8;
    }
    50% {
      -webkit-transform: perspective(800px) rotateY(-20deg) rotateX(-10deg)
        scale(1.05);
      opacity: 0.6;
    }
    75% {
      -webkit-transform: perspective(800px) rotateY(0deg) rotateX(5deg)
        scale(1.1);
      opacity: 0.8;
    }
    95% {
      -webkit-transform: perspective(800px) rotateY(720deg) rotateX(0deg)
        scale(1.2);
      opacity: 0.9;
    }
    100% {
      -webkit-transform: perspective(800px) rotateY(720deg) rotateX(0deg)
        scale(1);
      opacity: 1;
    }
  }

  @keyframes holoSparkle {
    0%,
    100% {
      opacity: 0.75;
      filter: brightness(1.2) contrast(1.25);
    }

    5%,
    8% {
      opacity: 1;
      filter: brightness(0.8) contrast(1.2);
    }

    13%,
    16% {
      opacity: 0.5;
      filter: brightness(1.2) contrast(0.8);
    }

    35%,
    38% {
      opacity: 1;
      filter: brightness(1) contrast(1);
    }

    55% {
      opacity: 0.33;
      filter: brightness(1.2) contrast(1.25);
    }
  }

  @keyframes holoGradient {
    0%,
    100% {
      opacity: 0.5;
      filter: brightness(0.5) contrast(1);
    }

    5%,
    9% {
      opacity: 1;
      filter: brightness(0.75) contrast(1.25);
    }

    13%,
    17% {
      opacity: 0.88;
    }

    35%,
    39% {
      opacity: 1;
      filter: brightness(0.5) contrast(1);
    }

    55% {
      opacity: 1;
      filter: brightness(0.75) contrast(1.25);
    }
  }

  @keyframes holoCard {
    0%,
    100% {
      transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
    }

    13%,
    16% {
      transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
    }

    35%,
    38% {
      transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
    }

    55% {
      transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
    }
  }
`;
