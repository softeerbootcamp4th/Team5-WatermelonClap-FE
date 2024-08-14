import { Link } from "react-router-dom";
import { linkStyles, navsContainerStyles } from "./GlobalNavs.css";
import {
  ORDER_EVENT_MANAGEMENT_PAGE_ROUTE,
  ORDER_EVENT_GENERATION_PAGE_ROTUE,
  ORDER_EVENT_WINNER_MANAGEMENT_PATE_ROUTE,
} from "@admin/constants/routes";

const GlobalNavs = () => {
  return (
    <div css={navsContainerStyles}>
      <Link to={ORDER_EVENT_MANAGEMENT_PAGE_ROUTE} css={linkStyles}>
        이벤트 관리
      </Link>
      <Link to={ORDER_EVENT_GENERATION_PAGE_ROTUE} css={linkStyles}>
        이벤트 생성
      </Link>
      <Link to={ORDER_EVENT_WINNER_MANAGEMENT_PATE_ROUTE} css={linkStyles}>
        당첨자 관리
      </Link>
    </div>
  );
};

export default GlobalNavs;
