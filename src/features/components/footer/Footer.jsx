import React from "react";
import { Link } from "react-router-dom";

import twitterLogo from "../../img/Twitter.svg";
import facebookLogo from "../../img/Facebook.svg";
import linkedinLogo from "../../img/Linkedin.svg";

import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <nav className="footer__menu">
          <Link className="footer__menu-item" to="/">
            Головна
          </Link>
          <Link className="footer__menu-item" to="/contacts">
            Контакти
          </Link>
          <a
            href="https://lpnu.ua/"
            className="footer__menu-item"
            target="_blank"
          >
            Про університет
          </a>
        </nav>
        <div className="footer__social">
          <h3 className="footer__social-title">Social media</h3>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__social-item"
          >
            <img src={twitterLogo} alt="Twitter Link" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="footer__social-item"
          >
            <img src={facebookLogo} alt="Facebook Link" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="footer__social-item"
          >
            <img src={linkedinLogo} alt="LinkedIn Link" />
          </a>
        </div>
      </div>
      <div className="footer__contacts">
        <span className="footer__contacts-item">2023 Leheza Yelyzaveta.</span>
        <span className="footer__contacts-item"> All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
