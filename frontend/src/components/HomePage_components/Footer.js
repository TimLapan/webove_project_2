import React from "react";
import Email from "../../assets/images_and_icons/timas_materials/gmail.png";
import GitHub from "../../assets/images_and_icons/timas_materials/github.png"

const Footer = () => (
  <div className="footer-content d-flex flex-column flex-md-row justify-content-center align-items-center">
    <p style={{ fontSize: "15px" }} className="mb-0 me-md-3">
      &copy; 2024 Štúdium neurónových sietí v Pythone
    </p>
    <a
      href="https://github.com/TimLapan/webove_project"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link me-md-3 d-flex align-items-center"
    >
      Projekt na GitHube
      <img
        width="20"
        height="20"
        src={GitHub}
        alt="GitHub"
        className="ms-2"
      />
    </a>
    <a
      href="mailto:tsimafei.lapanik@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link d-flex align-items-center"
    >
      Kontakt
      <img
        width="20"
        height="20"
        src={Email}
        alt="Email"
        className="ms-2"
      />
    </a>
  </div>
);

export default Footer;
