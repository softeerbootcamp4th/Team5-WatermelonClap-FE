import { css } from "@emotion/react";

export const footerStyles = css`
  background-color: #111;
  color: #fff;
  padding: 20px;
  font-size: 14px;
  z-index: 999;
  /* 
  position: absolute;
  bottom: 0; */

  .inner-wrap {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-logo img {
    width: 150px;
  }

  .menu ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
  }

  .menu ul li a {
    color: #fff;
    text-decoration: none;
  }

  .menu .service {
    margin-top: 10px;
  }

  .menu .copyright {
    margin-top: 5px;
  }

  .social {
    display: flex;
    gap: 10px;
  }

  .social li a {
    color: #fff;
  }

  .family-site {
    position: relative;
  }

  .custom-selectbox button {
    background: none;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
  }

  .site-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    padding: 10px;
    list-style: none;
    width: 200px;
  }

  .footer-bottom ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .footer-bottom ul li {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .footer-bottom ul li img {
    width: 40px;
  }
`;
