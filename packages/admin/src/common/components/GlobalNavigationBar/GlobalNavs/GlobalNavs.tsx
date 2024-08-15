import { Link, useLocation } from "react-router-dom";
import {
  linkStyles,
  navsContainerStyles,
  activeLinkStyles,
} from "./GlobalNavs.css";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  ORDER_EVENT_GENERATION_PAGE_ROUTE,
  ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE,
  PARTS_EVENT_GENERATION_PAGE_ROUTE,
  PARTS_EVENT_PARTICIPANT_MANAGEMENT_PAGE_ROUTE,
} from "@admin/constants/routes";

interface GlobalNavsProps {
  selectedCategory: "quiz" | "lottery";
}

const GlobalNavs = ({ selectedCategory }: GlobalNavsProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return selectedCategory === "quiz" ? (
    <div css={navsContainerStyles}>
      <Link
        to={ORDER_EVENT_MANAGEMENT_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(ORDER_EVENT_MANAGEMENT_PAGE_ROUTE) && activeLinkStyles,
        ]}
      >
        이벤트 관리
      </Link>
      <Link
        to={ORDER_EVENT_GENERATION_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(ORDER_EVENT_GENERATION_PAGE_ROUTE) && activeLinkStyles,
        ]}
      >
        이벤트 생성
      </Link>
      <Link
        to={ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE) &&
            activeLinkStyles,
        ]}
      >
        당첨자 관리
      </Link>
    </div>
  ) : (
    <div css={navsContainerStyles}>
      <Link
        to={PARTS_EVENT_GENERATION_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(PARTS_EVENT_GENERATION_PAGE_ROUTE) && activeLinkStyles,
        ]}
      >
        이벤트 생성
      </Link>
      <Link
        to={PARTS_EVENT_PARTICIPANT_MANAGEMENT_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(PARTS_EVENT_PARTICIPANT_MANAGEMENT_PAGE_ROUTE) &&
            activeLinkStyles,
        ]}
      >
        참여자 관리
      </Link>
      <Link
        to={ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE) &&
            activeLinkStyles,
        ]}
      >
        당첨자 뽑기
      </Link>
      <Link
        to={ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE}
        css={[
          linkStyles,
          isActive(ORDER_EVENT_WINNER_MANAGEMENT_PAGE_ROUTE) &&
            activeLinkStyles,
        ]}
      >
        당첨자 관리
      </Link>
    </div>
  );
};

export default GlobalNavs;
