import { css } from "@emotion/react";
import { pageLayoutStyles } from "../../common/styles/pageLayoutStyles";
import { MainBanner } from "../components/MainBanner/MainBanner";
import { Game } from "../components/Game/Game";
import { VirtualScrollBar } from "@service/common/components/VirtualScrollBar";
import { useRef } from "react";
import { hideScrollBarStyle } from "@service/common/styles/hideScrollBarStyle";
import { Link } from "react-router-dom";
import { DEMO_PAGE_ROUTE } from "@service/constants/routes";
import AssetLoaderOverlay from "@service/common/components/AssetLoaderOverlay/Overlay";
import AssetWrapper from "@service/common/components/AssetLoaderOverlay/AssetWrapper";

export const MainPage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const imageUrls = Array.from(
    { length: 10 },
    (_, index) => `https://picsum.photos/800/600?img=${index + 1}`,
  );

  return (
    <div
      css={css`
        ${pageLayoutStyles}
        ${hideScrollBarStyle}
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 24px;
      `}
      ref={scrollTargetRef}
    >
      <AssetLoaderOverlay />
      <MainBanner />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        `}
      >
        {imageUrls.map((url, index) => (
          <AssetWrapper
            key={index}
            src={url}
            alt={`test ${index + 1}`}
            css={css`
              width: 100px;
              height: auto;
            `}
          />
        ))}
      </div>

      <Game />
      <VirtualScrollBar scrollTargetRef={scrollTargetRef} />
      <Link
        to={DEMO_PAGE_ROUTE}
        css={css`
          background-color: #a4e1ff;
          border-radius: 50%;
          position: fixed;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          text-decoration: none;
          bottom: 20px;
          right: 20px;
        `}
      >
        개발자
      </Link>
    </div>
  );
};
