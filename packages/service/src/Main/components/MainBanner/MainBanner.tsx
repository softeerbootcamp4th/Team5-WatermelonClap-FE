import { MainBannerContent } from "./MainBannerContent";
import { AppHeader } from "@service/common/components/AppHeader";
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
        <AppHeader />
        <MainBannerContent />
      </div>
    </section>
  );
};
