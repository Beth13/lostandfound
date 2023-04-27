import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/registerForm.scss";

const RegisterForm = ({ setIsLogin, setUserData, userData }) => {
  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleBlur = (emailAddress) => {
    if (!emailAddress.endsWith("@lpnu.ua")) {
      alert("Увійдіть з домену lpnu.ua");
      setUserData({
        ...userData,
        email: "",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLogin(true);
    alert("Ви успішно увійшли в свій обліковий запис!");
  };

  return (
    <div className="formarea">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Sign in</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            onBlur={(event) => {
              handleBlur(event.target.value);
            }}
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="mail@lpnu.ua"
            onChange={handleChange}
            value={userData.email}
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            User name
          </label>
          <input
            onChange={handleChange}
            value={userData.name}
            className="form-input"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            value={userData.password}
            className="form-input"
            type="password"
            name="password"
            required
            minLength="6"
          />
        </div>
        <button className="submit-button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
