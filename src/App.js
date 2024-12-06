import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Главная страница
import Basics from "./pages/Basics"; // Страница Basics
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/index_styles.css"
import "./styles/basics_styles.css"
const App = () => (
  <Router>
    <Routes>
      {/* Главная страница HomePage */}
      <Route path="/" element={<HomePage />} />
      
      {/* Страница Basics */}
      <Route path="/basics" element={<Basics />} />
    </Routes>
  </Router>
);

export default App;
