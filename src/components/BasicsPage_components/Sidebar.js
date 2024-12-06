import React, { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    // Функция для установки активной ссылки
    const setActiveLink = () => {
      const navLinks = document.querySelectorAll("#left_navigation_menu .nav-link");
      const sections = document.querySelectorAll("section");

      let index = sections.length;

      // Определение активного раздела на основе прокрутки
      while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

      // Удаление активного класса со всех ссылок и добавление только нужной
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLinks[index]) {
        navLinks[index].classList.add("active");
      }
    };

    // Добавляем слушатель событий прокрутки
    window.addEventListener("scroll", setActiveLink);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", setActiveLink);
    };
  }, []);

  return (
    <nav id="left_navigation_menu" className="col-md-3 col-lg-2 p-3">
      <h5 className="mb-3">Navigačný panel</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#about-neural-networks">
            O neurónových sieťach a ako oni fungujú
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#neural-network-components">
            Komponenty neurónových sietí
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#python-libraries">
            Knižnice Python pre neurónové siete
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tensorflow-guide">
            Stručný návod pre TensorFlow 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mini-test">
            Mini-test
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sekcia_zmena">
            Sekcia zmena
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
