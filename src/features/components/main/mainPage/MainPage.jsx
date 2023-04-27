import React, { useEffect, useState } from "react";

import mainLogo from "../../../img/Lost-and-Found-Logo.svg";
import Card from "./card/Card";

import "../../../styles/mainPage.scss";
import { Link } from "react-router-dom";
import Sort from "../sort/Sort";

const MainPage = ({ userName, posts, setPosts }) => {
  const [status, setStatus] = useState("all");

  const sortPosts = (posts, status) => {
    if (status === "all") {
      return [...posts];
    }
    return posts.filter((post) => post.status === status);
  };

  return (
    <section className="main">
      <div className="unlogin__headline">
        <img src={mainLogo} alt="" className="unlogin__headline-img" />
        <h1 className="unlogin__headline-title">
          Привіт, {userName}! Чим можемо допомогти?
        </h1>
      </div>

      <div className="main__section">
        <Link to={"/create"} className="main__section-btn-area">
          <button className="main__section-btn">Створити допис</button>
        </Link>

        <Sort status={status} setStatus={setStatus} />
        <div className="main__section-cards">
          {posts.length !== 0 ? (
            sortPosts(posts, status).map((card) => (
              <Card key={card.id} card={card} />
            ))
          ) : (
            <span className="empty">Дописи відсутні</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
