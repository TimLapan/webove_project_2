import React from "react";
import photo from "../../assets/images_and_icons/history_photo/guido.GuidovanRossum.jpg"; // Убедитесь, что путь корректный
import "./Section.css"; // Импортируйте файл стилей

function Section2() {
  return (
    <section id="section2" className="history-section dark-theme py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5">1991 - vydanie prvej verzie Pythonu</h2>
        {/* Фото слева */}
        <div className="fixed-photo-container">
          <img
            src={photo}
            alt="История Python"
            className="fixed-photo"
          />
        </div>
        {/* Основной контент с карточками */}
        <div className="text-content">
          <div className="row justify-content-center">
            {/* Карточки */}
            {[
              {
                title: "Prvá verzia 0.9.0",
                text: "V roku 1991 Guido vydal prvú verziu Pythonu, 0.9.0. Zaviedol v nej základné funkcie, ako sú výnimky, funkcie a moduly, ktoré položili základ pre budúcnosť jazyka Python. Bol to významný krok k vytvoreniu stabilného jazyka.",
              },
              {
                title: "Spoločenstvo prvých vývojárov",
                text: "Po vydaní prvej verzie sa ku Guidovi pridali programátori, ktorí sa zaujímali o vývoj jazyka Python. Ocenili jeho intuitívnosť a jednoduchosť, čo pritiahlo pozornosť komunity a vytvorilo jadro pre budúcich prispievateľov a vývojárov.",
              },
              {
                title: "Začiatok knižnice modulov",
                text: "Python 0.9.0 obsahoval knižnicu modulov, ktorá umožňovala programátorom pridávať vlastné funkcie a rozšírenia. Vďaka tejto inovácii sa Python stal flexibilným a bolo možné vyvíjať zložitejšie projekty pomocou vstavaných a vlastných modulov.",
              },
              {
                title: "Cesta k širokému uznaniu",
                text: "S vydaním prvej verzie pritiahol Python pozornosť širokého publika. Vďaka úspechu skorých verzií sa Python začal šíriť po akademickej a profesionálnej komunite, čím položil základy budúcej popularity a prijatia.",
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

export default Section2;
