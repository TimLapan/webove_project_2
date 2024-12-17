import React from "react";
import photo from "../../assets/images_and_icons/history_photo/String_example.png"; // Убедитесь в корректности пути
import "./Section.css";

function Section6() {
  return (
    <section id="section6" className="history-section dark-theme py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5">
          2020 - Python 3.9: aktualizácie a nové syntaktické funkcie
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
                title: "Nové operátory pre slovníky",
                text: "Python 3.9 zaviedol operátory zlúčenia a aktualizácie, ktoré uľahčujú prácu so slovníkmi. Tieto zmeny urobili Python užitočnejším pre úlohy vedy o údajoch a umožnili programátorom písať elegantnejší a zrozumiteľnejší kód.",
              },
              {
                title: "Optimalizácia výkonu",
                text: "Python 3.9 obsahoval veľa aktualizácií výkonu, vďaka čomu bol rýchlejší a efektívnejší. To je dôležité najmä pri analýze údajov a práci s veľkým množstvom informácií, keďže Python teraz takéto úlohy zvláda rýchlejšie.",
              },
              {
                title: "Vylepšenia pre reťazce",
                text: "Nové funkcie reťazcov uľahčili manipuláciu s textom, vďaka čomu sú úlohy ako spracovanie textu a vytváranie šablón pre vývojárov jednoduchšie a pohodlnejšie.",
              },
              {
                title: "Vedenie v oblasti analýzy údajov",
                text: "S aktualizáciami predstavenými vo verzii 3.9 Python posilnil svoju pozíciu jedného z popredných jazykov pre analýzu údajov a strojové učenie. Vylepšenia pomohli Pythonu zostať relevantným pre vedecké a výskumné projekty.",
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

export default Section6;
