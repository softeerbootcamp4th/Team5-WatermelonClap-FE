import { css } from "@emotion/react";
import { pageLayoutStyles } from "../../common/styles/pageLayoutStyles";
import { MainBanner } from "../components/MainBanner/MainBanner";
import { Game } from "../components/Game/Game";
import { VirtualScrollBar } from "@service/common/components/VirtualScrollBar";
import { useRef } from "react";
import { hideScrollBarStyle } from "@service/common/styles/hideScrollBarStyle";
import { Link } from "react-router-dom";
import { DEMO_PAGE_ROUTE } from "@service/constants/routes";

export const MainPage = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null);
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
      <MainBanner />
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
        개발
      </Link>
    </div>
  );
};
