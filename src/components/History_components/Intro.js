import React, { useEffect, useRef } from "react";
import "./Intro.css";
import photo1 from "../../assets/images_and_icons/history_photo/photo1.png";
import photo2 from "../../assets/images_and_icons/history_photo/guido.GuidovanRossum.jpg";
import photo3 from "../../assets/images_and_icons/history_photo/old_code.jpg";
import photo4 from "../../assets/images_and_icons/history_photo/PSF.png";
import photo5 from "../../assets/images_and_icons/history_photo/gui_unicode_icon_158358.png";
import photo6 from "../../assets/images_and_icons/history_photo/String_example.png";

function Intro() {
  const imagesRef = useRef([]); // Хранит ссылки на изображения

  useEffect(() => {
    const handleMouseEnter = (index) => {
      imagesRef.current[index].classList.add("hover");
  
      imagesRef.current.forEach((img, i) => {
        if (i < index) {
          img.classList.add("move-up");
        } else if (i > index) {
          img.classList.add("move-down");
        }
      });
    };
  
    const handleMouseLeave = (index) => {
      imagesRef.current[index].classList.remove("hover");
  
      imagesRef.current.forEach((img) => {
        img.classList.remove("move-up");
        img.classList.remove("move-down");
      });
    };
  
    const currentImages = imagesRef.current; // Копируем текущее значение
  
    currentImages.forEach((image, index) => {
      image.addEventListener("mouseenter", () => handleMouseEnter(index));
      image.addEventListener("mouseleave", () => handleMouseLeave(index));
    });
  
    // Функция очистки
    return () => {
      currentImages.forEach((image, index) => {
        if (image) {
          image.removeEventListener("mouseenter", () => handleMouseEnter(index));
          image.removeEventListener("mouseleave", () => handleMouseLeave(index));
        }
      });
    };
  }, []);
  

  return (
    <div className="intro">
      <div className="tn-atom-container">
        <div className="tn-atom-inner">
          <div className="tn-atom">
            1989<br />Guido van Rossum<br />Vytvorenie<br />Jazyk ABC<br />Navrhovanie<br />Python 0.9.0<br />1991<br />Prvá
            verzia<br />Výnimky<br />Moduly<br />Funkcie<br />Komunita<br />1994<br />Python 1.0<br />Stabilná
            verzia<br />Spracovanie chýb<br />Vedecká komunita<br />Vzdelávanie<br />2000<br />Python Software
            Foundation<br />PSF<br />Otvorený kód<br />Ochrana<br />Komunita<br />Podpora<br />Python 2.x<br />2008<br />Python
            3.0<br />Nekompatibilita<br />Unicode<br />Vstup<br />Výstup<br />Tretí Python<br />2020<br />Python
            3.9<br />Výkon<br />Operátory<br />Slovníky<br />Merge<br />Update<br />Analýza dát<br />Strojové
            učenie<br />Vedecké projekty<br />Diverzifikácia<br />Líderstvo<br />Popularita<br />Evolúcia<br />Budúcnosť<br />Podpora
            PSF<br />Globálna komunita
          </div>
          <div className="tn-atom">
            1989<br />Guido van Rossum<br />Vytvorenie<br />Jazyk ABC<br />Navrhovanie<br />Python 0.9.0<br />1991<br />Prvá
            verzia<br />Výnimky<br />Moduly<br />Funkcie<br />Komunita<br />1994<br />Python 1.0<br />Stabilná
            verzia<br />Spracovanie chýb<br />Vedecká komunita<br />Vzdelávanie<br />2000<br />Python Software
            Foundation<br />PSF<br />Otvorený kód<br />Ochrana<br />Komunita<br />Podpora<br />Python 2.x<br />2008<br />Python
            3.0<br />Nekompatibilita<br />Unicode<br />Vstup<br />Výstup<br />Tretí Python<br />2020<br />Python
            3.9<br />Výkon<br />Operátory<br />Slovníky<br />Merge<br />Update<br />Analýza dát<br />Strojové
            učenie<br />Vedecké projekty<br />Diverzifikácia<br />Líderstvo<br />Popularita<br />Evolúcia<br />Budúcnosť<br />Podpora
            PSF<br />Globálna komunita
          </div>
          <div className="tn-atom">
            1989<br />Guido van Rossum<br />Vytvorenie<br />Jazyk ABC<br />Navrhovanie<br />Python 0.9.0<br />1991<br />Prvá
            verzia<br />Výnimky<br />Moduly<br />Funkcie<br />Komunita<br />1994<br />Python 1.0<br />Stabilná
            verzia<br />Spracovanie chýb<br />Vedecká komunita<br />Vzdelávanie<br />2000<br />Python Software
            Foundation<br />PSF<br />Otvorený kód<br />Ochrana<br />Komunita<br />Podpora<br />Python 2.x<br />2008<br />Python
            3.0<br />Nekompatibilita<br />Unicode<br />Vstup<br />Výstup<br />Tretí Python<br />2020<br />Python
            3.9<br />Výkon<br />Operátory<br />Slovníky<br />Merge<br />Update<br />Analýza dát<br />Strojové
            učenie<br />Vedecké projekty<br />Diverzifikácia<br />Líderstvo<br />Popularita<br />Evolúcia<br />Budúcnosť<br />Podpora
            PSF<br />Globálna komunita
          </div>
        </div>
      </div>
      <div className="overlay">
        <div className="side-images">
          {[
            { href: "#section1", src: photo1, alt: "Image 1" },
            { href: "#section2", src: photo2, alt: "Image 2" },
            { href: "#section3", src: photo3, alt: "Image 3" },
            { href: "#section4", src: photo4, alt: "Image 4" },
            { href: "#section5", src: photo5, alt: "Image 5" },
            { href: "#section6", src: photo6, alt: "Image 6" },
          ].map((image, index) => (
            <a
              key={index}
              href={image.href}
              className="image-container"
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <img src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
        <div className="center-content">
          <div className="title-container">
            <h1 className="title-python">Python</h1>
            <div className="title-flex">
              <h1 className="title-put">Cesta</h1>
              <div className="subtitle-container">
                <p className="subheading">od jednoducheho nastroja k univerzalnemu programovaciemu jazyku</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
