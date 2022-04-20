import React from "react";
import { useState } from "react";

import env from "../env.json";

export default function Create() {
  const [url, setUrl] = useState("");
  const [showForm, setShowForm] = useState("visually-hidden");
  const [formCreate, setFormCreate] = useState("");

  const sendFormData = (data) => {
    setFormCreate("visually-hidden");
    setShowForm("");
    fetch(env.urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result) {
          setUrl(`${env.urlFrontend}/${response.url}`);
        }
      });
  };

  const getFormData = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note.length === 0) {
      alert("Введите текст сообщения");
      return false;
    }
    sendFormData({ note: note });
  };

  return (
    <>
      <section className="create main">
        <div className="container">
          <h1 className="create-title title">Tricky Notes</h1>
          <h2 className="create-subtitle subtitle">
            Cервис для написания и обмена зашифрованными сообщениями
          </h2>
          <div className="description-item">
            <p className="description-title">Как написать сообщение</p>
            <p className="description-text">
              В поле "Текст сообщения" наберите или вставьте текст сообщения и
              нажмите кнопку "Отправить сообщение". Текст сообщения ограничен и
              составляет 1000 символов. В поле "Ссылка" скопируйте и отправьте
              получателю ссылку на сообщение.
            </p>
          </div>
          <div className={formCreate}>
            <form className="create-form form" onSubmit={getFormData}>
              <div className="input-item">
                <label className="input-title" htmlFor="note">
                  Введите текст сообщения
                </label>
                <textarea
                  className="form-field textarea"
                  name="note"
                  id="note"
                  placeholder="Текст сообщения"
                ></textarea>
              </div>
              <div className="form-btn-group">
                <button
                  className="button form-button link-item--blue"
                  type="submit"
                >
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
          <div className={showForm}>
            <div className="url">
              <p className="url-title">Ссылка:</p>
              <div className="url-wrap">
                <p className="url-text">{url}</p>
              </div>
            </div>
            <div className="form-btn-group">
              <button
                className="button form-button link-item--blue"
                type="button"
                onClick={() => {
                  window.location.reload();
                }}
              >
                написать сообщение
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
