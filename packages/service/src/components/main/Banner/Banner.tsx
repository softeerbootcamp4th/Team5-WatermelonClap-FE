import { useState, useEffect } from "react";
import { baseStyles, theme } from "@watermelon-clap/core";
import * as style from "./style";
import { css } from "@emotion/react";
import { Button, ButtonVariant } from "src/common/components/Button";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 배너 넘어가는 속도
  const BANNERSPEED = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImgs.length);
    }, BANNERSPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <section css={style.container}>
      <div>
        {bannerImgs.map((img, index) => (
          <img
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

const bannerImgs = [
  "@service/../public/images/mainBanner/main-banner-1.svg",
  "@service/../public/images/mainBanner/main-banner-2.svg",
  "@service/../public/images/mainBanner/main-banner-3.svg",
  "@service/../public/images/mainBanner/main-banner-4.svg",
  "@service/../public/images/mainBanner/main-banner-5.svg",
];
