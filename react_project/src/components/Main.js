import React from "react";

export default function Main() {
  return (
    <>
      <section className="main-content main">
        <div className="container">
          <h1 className="main-title title">Tricky Notes</h1>
          <h2 className="main-subtitle subtitle">
            Cервис для написания и обмена зашифрованными сообщениями
          </h2>
          <img
            className="main-img"
            src="/img/encryption.png"
            width="516"
            height="220"
            alt="encryption"
          />
          <div className="main-links">
            <a className="link-item link-item--blue" href="/create">
              Написать сообщение
            </a>
            <a className="link-item link-item--turquoise" href="/note">
              Просмотреть сообщение
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
