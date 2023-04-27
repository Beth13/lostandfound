import React, { useEffect, useState } from "react";

import "../../../../styles/card.scss";
import CardInfo from "./CardInfo";
import EmtyIMG from "../../../../img/966209-200.png";

const Card = ({ card }) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const handleCard = () => {
    setIsOpenCard(!isOpenCard);
  };

  return (
    <section className="card">
      <h6 className="card__title">{card.name}</h6>
      <div className="card__desc">
        {card.img !== null ? (
          <img src={card.img} className="card__desc-img" alt={card.name} />
        ) : (
          <img
            src={EmtyIMG}
            className="card__desc-img__empty"
            alt={card.name}
          />
        )}
        <div className="card__desc-text">
          <span className="card__cafedra">Кафедра: {card.nameOfCafedra}</span>
          <span className="card__status">{card.status}</span>
          <p className="card__span">{card.description}</p>
        </div>
      </div>

      {isOpenCard ? (
        <CardInfo card={card} handleCard={handleCard} />
      ) : (
        <button className="card__btn" onClick={handleCard}>
          Зв'язатись із власником посту
        </button>
      )}
    </section>
  );
};

export default Card;
