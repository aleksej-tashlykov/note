import React from "react";

export default function Error() {
  return (
    <>
      <section className="error main">
        <div className="container">
          <h1 className="error-title title">Tricky Notes</h1>
          <h2 className="error-subtitle subtitle">
            Cервис для написания и обмена зашифрованными сообщениями
          </h2>
          <div className="error-img">
            <img
              className="img-error"
              src="/img/page_error.png"
              width="300"
              height="300"
              alt="error"
            />
          </div>
          <p className="error-text">
            Произошла ошибка. Страница удалена или устарела или введен не верный
            адрес в адресной строке браузера.
          </p>
        </div>
      </section>
    </>
  );
}
