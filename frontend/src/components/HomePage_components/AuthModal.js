import React, { useState, useEffect } from "react";
import "../../styles/AuthModal.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import DOMPurify from 'dompurify';
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("http://localhost/backend/check_session.php");
        const result = await response.json();
        if (result.success) {
          setLoggedInUser(result.user);
        }
      } catch (error) {
        console.error("Ошибка при проверке сессии:", error);
      }
    };
    checkSession();
  }, []);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = DOMPurify.sanitize(document.getElementById("login-email").value.trim());
    const password = DOMPurify.sanitize(document.getElementById("login-password").value.trim());

    // Проверка на admin/admin
    if (email === "admin@com" && password === "admin") {
      Toastify({
        text: "Úspešné prihlásenie ako administrátor!",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#28a745",
        style: {
          fontSize: "16px",
          borderRadius: "8px",
        },
      }).showToast();
      navigate("/admin"); // Перенаправление на страницу с таблицей юзеров
      return;
    }

    try {
      const response = await fetch("http://localhost/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        setLoggedInUser(result.user);
        Toastify({
          text: "Úspešné prihlásenie!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#28a745",
        }).showToast();
        handleClose();
      } else {
        Toastify({
          text: "Prihlásenie zlyhalo! Nesprávne heslo alebo e-mail",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#FF5733",
        }).showToast();
      }
    } catch (error) {
      console.error("Chyba pri prihlasovaní:", error);
      Toastify({
        text: "Došlo k chybe pri prihlasovaní. Skúste to znova.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5733",
      }).showToast();
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const meno = DOMPurify.sanitize(document.getElementById("register-meno").value.trim());
    const rok_narodenia = parseInt(DOMPurify.sanitize(document.getElementById("register-rok-narodenia").value.trim()), 10);
    const stat = DOMPurify.sanitize(document.getElementById("register-stat").value.trim());
    const email = DOMPurify.sanitize(document.getElementById("register-email").value.trim());
    const password = DOMPurify.sanitize(document.getElementById("register-password").value.trim());
  
    const currentYear = new Date().getFullYear();
    if (isNaN(rok_narodenia) || rok_narodenia < 1900 || rok_narodenia > currentYear) {
      Toastify({
        text: "Zadajte správny rok narodenia (napríklad 1990).",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5733",
      }).showToast();
      return;
    }
  
    if (password.length < 8) {
      Toastify({
        text: "Heslo musí obsahovať minimálne 8 znakov.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5733",
      }).showToast();
      return;
    }
  
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
  
      const validCountry = countries.some(
        (country) => country.name.common.toLowerCase() === stat.toLowerCase()
      );
  
      if (!validCountry) {
        Toastify({
          text: "Zadajte platný názov krajiny.",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#F57F17",
        }).showToast();
        return;
      }
  
      const data = { meno, rok_narodenia, stat, email, password };
  
      const registerResponse = await fetch("http://localhost/backend/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await registerResponse.json();
      if (result.success) {
        Toastify({
          text: "Registrácia bola úspešná!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#28a745",
        }).showToast();
        handleClose();
      } else {
        Toastify({
          text: result.message || "Došlo k chybe pri registrácii.",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#FF5733",
        }).showToast();
      }
    } catch (error) {
      console.error("Chyba pri registrácii:", error);
      Toastify({
        text: "Došlo k chybe na strane klienta.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5733",
      }).showToast();
    }
  };
  
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost/backend/logout.php", {
        method: "POST",
      });
      const result = await response.json();
      if (result.success) {
        setLoggedInUser(null);
        Toastify({
          text: "Úspešne ste sa odhlásili zo svojho účtu.",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#28a745",
        }).showToast();
      }
    } catch (error) {
      console.error("Ошибка при выходе:", error);
      Toastify({
        text: "Произошла ошибка при выходе.",
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "#FF5733",
      }).showToast();
    }
  };

  return (
    <div className="auth-container">
      {loggedInUser ? (
        <div className="auth_window">
          <p>
            Vitame vas, <strong>{loggedInUser.meno}</strong>!
          </p>
          <p><strong>Email</strong>: {loggedInUser.email}</p>
          <p><strong>Štát</strong>: {loggedInUser.stat}</p>
          <p><strong>Rok narodenia:</strong> {loggedInUser.rok_narodenia}</p>
          <button onClick={handleLogout} className="btn btn-secondary">
            Odhlasit sa
          </button>
        </div>
      ) : (
        <div className="button_container d-flex flex-column flex-md-row justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={handleLoginOpen}>
            Prihlásiť sa
          </button>
          <button className="btn btn-secondary" onClick={handleRegisterOpen}>
            Registrácia
          </button>
        </div>
      )}

      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Prihlásenie</h2>
            <form onSubmit={handleLogin}>
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

      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Registrácia</h2>
            <form onSubmit={handleRegister}>
              <label htmlFor="register-meno">Meno:</label>
              <input type="text" id="register-meno" placeholder="Zadajte meno" required />
              <label htmlFor="register-rok-narodenia">Rok narodenia:</label>
              <input
                type="number"
                id="register-rok-narodenia"
                placeholder="Zadajte rok narodenia"
                required
              />
              <label htmlFor="register-stat">Krajina:</label>
              <input type="text" id="register-stat" placeholder="Zadajte krajinu" required />
              <label htmlFor="register-email">Email:</label>
              <input type="email" id="register-email" placeholder="Zadajte email" required />
              <label htmlFor="register-password">Heslo:</label>
              <input
                type="password"
                id="register-password"
                placeholder="Zadajte heslo"
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
