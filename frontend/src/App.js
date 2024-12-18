import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //Prepojenie štýlov Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Подключение JavaScript Bootstrap
import HomePage from "./pages/HomePage"; // Главная страница
import Basics from "./pages/Basics"; // Страница Basics
import History from "./pages/History";
import AdminPage from "./pages/Admin_page";
const App = () => (
  <Router>
    <Routes>
      {/* HomePage */}
      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<AdminPage />} />
      {/* page Basics */}
      <Route path="/basics" element={<Basics />} />

      {/* page History */}
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
);

export default App;
