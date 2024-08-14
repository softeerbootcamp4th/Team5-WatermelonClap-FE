import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { cardBaseStyles } from "./PartsCard.css";
import { theme } from "@watermelon-clap/core/src/theme";
import { useAuth } from "@watermelon-clap/core/src/hooks";
import { IParts } from "@watermelon-clap/core/src/types";
import { css } from "@emotion/react";
import {
  craftFireworks,
  craftSideCannons,
} from "@service/common/utils/confettiCrafter";
import { apiPostParts } from "@service/apis/partsEvent";

interface CardProps {
  backImage: string;
  color1?: string;
  color2?: string;
  isMouseOutAnimationEnabled: boolean;
  remainChance: number;
  setIsPickComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardWrapper = styled.div<{ color1: string; color2: string }>`
  ${cardBaseStyles}
  --color1: ${(props) => props.color1};
  --color2: ${(props) => props.color2};
`;

const CardSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  transform-origin: center;
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
  }

  &.show {
    opacity: 1;
  }
`;

export const PartsCard = ({
  backImage,
  color1 = "",
  color2 = "",
  isMouseOutAnimationEnabled,
  remainChance,
  setIsPickComplete,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLStyleElement>(document.createElement("style"));
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFrontShow, setIsFrontShow] = useState(false);
  const [partsInfo, setPartsInfo] = useState<IParts>();
  const { getIsLogin } = useAuth();

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const $card = cardRef.current;
    if (!$card) return;

    const pos =
      "touches" in e
        ? [e.touches[0].clientX, e.touches[0].clientY]
        : [e.nativeEvent.offsetX, e.nativeEvent.offsetY];

    const [l, t] = pos;
    const h = $card.offsetHeight;
    const w = $card.offsetWidth;
    const px = Math.abs(Math.floor((100 / w) * l) - 100);
    const py = Math.abs(Math.floor((100 / h) * t) - 100);
    const pa = 50 - px + (50 - py);
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7;
    const py_spark = 50 + (py - 50) / 7;
    const p_opc = 20 + Math.abs(pa) * 1.5;
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    const grad_pos = `background-position: ${lp}% ${tp}%;`;
    const sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opc = `opacity: ${p_opc / 100};`;
    const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;

    const style = `
      .card:hover:before { ${grad_pos} }
      .card:hover:after { ${sprk_pos} ${opc} }
      .card {
        --color1: ${color1};
        --color2: ${color2};
      }
    `;

    $card.classList.remove("active", "animated");
    $card.setAttribute("style", tf);
    styleRef.current.innerHTML += style;
  };

  const handleMouseOut = () => {
    const $card = cardRef.current;
    if (!$card) return;

    styleRef.current.innerHTML = "";
    $card.removeAttribute("style");

    if (isMouseOutAnimationEnabled) {
      setTimeout(() => {
        $card.classList.add("animated");
      }, 1000);
    }
  };

  const handleClick = () => {
    if (remainChance < 0 || !getIsLogin()) return;

    if (isFrontShow) {
      craftFireworks(1);
      return;
    }
    setIsFlipped(true);

    apiPostParts().then((data) => {
      setPartsInfo(data);

      setTimeout(() => {
        craftSideCannons(1);
        setIsFrontShow(true);
        setIsFlipped(false);
        setIsPickComplete(true);
      }, 3000);
    });
  };

  useEffect(() => {
    if (remainChance < 0) return;
    setIsFlipped(false);
    setIsFrontShow(false);
    setIsPickComplete(false);
  }, [remainChance]);

  return (
    <CardWrapper
      className={`card ${isFlipped ? "flipped" : ""}`}
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseOut}
      onTouchCancel={handleMouseOut}
      color1={color1}
      color2={color2}
    >
      <CardSide
        className={`card-front ${isFrontShow ? "show" : "hidden"}`}
        css={css`
          ${theme.flex.center}
          background-image: url(/images/parts/front.svg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        `}
      >
        <img
          src={partsInfo?.thumbnailImgSrc}
          width={
            partsInfo?.category === "COLOR" ||
            partsInfo?.category === "DRIVE_MODE"
              ? "100%"
              : "70%"
          }
          height="auto"
        ></img>
      </CardSide>
      <CardSide
        className={`card-back ${isFrontShow ? "hidden" : "show"}`}
        css={{ backgroundImage: `url(${backImage})` }}
      />
    </CardWrapper>
  );
};
