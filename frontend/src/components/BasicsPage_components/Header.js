import React from "react";
import NavigationBar from "../HomePage_components/NavigationBar";

const Header = () => (
  <header className="bg-dark text-white p-3">
    <h1 id="index_white" className="text-center">Základy neurónových sietí</h1>
    <hr />
    <NavigationBar />
  </header>
);

export default Header;
