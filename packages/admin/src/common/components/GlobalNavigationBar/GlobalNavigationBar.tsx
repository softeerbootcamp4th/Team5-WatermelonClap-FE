import { useState } from "react";
import {
  headerContainerStyles,
  logoStyles,
  topStyle,
  buttonStyles,
} from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import { useNavigate } from "react-router-dom";
import GlobalNavs from "./GlobalNavs/GlobalNavs";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  PARTS_EVENT_GENERATION_PAGE_ROUTE,
} from "@admin/constants/routes";
import { theme } from "@watermelon-clap/core/src/theme";
import { css } from "@emotion/react";

export const GlobalNavigationBar = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<"quiz" | "lottery">(
    "quiz",
  );

  return (
    <header css={headerContainerStyles}>
      <div css={topStyle}>
        <div css={[theme.flex.center, theme.gap.gap16]}>
          <LogoLong
            css={logoStyles}
            onClick={() => {
              navigate(ORDER_EVENT_MANAGEMENT_PAGE_ROUTE);
            }}
          />
          <span>Admin</span>
        </div>

        <GlobalNavs selectedCategory={selectedCategory} />
      </div>

      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: start;
          padding-bottom: 6px;
        `}
      >
        <button
          css={buttonStyles(selectedCategory === "quiz")}
          onClick={() => {
            setSelectedCategory("quiz");
            navigate(ORDER_EVENT_MANAGEMENT_PAGE_ROUTE);
          }}
        >
          N 퀴즈 선착순 이벤트
        </button>
        <button
          css={buttonStyles(selectedCategory === "lottery")}
          onClick={() => {
            setSelectedCategory("lottery");
            navigate(PARTS_EVENT_GENERATION_PAGE_ROUTE);
          }}
        >
          내 아반떼 N 뽑기 이벤트
        </button>
      </div>
    </header>
  );
};
