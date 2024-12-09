import React from "react";
import NavigationBar from "./NavigationBar";
import AuthModal from "./AuthModal";

const Header = () => (
  <header className="bg-dark text-white p-3">
    <h1 id="index_white" className="text-center">Štúdium neurónových sietí v Pythone</h1>
    <hr />
    <AuthModal />
    <NavigationBar />
  </header>
);

export default Header;
