import React from "react";
import NavigationBar from "./NavigationBar";

const Header = () => (
  <header className="bg-dark text-white p-3">
    <h1 id="index_white" className="text-center">Štúdium neurónových sietí v Pythone</h1>
    <hr />
    <NavigationBar />
  </header>
);

export default Header;
