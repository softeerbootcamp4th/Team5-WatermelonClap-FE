import { MainBannerContent } from "./MainBannerContent";
import { GlobalNavigationBar } from "@service/common/components/GlobalNavigationBar";
import {
  mainBannerContentBoxStyles,
  mainBannerImgStyles,
  mainBannerSectionStyles,
} from "./MainBanner.css";

export const MainBanner = () => {
  return (
    <section css={mainBannerSectionStyles}>
      <img css={mainBannerImgStyles} src="/images/main-banner.png" />
      <div css={mainBannerContentBoxStyles}>
        <GlobalNavigationBar />
        <MainBannerContent />
      </div>
    </section>
  );
};
