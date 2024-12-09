import React, { useState, useEffect } from "react";
import "../../styles/AuthModal.css";

const AuthModal = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // Состояние для авторизованного пользователя

  // Проверка сессии при загрузке страницы
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
        <div className="user-info">
          <p>
            Добро пожаловать, <strong>{loggedInUser.username}</strong>!
          </p>
          <p>Email: {loggedInUser.email}</p>
          <button onClick={handleLogout} className="btn btn-secondary">
            Выйти
          </button>
        </div>
      ) : (
        <>
          <button className="btn btn-primary" onClick={handleLoginOpen}>
            Prihlásiť sa
          </button>
          <button className="btn btn-secondary" onClick={handleRegisterOpen}>
            Registrácia
          </button>
        </>
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
    </div>
  );
};

export default AuthModal;
