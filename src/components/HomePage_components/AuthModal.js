import React, { useState, useEffect } from "react";
import "../../styles/AuthModal.css";

const AuthModal = () => {
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
    try {
      const response = await fetch("http://localhost/backend/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: document.getElementById("login-email").value,
          password: document.getElementById("login-password").value,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setLoggedInUser(result.user);
        alert("Успешный вход!");
        handleClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/backend/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: document.getElementById("register-username").value,
          email: document.getElementById("register-email").value,
          password: document.getElementById("register-password").value,
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert("Регистрация успешна!");
        handleClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
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
        alert(result.message);
      }
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  return (
    <div className="auth-container">
    {loggedInUser ? (
      <>
      <div className="auth_window">
        <p>
          Vitame vas, <strong>{loggedInUser.username}</strong>!
        </p>
        <p>Email: {loggedInUser.email}</p>
        <button onClick={handleLogout} className="btn btn-secondary">
          Odhlasit sa
        </button>
      </div>
      </>
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
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Registrácia</h2>
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
