import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Hlavná stránka
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        História Python
      </NavLink>
      <NavLink
        to="/basics"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Základy neurónových sietí
      </NavLink>
    </div>
  );
}

export default Navbar;
