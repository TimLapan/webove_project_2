import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage"; // Главная страница
import Basics from "./pages/Basics"; // Страница Basics
import History from "./pages/History";
const App = () => (
  <Router>
    <Routes>
      {/* Главная страница HomePage */}
      <Route path="/" element={<HomePage />} />

      {/* Страница Basics */}
      <Route path="/basics" element={<Basics />} />

      {/* Страница History */}
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
);

export default App;
