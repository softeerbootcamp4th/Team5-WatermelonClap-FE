import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const footerStyles = css`
  position: relative;
  z-index: 2;
  padding: 40px 20px;
  background-color: #1c1b1b;
  ${theme.font.preM14}
  color: ${theme.color.white};
  font-size: 14px;

  .inner-wrap {
    width: 100%;
    min-width: 800px;
    max-width: 1120px;
    margin: 0 auto;
  }

  .footer-top {
    display: flex;
    align-items: flex-start;
  }

  .footer-logo {
    margin-right: 80px;
  }

  .footer-logo img {
    border-style: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 80px;
    color: ${theme.color.gray400};
  }

  .menu .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .menu .links .link-group {
    display: flex;
    gap: 20px;
  }

  .menu .links .link-group a {
    text-decoration: none;
    color: ${theme.color.gray400};
    &:hover {
      color: ${theme.color.white};
    }
  }

  .menu .contact,
  .menu .copyright {
    font-size: 14px;
  }

  .menu .copyright {
    font-size: 12px;
  }

  .social {
    margin-bottom: 20px;
  }

  .social li {
    width: 30px;
    height: 30px;
    background: url(https://www.hyundai.com/static/images/ico_social.png)
      no-repeat;
    background-size: contain;
  }

  .social li a {
    display: block;
    width: 30px;
    height: 30px;
    color: ${theme.color.white};
    text-decoration: none;
  }

  .site {
    right: 0;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .site .social {
    display: flex;
    gap: 10px;
  }

  .site .family-site,
  .site .custom-selectbox {
    display: flex;
    align-items: center;
  }

  .custom-selectbox button {
    background: none;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }

  .footer-bottom {
    margin-top: 40px;
    padding-top: 22px;
    border-top: 1px solid #2a2a2a;
    color: ${theme.color.gray400};
  }

  .footer-bottom ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 11px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-bottom ul li {
    display: flex;
    flex: 0 0 25%;
    box-sizing: border-box;
    padding: 10px;
    padding-left: 0px;
    font-size: 12px;
  }

  .footer-bottom ul li img {
    float: left;
    padding-right: 10px;
    height: 40px;
  }
`;
