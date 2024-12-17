import React from "react";
import photo from "../../assets/images_and_icons/history_photo/gui_unicode_icon_158358.png"; // Проверьте путь к изображению
import "./Section.css"; // Подключение стилей

function Section5() {
  return (
    <section id="section5" className="history-section dark-theme py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5">2008 - Vydanie Pythonu 3.0</h2>
        {/* Фото слева */}
        <div className="fixed-photo-container">
          <img src={photo} alt="История Python" className="fixed-photo" />
        </div>
        {/* Основной контент с карточками */}
        <div className="text-content">
          <div className="row justify-content-center">
            {[
              {
                title: "Spustenie Pythonu 3.0",
                text: "V roku 2008 bol vydaný Python 3.0 (Python 3000), čo bola prvá verzia, ktorá nebola kompatibilná s Pythonom 2.x. Táto zmena umožnila väčšie vylepšenia, zmenila mnoho aspektov jazyka a urobila ho ešte modernejším a flexibilnejším.",
              },
              {
                title: "Vylepšené delenie čísel",
                text: "Python 3.0 zmenil správanie delenia čísel, aby bolo delenie celých čísel predvídateľnejšie, vďaka čomu sa matematika ľahšie píše a je menej náchylná na chyby.",
              },
              {
                title: "Zmeny vstupných a výstupných funkcií",
                text: "Funkcie print() a input() boli prepracované, vďaka čomu je ich používanie jednoduchšie a príjemnejšie pre začiatočníkov. Vďaka týmto zmenám sa kód ľahšie písal a bol čitateľnejší.",
              },
              {
                title: "Úplná podpora Unicode",
                text: "Python 3.0 pridal plnú podporu Unicode, vďaka čomu je ideálnou voľbou pre prácu s textom v rôznych jazykoch. To rozšírilo možnosti Pythonu a prilákalo vývojárov z celého sveta.",
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

export default Section5;
