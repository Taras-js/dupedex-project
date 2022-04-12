import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form:", form);
  };
  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("data:", data);
      setForm({
        email: "",
        password: "",
      });
    } catch (e) {}
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };
  return (
    <div className="card-panel teal text-lighten-5">
      <form
        className="form-registration"
        name="simple form"
        autoComplete="on"
        noValidate
      >
        <fieldset className="fieldset">
          <legend className="legend"> Авторизация пользователя</legend>
          <input
            id="email"
            type="text"
            placeholder="Введите email"
            name="email"
            className="yellow-input"
            value={form.email}
            onChange={changeHandler}
            autoFocus
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            id="password"
            name="password"
            className="yellow-input"
            placeholder="Введите пароль"
            onChange={changeHandler}
            value={form.password}
          />
          <label htmlFor="password">Password</label>
          <div className="wrapper">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={loginHandler}
            >
              <i className="material-icons right">Вход</i>
            </button>
          </div>
          <div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={registerHandler}
            >
              <i className="material-icons right">Зарегистрироваться</i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};