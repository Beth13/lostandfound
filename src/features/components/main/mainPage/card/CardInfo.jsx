import React from "react";

import "../../../../styles/card.scss";

const CardInfo = ({ card, handleCard }) => {
  return (
    <section className="card">
      <div className="card__info">
        <span className="card__info-item">{card.phone}</span>
        <span className="card__info-item">{card.nameofpublisher}</span>
      </div>
      <button className="card__btn" onClick={handleCard}>
        Приховати
      </button>
    </section>
  );
};

export default CardInfo;
