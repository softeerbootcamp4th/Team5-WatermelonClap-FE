import {
  headerContainerStyles,
  logoStyles,
  topStyle,
} from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import { useNavigate } from "react-router-dom";
import GlobalNavs from "./GlobalNavs/GlobalNavs";
import { MAIN_PAGE_ROUTE } from "@admin/constants/routes";
import { theme } from "@watermelon-clap/core/src/theme";
import { css } from "@emotion/react";

export const GlobalNavigationBar = () => {
  const navigate = useNavigate();
  return (
    <header css={headerContainerStyles}>
      <div css={topStyle}>
        <div css={[theme.flex.center, theme.gap.gap16]}>
          <LogoLong
            css={logoStyles}
            onClick={() => {
              navigate(MAIN_PAGE_ROUTE);
            }}
          />
          <span>Admin</span>
        </div>

        <GlobalNavs />
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: start;
          padding-bottom: 6px;
        `}
      >
        아반떼 N 신차 이벤트
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: start;
        `}
      >
        N 퀴즈 선착순 이벤트 | 내 아반떼 N 뽑기 이벤트
      </div>
    </header>
  );
};
