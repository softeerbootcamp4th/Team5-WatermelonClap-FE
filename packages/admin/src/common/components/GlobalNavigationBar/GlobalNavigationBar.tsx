import { useState, useEffect } from "react";
import {
  headerContainerStyles,
  logoStyles,
  topStyle,
  buttonStyles,
} from "./GlobalNavigationBar.css";
import { ReactComponent as LogoLong } from "public/images/gnb/logo-long.svg";
import { useNavigate, useLocation } from "react-router-dom";
import GlobalNavs from "./GlobalNavs/GlobalNavs";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  PARTS_EVENT_GENERATION_PAGE_ROUTE,
} from "@admin/constants/routes";
import { theme } from "@watermelon-clap/core/src/theme";
import { css } from "@emotion/react";

export const GlobalNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<"order" | "parts">(
    "order",
  );

  useEffect(() => {
    if (location.pathname.includes("order")) {
      setSelectedCategory("order");
    } else if (location.pathname.includes("parts")) {
      setSelectedCategory("parts");
    }
  }, [location]);

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
          css={buttonStyles(selectedCategory === "order")}
          onClick={() => {
            setSelectedCategory("order");
            navigate(ORDER_EVENT_MANAGEMENT_PAGE_ROUTE);
          }}
        >
          N 퀴즈 선착순 이벤트
        </button>
        <button
          css={buttonStyles(selectedCategory === "parts")}
          onClick={() => {
            setSelectedCategory("parts");
            navigate(PARTS_EVENT_GENERATION_PAGE_ROUTE);
          }}
        >
          내 아반떼 N 뽑기 이벤트
        </button>
      </div>
    </header>
  );
};
