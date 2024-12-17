import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Подключение стилей Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Подключение JavaScript Bootstrap
import HomePage from "./pages/HomePage"; // Главная страница
import Basics from "./pages/Basics"; // Страница Basics
import History from "./pages/History";
import AdminPage from "./pages/Admin_page";
const App = () => (
  <Router>
    <Routes>
      {/* Главная страница HomePage */}
      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<AdminPage />} />
      {/* Страница Basics */}
      <Route path="/basics" element={<Basics />} />

      {/* Страница History */}
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
);

export default App;
