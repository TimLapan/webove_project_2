import React from "react";
import Header from "../components/HomePage_components/Header";
import Footer from "../components/HomePage_components/Footer";
import MaterialCard from "../components/HomePage_components/MaterialCard";
import pythonHistoryImage from "../assets/images_and_icons/timas_materials/python_history.png";
import basicsCardImage from "../assets/images_and_icons/timas_materials/basics.jpg";
import "../styles/index_styles.css";


const HomePage = () => (
  <>
    <Header />
    <main className="container_index my-5">
        <h2 style={{color: "#007bff"}}>Čo sa môžete naučiť</h2>
        <p>
          Tento kurz zahŕňa hlavné témy súvisiace s neurónovými sieťami a
          Pythonom:
        </p>
        <ul>
          <li>Základy neurónových sietí a ich architektúra</li>
          <li>Modely hlbokého učenia a ich použitie</li>
          <li>Použitie Pythonu pre strojové učenie</li>
          <li>Využitie rámcov ako TensorFlow a PyTorch</li>
          <li>Praktické úlohy</li>
        </ul>
        <hr />
        <h3 style={{color: "#007bff"}}>Materiály</h3>
        <div className="row">
          <MaterialCard
            link="/history"
            image={pythonHistoryImage}
            altText="Python a jeho základy"
            overlayText="Základy Pythonu a jeho historia"
          />
          <MaterialCard
            link="/basics"
            image={basicsCardImage}
            altText="Základy neurónových sietí"
            overlayText="Úvod do neurónových sietí a ich základných princípov."
          />
        </div>
    </main>
    <Footer />
  </>
);

export default HomePage;
