import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  AUTH_DEMO_PAGE_ROUTE,
  ROTATE_DEMO_PAGE_ROUTE,
  SCROLL_DEMO_PAGE_ROUTE,
  SCROLL_TEXT_DEMO_PAGE_ROUTE,
  MARQUEE_DEMO_PAGE_ROUTE,
  BUTTON_DEMO_PAGE_ROUTE,
  MODAL_DEMO_PAGE_ROUTE,
} from "../../constants/routes";

const linkStyles = css`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background-color: #a4e1ff;
  padding: 20px;
  :hover {
    background-color: #6c8fef;
  }
`;
export const DemoPage = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
        display: grid;
        padding: 20px;
        background-color: #f0f0f0;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
      `}
    >
      <Link to={SCROLL_DEMO_PAGE_ROUTE} css={linkStyles}>
        스크롤 데모
      </Link>
      <Link to={ROTATE_DEMO_PAGE_ROUTE} css={linkStyles}>
        회전 데모
      </Link>
      <Link to={AUTH_DEMO_PAGE_ROUTE} css={linkStyles}>
        로그인 데모
      </Link>
      <Link to={SCROLL_TEXT_DEMO_PAGE_ROUTE} css={linkStyles}>
        스크롤 텍스트 데모
      </Link>
      <Link to={MARQUEE_DEMO_PAGE_ROUTE} css={linkStyles}>
        마퀴 데모
      </Link>
      <Link to={BUTTON_DEMO_PAGE_ROUTE} css={linkStyles}>
        버튼 데모
      </Link>
      <Link to={MODAL_DEMO_PAGE_ROUTE} css={linkStyles}>
        모달 데모
      </Link>
    </div>
  );
};
