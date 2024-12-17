import React from "react";

const FooterComponent = () => (
  <div className="footer-content d-flex flex-column flex-md-row justify-content-center align-items-center">
    <p style={{ fontSize: "15px" }} className="mb-0 me-md-3">
      &copy; 2024 Štúdium neurónových sietí v Pythone
    </p>
    <a
      href="https://github.com/TimLapan/webove_project"
      target="_blank"
      className="footer-link me-md-3 d-flex align-items-center"
    >
      Projekt na GitHube
      <img
        width="20"
        height="20"
        src="../assets/github.png"
        alt="GitHub"
        className="ms-2"
      />
    </a>
    <a
      href="mailto:tsimafei.lapanik@gmail.com"
      target="_blank"
      className="footer-link d-flex align-items-center"
    >
      Kontakt
      <img
        width="20"
        height="20"
        src="../assets/gmail.png"
        alt="Email"
        className="ms-2"
      />
    </a>
  </div>
);

export default FooterComponent;
