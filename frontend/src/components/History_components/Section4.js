import React from "react";
import photo from "../../assets/images_and_icons/history_photo/PSF.png"; // Убедитесь в правильности пути к изображению
import "./Section.css"; // Подключите файл со стилями

function Section4() {
  return (
    <section id="section4" className="history-section dark-theme py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5">
          2000 - Vytvorenie nadácie Python Software Foundation (PSF)
        </h2>
        {/* Фото слева */}
        <div className="fixed-photo-container">
          <img src={photo} alt="История Python" className="fixed-photo" />
        </div>
        {/* Основной контент с карточками */}
        <div className="text-content">
          <div className="row justify-content-center">
            {[
              {
                title: "Založenie Python Software Foundation",
                text: "V roku 2000 bola založená Python Software Foundation (PSF) s cieľom udržiavať a rozvíjať Python ako slobodný softvér. Ide o dôležitý krok, ktorý poskytol právnu a finančnú podporu pre rozšírenie Pythonu.",
              },
              {
                title: "Ochrana duševného vlastníctva",
                text: "Spoločnosť PSF prevzala zodpovednosť za ochranu práv na Python a zabezpečila, že je otvorený a prístupný. To chránilo Python pred komerčnými záujmami a zabezpečilo, že jazyk zostane dostupný pre každého.",
              },
              {
                title: "Podpora Spoločenstva",
                text: "PSF spojila programátorov z celého sveta a poskytla platformu pre spoluprácu a zdieľanie znalostí. Komunita sa stala aktívnym účastníkom vývoja Pythonu, navrhovala vylepšenia a nové nápady.",
              },
              {
                title: "Popularizácia a vývoj jazyka Python",
                text: "PSF aktívne propagovalo Python, čím pomáhalo prilákať nových používateľov. Vďaka jej úsiliu sa Python stal populárnym medzi odborníkmi, študentmi a výskumníkmi a posilnil svoju pozíciu medzi poprednými jazykmi.",
              },
            ].map((card, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
