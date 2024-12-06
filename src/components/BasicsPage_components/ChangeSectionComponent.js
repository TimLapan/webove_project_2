import React, { useState, useEffect } from 'react';

const ChangeSectionComponent = () => {
  const [fontSize, setFontSize] = useState(16); // Начальный размер шрифта

  const changeFontSize = (factor) => {
    const newSize = fontSize + factor;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}px`;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'ArrowUp') {
        changeFontSize(2);
        event.preventDefault();
      } else if (event.ctrlKey && event.key === 'ArrowDown') {
        changeFontSize(-2);
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      if (event.shiftKey) {
        if (event.deltaY < 0) {
          changeFontSize(2);
        } else if (event.deltaY > 0) {
          changeFontSize(-2);
        }
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel);

    // Очистка слушателей событий
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [fontSize]);

  return (
    <section id="sekcia_zmena" className="container my-5">
      <h2 className="text-center mb-4">Sekcia Zmena - Úpravy a Vylepšenia</h2>

      <div className="text-center mb-4">
        <button 
          id="increase-font" 
          className="btn btn-primary mr-2"
          onClick={() => changeFontSize(2)}
        >
          Zväčšiť písmo
        </button>
        <button 
          id="decrease-font" 
          className="btn btn-secondary"
          onClick={() => changeFontSize(-2)}
        >
          Zmenšiť písmo
        </button>
      </div>

      <ul>
        <li><strong>Vylepšenia UX:</strong> Vylepšená navigácia a vizuálne usporiadanie s konzistentným farebným rozhraním.</li>
        <li><strong>UI Modifikácie:</strong> Zmeny v štýlovaní sekcií a navigácie pre jasnejšiu štruktúru stránky.</li>
        <li><strong>Podpora pre malé obrazovky:</strong> Vylepšená podpora pre mobilné zariadenia.</li>
        <li><strong>UI Modifikácie:</strong> Navigačný panel naľavo</li>
        <li><strong>Pridanie náčrtu stránok do priečinka optimalisation</strong></li>
        <li><strong>Na samom konci stránky bol pridaný kontakt a link na projekt na Githube</strong></li>
        <li><strong>Zmena veľkosti písmen: </strong>
          <ul>
            <li>Tlačidlami "Zväčšiť písmo" alebo "Zmenšiť písmo"</li>
            <li>Klávesové skratky: "ctrl + šípka hore/dole"</li>
            <li>Skratka: Shift + koleso na myši</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default ChangeSectionComponent;