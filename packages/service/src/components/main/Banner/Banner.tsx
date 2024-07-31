import { useState, useEffect, useRef, useCallback } from "react";
import { Button, ButtonVariant } from "src/common/components/Button";
import { baseStyles, theme } from "@watermelon-clap/core";
import { css } from "@emotion/react";
import * as style from "./style";

const bannerImgs = [
  "images/mainBanner/main-banner-1.svg",
  "images/mainBanner/main-banner-2.svg",
  "images/mainBanner/main-banner-3.svg",
  "images/mainBanner/main-banner-4.svg",
  "images/mainBanner/main-banner-5.svg",
];

export const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerDivRef = useRef<HTMLDivElement>(null);
  const BANNERSPEED = 3000;

  // banner height 조정 로직
  const adjustBannerHeight = useCallback((img: HTMLImageElement) => {
    if (bannerDivRef.current) {
      bannerDivRef.current.style.height = `${img.height}px`;
    }
  }, []);

  // 이미지를 처음 load 했을 때 (onLoad) 해당 높이를 banner height로 지정
  const handleImageLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      adjustBannerHeight(event.currentTarget);
    },
    [adjustBannerHeight],
  );

  // resize event listener에 들어가는 함수
  // 첫번째 img를 가져와서 adjustBannerHeight에 주입
  const handleResize = useCallback(() => {
    const currentImage = bannerDivRef.current?.querySelector("img");
    if (currentImage instanceof HTMLImageElement) {
      adjustBannerHeight(currentImage);
    }
  }, [adjustBannerHeight]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImgs.length);
    }, BANNERSPEED);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [handleResize]);

  return (
    <section css={style.container}>
      <div ref={bannerDivRef}>
        {bannerImgs.map((img, index) => (
          <img
            onLoad={handleImageLoad}
            key={index}
            src={img}
            css={style.bannerImg({ index, currentIndex })}
          />
        ))}
      </div>
      <div css={style.bannerContent}>
        <h1
          css={css`
            ${theme.font.pretend.semiBold.headSB86};
            color: ${theme.color.white};
            font-size: calc(30px + 2.4vw);
          `}
        >
          AVANTE N
        </h1>
        <h2
          css={[
            theme.font.pretend.bold.titleB38,
            css`
              color: ${theme.color.white};
              font-size: calc(12px + 1.5vw);
            `,
          ]}
        >
          최대 290마력, 일상형 스포츠카 출시
        </h2>

        <div css={baseStyles.margin.mg32}></div>

        <div
          css={css`
            ${baseStyles.flex.center};
            ${baseStyles.gap.gap16}
            justify-content: right;
          `}
        >
          <Button variant={ButtonVariant.SMALL_DARK}>자세히 보기</Button>
          <Button variant={ButtonVariant.SMALL_LIGHT}>이벤트 바로 가기</Button>
        </div>
      </div>
    </section>
  );
};
