import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core/src/theme";

export const footerStyles = css`
  position: relative;
  z-index: 2;
  padding: 40px 10%;
  background-color: #1c1b1b;
  ${theme.font.preM14}
  color: ${theme.color.white};

  ${mobile(css`
    padding: 20px 20px;
  `)}

  .inner-wrap {
    width: 100%;
    margin: 0 auto;

    ${mobile(css`
      min-width: 100px;
    `)}
  }

  .footer-top {
    display: flex;

    ${mobile(css`
      flex-direction: row;
    `)}
  }

  .footer-logo {
    margin-right: 80px;

    ${mobile(css`
      margin-right: 16px;
    `)}
  }

  .footer-logo img {
    border-style: none;

    ${mobile(css`
      width: 40px;
    `)}
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 80px;
    color: ${theme.color.gray400};

    ${mobile(css`
      margin-right: 0;
      padding-bottom: 20px;
    `)}
  }

  .menu .links {
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${mobile(css`
      display: none;
    `)}
  }

  .menu .links .link-group {
    display: flex;
    gap: 20px;

    ${mobile(css`
      display: inline;
      flex-wrap: wrap;
    `)}
  }

  .menu .links .link-group a {
    text-decoration: none;
    color: ${theme.color.gray400};
    &:hover {
      color: ${theme.color.white};
    }
  }

  .menu .contact {
    font-size: 14px;

    ${mobile(css`
      padding-bottom: 20px;
    `)}
  }

  .copyright {
    font-size: 12px;
  }

  .copyright-logo {
    display: none;

    ${mobile(css`
      margin-right: 80px;
    `)}
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

    ${mobile(css`
      display: none;
    `)}
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
