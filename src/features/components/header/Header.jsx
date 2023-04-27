import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../img/lost-and-found-label.svg";
import login from "../../img/login-member-icon-png.svg";

import "../../styles/header.scss";

const Header = ({ isLogin, setIsLogin, userName }) => {
  return (
    <header className="header">
      <div className="header__menu">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="navigation">
          <Link className="navigation__item" to="/">
            Головна
          </Link>
          <Link className="navigation__item" to="/contacts">
            Контакти
          </Link>
          {/* <Link className="navigation__item" to="/settings">
            Налаштування
          </Link> */}
          <a
            href="https://lpnu.ua/"
            className="navigation__item"
            target="_blank"
          >
            Про університет
          </a>
        </nav>
        {isLogin ? (
          <div className="login">
            <img src={login} alt="Login img" className="login__img" />

            <div className="login__content">
              <span className="login__info">Hello, {userName}</span>
              <button className="header__button-login">
                <Link
                  className="header__button-login-link"
                  to="/"
                  onClick={() => setIsLogin(false)}
                >
                  Вийти
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <button className="header__button">
            <Link className="header__button-link" to="/login">
              Увійти
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
