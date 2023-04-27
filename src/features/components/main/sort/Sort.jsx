import React from "react";

import "../../../styles/sort.scss";

const Sort = ({ status, setStatus }) => {
  return (
    <section
      className="sort"
      value={status}
      onChange={(event) => setStatus(event.target.value)}
    >
      <span className="sort__title">Сортувати за статусом:</span>
      <select className="sort__select">
        <option value="all">Всі</option>
        <option value="found">Знайдені</option>
        <option value="lost">Загублені</option>
      </select>
    </section>
  );
};

export default Sort;
