import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid justify-content-center">
      <a className="navbar-brand nav-link" href="/" id="homeLink">Hlavná stránka</a>
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
            <a className="nav-link" href="/history" id="historyLink">Základy Pythonu a jeho historia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/basics" id="basicsLink">Základy neurónových sietí</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
