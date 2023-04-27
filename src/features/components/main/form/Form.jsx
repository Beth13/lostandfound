import React, { useRef, useState } from "react";
import { createEvent } from "../../../gateway/gateway";
import emailjs from "@emailjs/browser";

import "../../../styles/createform.scss";

const Form = ({ setPosts, posts, userName }) => {
  const form = useRef();

  const [createData, setCreateData] = useState({
    name: "",
    nameOfCafedra: "",
    phone: "",
    description: "",
    img: null,
  });

  const [status, setStatus] = useState("lost");
  const [toSendEmail, setToSendEmail] = useState("false");

  const handleChangeData = (event) => {
    event.persist();
    const { name, value } = event.target;

    setCreateData({
      ...createData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Ви успішно створили пост!");
    const newData = {
      id: posts.length + 1,
      name: createData.name,
      nameOfCafedra: createData.nameOfCafedra,
      phone: createData.phone,
      description: createData.description,
      status: status,
      toSendEmail: JSON.parse(toSendEmail),
      nameofpublisher: userName,
      img: "https://sdleather.com.ua/content/images/23/480x480l50nn0/collectionallproductgamanets-casual-naturalna-shkira-96059245567207.jpg",
    };

    createEvent(newData);

    setPosts([newData, ...posts]);

    if (newData.toSendEmail) {
      emailjs
        .sendForm(
          "service_va9iytv",
          "template_ksemxn8",
          form.current,
          "x2bB6qrYGBML4Jh0n"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="createform">
      <form ref={form} className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Створити допис</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Назва речі
          </label>
          <input
            onChange={handleChangeData}
            value={createData.name}
            className="form-input"
            name="name"
            type="text"
            placeholder="Загублено (ваша річ)"
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Назва кафедри
          </label>
          <input
            onChange={handleChangeData}
            value={createData.nameOfCafedra}
            className="form-input"
            placeholder="Абревіатура кафедри українською мовою (ІСМ)"
            type="text"
            name="nameOfCafedra"
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Номер телефону
          </label>
          <input
            onChange={handleChangeData}
            value={createData.phone}
            name="phone"
            className="form-input"
            type="text"
            required
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Втратили чи знайшли річ?
          </label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="found">Знахідка</option>
            <option value="lost">Втрата</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Чи хочете сповістити про допис всім студентам?
          </label>
          <select
            value={toSendEmail}
            onChange={(event) => setToSendEmail(event.target.value)}
          >
            <option value="true">Так</option>
            <option value="false">Ні</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Опис речі
          </label>
          <input
            onChange={handleChangeData}
            value={createData.description}
            name="description"
            className="form-input"
            placeholder="Короткий опис речі (опціонально)"
            type="text"
          />
        </div>

        <button className="submit-button" type="submit">
          Опублікувати
        </button>
      </form>
    </section>
  );
};

export default Form;
