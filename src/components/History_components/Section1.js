import React from "react";
import photo1 from "../../assets/images_and_icons/history_photo/photo1.png"; // Импорт изображения
import "./Section.css";

function Section1() {
  return (
    <section id="section1" className="history-section dark-theme">
      <div className="container position-relative">
        <h2 className="text-center mb-5">
          1989 - Začiatky vývoja jazyka Python: nápad a inšpirácia
        </h2>
        {/* Фото слева */}
        <div className="fixed-photo-container">
          <img
            src={photo1}
            alt="history Python"
            className="fixed-photo"
          />
        </div>
        {/* Основной контент с карточками */}
        <div className="text-content">
          <div className="row justify-content-center">
            {/* Карточка 1 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Vianočná inšpirácia</h5>
                  <p className="card-text">
                    V decembri 1989, počas vianočných sviatkov, sa Guido van Rossum rozhodol
                    vytvoriť programovací jazyk, ktorý by bol zrozumiteľný a zároveň dostatočne
                    výkonný na riešenie rôznych problémov. Chcel, aby bol jazyk používateľsky
                    prívetivý pre profesionálov aj začínajúcich programátorov, čo bola jeho hlavná motivácia.
                  </p>
                </div>
              </div>
            </div>
            {/* Карточка 2 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Vplyv jazyka ABC</h5>
                  <p className="card-text">
                    Guido sa inšpiroval jazykom ABC, ktorý je známy svojou čitateľnosťou a
                    jednoduchosťou. Chcel vytvoriť jazyk, ktorý by zdedil intuitívnosť jazyka ABC, ale
                    bol by výkonnejší a flexibilnejší a umožňoval by vykonávať zložitejšie úlohy bez
                    toho, aby stratil svoju pohodlnosť a jednoduchosť.
                  </p>
                </div>
              </div>
            </div>
            {/* Карточка 3 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Sila jazyka C</h5>
                  <p className="card-text">
                    Inšpirovaný jazykom C, Guido dodal jazyku Python flexibilitu a možnosti pre
                    zložité výpočty, ktoré boli predtým v jednoduchších jazykoch nedostupné.
                    Vďaka tomu sa jazyk Python stal výkonným nástrojom, ktorý sa dá použiť vo
                    vedeckých aj technických aplikáciách.
                  </p>
                </div>
              </div>
            </div>
            {/* Карточка 4 */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Hlavným účelom vytvorenia</h5>
                  <p className="card-text">
                    Guidovým hlavným cieľom bolo vytvoriť jazyk, v ktorom by programátori mohli
                    písať kód, ktorý by bol ľahko zrozumiteľný a čitateľný pre ostatných. Chcel,
                    aby Python slúžil aj profesionálnym vývojárom, ako aj študentom, vďaka čomu
                    bol vhodný pre vzdelávacie a praktické účely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
