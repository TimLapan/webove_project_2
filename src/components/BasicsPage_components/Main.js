import React from "react";
import MaterialCard from "./MaterialCard";
import pythonHistoryImage from "../assets/images_and_icons/timas_materials/python_history.png";
import BasicsCard from "../assets/images_and_icons/timas_materials/basics.jpg"
const Main = () => (
  <main className="container my-5">
    <section>
      <h2>Čo sa môžete naučiť</h2>
      <p>Tento kurz zahŕňa hlavné témy súvisiace s neurónovými sieťami a Pythonom:</p>
      <ul>
        <li>Základy neurónových sietí a ich architektúra</li>
        <li>Modely hlbokého učenia a ich použitie</li>
        <li>Použitie Pythonu pre strojové učenie</li>
        <li>Využitie rámcov ako TensorFlow a PyTorch</li>
        <li>Praktické úlohy</li>
      </ul>
    </section>
    <section>
      <h3>Materiály</h3>
      <div className="row">
        <MaterialCard
          link="/history"
          image={pythonHistoryImage}
          altText="Python a jeho základy"
          overlayText="Základy Pythonu a jeho historia"
        />
        <MaterialCard
          link="/basics"
          image={BasicsCard}
          altText="Základy neurónových sietí"
          overlayText="Úvod do neurónových sietí a ich základných princípov."
        />
      </div>
    </section>
  </main>
);

export default Main;
