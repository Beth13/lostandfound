import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/unloginPage.scss";

import mainLogo from "../../../img/Lost-and-Found-Logo.svg";
import firstPic from "../../../img/Team.jpg";
import secongPic from "../../../img/app-notification-smartphone.png";

const UnloginPage = () => {
  return (
    <section className="unlogin">
      <div className="unlogin__headline">
        <img src={mainLogo} alt="" className="unlogin__headline-img" />
        <h1 className="unlogin__headline-title">Знаходьте швидко та легко!</h1>
      </div>
      <div className="unlogin__section">
        <div className="unlogin__section-article">
          <h4 className="unlogin__section-title">Хто ми?</h4>
          <span className="unlogin__section-span">
            Ми амбіційна команда чудових людей, що вирішила оживити наші нові та
            цікаві ідеї та допомогти в пошуку або поверненню ваших речей.
          </span>
        </div>
        <img className="unlogin__section-img" src={firstPic} alt="" />
      </div>
      <div className="unlogin__section">
        <img className="unlogin__section-img" src={secongPic} alt="" />
        <div className="unlogin__section-article">
          <h4 className="unlogin__section-title">Як все працює?</h4>
          <span className="unlogin__section-span">
            Після ідентифікації на сайті ви можете розмістити власний допис або
            ж передивитись всі наявні дописи, і мати змогу зв'язатись із автором
            посту власноруч. Також наявна функція автоматичного оповіщення на
            вашу корпоративну пошту після опублікування кимось нового посту.
          </span>
        </div>
      </div>
      <div className="unlogin__section last">
        <div className="unlogin__section-article last-article">
          <h4 className="unlogin__section-title">
            Як розпочати роботу з платформою?
          </h4>
          <span className="unlogin__section-span">
            Все просто! Якщо ви є студентом університету, просто увійдіть за
            допомогою ваших контактних даних, які були вам видані при вступі до
            навчального закладу.
          </span>
        </div>
        <button className="unlogin__section-btn last-btn">
          <Link className="header__button-link" to="/login">
            Увійти
          </Link>
        </button>
      </div>
    </section>
  );
};

export default UnloginPage;
