import React from "react";
import { NavLink } from "react-router-dom";
import AuthModal from "./AuthModal";
const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid justify-content-center">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              id="homeLink"
            >
              Hlavná stránka
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              id="historyLink"
            >
              Základy Pythonu a jeho historia
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/basics"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              id="basicsLink"
            >
              Základy neurónových sietí
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <AuthModal />
  </nav>
);

export default NavigationBar;