import React, { useState } from "react";
import "../../styles/AuthModal.css";

const AuthModal = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const handleClose = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.elements["register-username"].value;
    const email = e.target.elements["register-email"].value;
    const password = e.target.elements["register-password"].value;
    const confirmPassword = e.target.elements["register-confirm-password"].value;
  
    if (password !== confirmPassword) {
      alert("Heslá sa nezhodujú!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Úspešná registrácia!");
        handleClose();
      } else {
        alert(data.message || "Chyba počas registrácie");
      }
    } catch (error) {
      console.error("Chyba:", error);
      alert("Nepodarilo sa pripojiť k serveru");
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements["login-email"].value;
    const password = e.target.elements["login-password"].value;
  
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Úspešné prihlásenie!");
        console.log("Token:", data.token);
        handleClose();
      } else {
        alert(data.message || "Chyba počas prihlásenia");
      }
    } catch (error) {
      console.error("Chyba:", error);
      alert("Nepodarilo sa pripojiť k serveru");
    }
  };

  return (
    <div className="auth-container">
      <button className="btn btn-primary" onClick={handleLoginOpen}>
        Prihlásiť sa
      </button>
      <button className="btn btn-secondary" onClick={handleRegisterOpen}>
        Registrácia
      </button>

      {/* Módálne okno pre Prihlásenie */}
      {isLoginOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Prihlásenie</h2>
            <form>
              <label htmlFor="login-email">Email:</label>
              <input type="email" id="login-email" placeholder="Zadajte email" required />
              <label htmlFor="login-password">Heslo:</label>
              <input type="password" id="login-password" placeholder="Zadajte heslo" required />
              <button type="submit" className="btn btn-primary">
                Prihlásiť sa
              </button>
            </form>
            <button className="btn-close" onClick={handleClose}></button>
          </div>
        </div>
      )}

      {/* Módálne okno pre Registráciu */}
      {isRegisterOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Registrácia</h2>
            <form onSubmit={handleLogin}>
  <label htmlFor="login-email">Email:</label>
  <input type="email" id="login-email" placeholder="Zadajte email" required />
  <label htmlFor="login-password">Heslo:</label>
  <input type="password" id="login-password" placeholder="Zadajte heslo" required />
  <button type="submit" className="btn btn-primary">
    Prihlásiť sa
  </button>
</form>

<form onSubmit={handleRegister}>
  <label htmlFor="register-username">Používateľské meno:</label>
  <input
    type="text"
    id="register-username"
    placeholder="Zadajte používateľské meno"
    required
  />
  <label htmlFor="register-email">Email:</label>
  <input type="email" id="register-email" placeholder="Zadajte email" required />
  <label htmlFor="register-password">Heslo:</label>
  <input type="password" id="register-password" placeholder="Zadajte heslo" required />
  <label htmlFor="register-confirm-password">Potvrďte heslo:</label>
  <input
    type="password"
    id="register-confirm-password"
    placeholder="Potvrďte heslo"
    required
  />
  <button type="submit" className="btn btn-primary">
    Registrovať sa
  </button>
</form>

            <button className="btn-close" onClick={handleClose}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthModal;
