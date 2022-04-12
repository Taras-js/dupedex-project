import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useMessage } from "../hooks/message.hook";
import logo from "../logo512.png";
import axios from "axios";

export const FormInputPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { error, clearError } = useHttp();
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const sendFile = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const data = new FormData();
        data.append("avatar", img);
        data.append("text", text);
        await axios
          .post("/api/images/upload", data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            console.log(res);
            setAvatar(res.data.image.path);
          });
      } catch (error) {}
    },
    [img, auth.token, text]
  );
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  return (
    <div className="card-panel teal text-lighten-5">
      <div>
        <form
          action="#"
          className="form-registration"
          name="simple form"
          autoComplete="on"
        >
          <fieldset className="fieldset">
            <legend className="legend">
              {" "}
              Форма для ввода текста и загрузки картинки
            </legend>
            <label htmlFor={"text"}> Поле ввода текста</label>
            <textarea
              name="text"
              className="text"
              id="text"
              placeholder="Описание картинки"
              autoFocus
              maxLength={80}
              value={text}
              onChange={(e) =>
                setText(e.target.value.replace(/[^a-zа-яё\s]/gi, ""))
              }
            />
            <div className="file-field input-field">
              <div className="btn">
                <label htmlFor={"img"}>Картинка</label>
                <input
                  accept="image/*"
                  id="img"
                  name="img"
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Добавьте картинку"
                />
              </div>
            </div>
            <div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={sendFile}
              >
                <i className="material-icons right">Добавить</i>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="form-file">
        <div>
          {" "}
          {avatar ? (
            <img className="logo" src={`${avatar}`} alt="avatar" />
          ) : (
            <img className="logo" src={`${logo}`} alt="avatar" />
          )}{" "}
        </div>
        <div>
          {" "}
          {text ? (
            <p>{text}</p>
          ) : (
            <p>Здесь будет отображено описание Вашей картинки</p>
          )}{""}
        </div>
      </div>
    </div>
  );
};
