import React from "react";
import photo from "../../assets/images_and_icons/history_photo/old_code.jpg"; // Убедитесь, что путь к изображению корректный
import "./Section.css"; // Подключите стили

function Section3() {
  return (
    <section id="section3" className="history-section dark-theme py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5">1994 - Python 1.0: prvá stabilná verzia</h2>
        {/* Фото слева */}
        <div className="fixed-photo-container">
          <img src={photo} alt="История Python" className="fixed-photo" />
        </div>
        {/* Основной контент с карточками */}
        <div className="text-content">
          <div className="row justify-content-center">
            {[
              {
                title: "Prvé oficiálne vydanie",
                text: "V roku 1994 bol vydaný Python 1.0 ako stabilná verzia, pripravená na masové použitie. Bola to prvá verzia, ktorá sa dala použiť v širokej škále odborných a vzdelávacích projektov, a etablovala Python v programátorskej komunite.",
              },
              {
                title: "Podpora spracovania výnimiek",
                text: "Python 1.0 zaviedol podporu pre spracovanie výnimiek, čo umožňuje programátorom písať spoľahlivejší kód. Toto vylepšenie urobilo Python atraktívnym pre serióznych vývojárov, ktorí oceňujú predvídateľnosť a spoľahlivosť.",
              },
              {
                title: "Rozšírenie knižnice modulov",
                text: "S príchodom rozšírenej knižnice modulov sa Python stal ešte flexibilnejším. Vývojári mohli teraz používať vstavané moduly na riešenie zložitých problémov, vďaka čomu je Python ideálny pre vedecké výskumné a vzdelávacie účely.",
              },
              {
                title: "Popularita v oblasti vedy a vzdelávania",
                text: "Python sa stal populárnym na univerzitách a vedeckých inštitúciách, kde sa začal používať na výučbu programovania a analýzy údajov. Jednoduchosť a sila Pythonu z neho urobili cenný nástroj v triede.",
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

export default Section3;
