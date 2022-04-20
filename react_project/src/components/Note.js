import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from "../env.json";

export default function Note() {
  const [noteText, setNoteText] = useState("");
  const [noteBlock, setNoteBlock] = useState("visually-hidden");
  const [formNote, setFormNote] = useState("visually-hidden");
  const [noteError, setNoteError] = useState("visually-hidden");

  let { noteURL } = useParams();

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setNoteBlock("");
            setFormNote("visually-hidden");
            setNoteError("visually-hidden");
          } else if (!response.result) {
            setNoteBlock("visually-hidden");
            setFormNote("visually-hidden");
            setNoteError("");
          }
        });
    } else {
      setNoteBlock("visually-hidden");
      setFormNote("");
      setNoteError("visually-hidden");
    }
  }, [noteURL]);

  const getNote = (event) => {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url.length === 0) {
      alert("Вставьте ссылку");
      return false;
    }
    noteURL = url;
    window.location.href = `${env.urlFrontend}/${url}`;
  };

  const searchNote = () => {
    window.location.href = env.urlFrontend;
  };

  return (
    <>
      <section className="note main">
        <div className="container">
          <h1 className="note-title title">Tricky Notes</h1>
          <h2 className="note-subtitle subtitle">
            Cервис для написания и обмена зашифрованными сообщениями
          </h2>
          <div className="description-item">
            <p className="description-title">Как просмотреть сообщение</p>
            <p className="description-text">
              Ссылку пользователя скопируйте а потом вставьте в адресную строку
              браузера и нажмите клавишу "Enter" или вставьте ссылку в поле
              "Вставьте ссылку".
            </p>
          </div>
          <div className={noteBlock}>
            <div className="note-hash hash">
              <p className="hash-title">Note:</p>
              <div className="hash-wrap">
                <p className="hash-text">{noteURL}</p>
              </div>
            </div>
            <div className="note-message message">
              <p className="message-title">Текст сообщения:</p>
              <p className="message-text">{noteText}</p>
            </div>
            <div className="form-btn-group">
              <button
                className="button form-button link-item--blue"
                type="submit"
                onClick={searchNote}
              >
                Cмотреть другие сообщения
              </button>
            </div>
          </div>
          <div className={formNote}>
            <form className="note-form" onSubmit={getNote}>
              <div className="input-item">
                <label className="input-title" htmlFor="url">
                  Вставьте ссылку:
                </label>
                <input className="note-field" type="text" name="url" id="url" />
              </div>
              <div className="form-btn-group">
                <button
                  className="button form-button link-item--blue"
                  type="submit"
                >
                  Просмотреть сообщение
                </button>
              </div>
            </form>
          </div>
          <div className={noteError}>
            <p className="input-error">
              Что-то пошло не так. Данные не найдены.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
