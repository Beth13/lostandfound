import React from "react";

import mainLogo from "../../img/Lost-and-Found-Logo.svg";

import "../../styles/contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="unlogin__headline">
        <img src={mainLogo} alt="" className="unlogin__headline-img" />
        <h1 className="unlogin__headline-title">Інформація для зв'язку</h1>
      </div>

      <div className="contacts__section">
        <h2 className="contacts__section-title">
          В разі виникнення будь-яких проблем чи запитань, звертайтеся до
          будь-якого з наших операторів:
        </h2>

        <main className="leaderboard__profiles">
          <article className="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mark Zuckerberg"
              className="leaderboard__picture"
            />
            <span className="leaderboard__name">Максим</span>
            <span className="leaderboard__value">+380997518026</span>
          </article>

          <article className="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Dustin Moskovitz"
              className="leaderboard__picture"
            />
            <span className="leaderboard__name">Олег</span>
            <span className="leaderboard__value">+380665951396</span>
          </article>

          <article className="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt="Elizabeth Holmes"
              className="leaderboard__picture"
            />
            <span className="leaderboard__name">Катерина</span>
            <span className="leaderboard__value">+380501237895</span>
          </article>

          <article className="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/37.jpg"
              alt="Evan Spiegel"
              className="leaderboard__picture"
            />
            <span className="leaderboard__name">Орест</span>
            <span className="leaderboard__value">+380950129486</span>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Contacts;
