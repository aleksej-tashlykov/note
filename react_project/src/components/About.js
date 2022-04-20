import React from "react";

export default function About() {
  return (
    <>
      <section className="about main">
        <div className="container">
          <h1 className="about-title title">Tricky Notes</h1>
          <h2 className="about-subtitle subtitle">
            Cервис для написания и обмена зашифрованными сообщениями
          </h2>
          <div className="about-description description">
            <div className="description-item">
              <p className="description-title">Как работает Tricky Notes</p>
              <p className="description-text">
                Пользователь пишет сообщение. Tricky Notes шифрует сообщение и
                отправляет получателю в виде ссылки. На стороне получателя
                Tricky Notes расшифрует ссылку и получатель прочитает сообщение.
                Сообщение удалиться после просмотра получателем или через 15
                минут после создания пользователем.
              </p>
            </div>
            <div className="description-item">
              <p className="description-title">Как написать сообщение</p>
              <p className="description-text">
                В поле "Текст сообщения" наберите или вставьте текст сообщения и
                нажмите кнопку "Отправить сообщение". Текст сообщения ограничен
                и составляет 1000 символов. В поле "Ссылка" скопируйте и
                отправьте получателю ссылку на сообщение.
              </p>
            </div>
            <div className="description-item">
              <p className="description-title">Как просмотреть сообщение</p>
              <p className="description-text">
                Ссылку пользователя скопируйте а потом вставьте в адресную
                строку браузера и нажмите клавишу "Enter" или вставьте ссылку в
                поле "Вставьте ссылку".
              </p>
            </div>
          </div>
          <div className="about-links">
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
