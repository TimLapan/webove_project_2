import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 20) {
        navbar.style.top = "0"; // Показываем панель
      } else {
        navbar.style.top = "-50px"; // Скрываем панель
      }
    };

    // Добавляем слушатель события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Пустой массив зависимостей, чтобы функция вызывалась только при монтировании

  return (
    <div id="navbar">
      <a href="index.html">Hlavná stránka</a>
      <a href="history.html">História Python</a>
      <a href="basics.html">Základy neurónových sietí</a>
    </div>
  );
}

export default Navbar;
