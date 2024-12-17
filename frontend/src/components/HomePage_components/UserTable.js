import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const UserTable = () => {
  const [users, setUsers] = useState([]); // Состояние для списка юзеров
  const [filters, setFilters] = useState({
    meno: "",
    stat: "",
    email: "",
    rok_narodenia: "",
  });

  // Функция для получения данных с сервера
  const fetchUsers = async () => {
    try {
      const query = new URLSearchParams(filters).toString(); // Формируем строку GET-запроса
      const response = await fetch(`http://localhost/backend/fetch_users.php?${query}`);
      const result = await response.json();

      if (result.success) {
        setUsers(result.users); // Обновляем список юзеров
      } else {
        console.error("Ошибка получения данных:", result.message);
      }
    } catch (error) {
      console.error("Ошибка сервера:", error);
    }
  };

  // Функция для удаления пользователя
  const handleDelete = async (userId) => {
    try {
      const response = await fetch("http://localhost/backend/delete_user.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId }),
      });
      const result = await response.json();

      if (result.success) {
        // Обновляем список пользователей после удаления
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        Toastify({
          text: "Používateľ bol úspešne odstránený!",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "#28a745",
          style: {
            fontSize: "16px",
            borderRadius: "8px",
          },
        }).showToast();
      } else {
        console.error("Ошибка при удалении пользователя:", result.message);
      }
    } catch (error) {
      console.error("Ошибка сервера:", error);
    }
  };

  // Загрузка данных при изменении фильтров
  useEffect(() => {
    fetchUsers();
  }, [filters]);

  // Обновление фильтров с защитой от XSS
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: DOMPurify.sanitize(value),
    }));
  };

  return (
    <div className="container">
      <h2>Filtrovanie podľa zadaných údajov</h2>

      {/* Форма для фильтрации */}
      <div className="filters">
        <input
          type="text"
          name="meno"
          placeholder="Meno"
          value={filters.meno}
          onChange={handleFilterChange}
          style={{ border: "3px solid #aaa", marginBottom: "6px", padding: "4px" }}
        />
        <input
          type="text"
          name="stat"
          placeholder="Štát"
          value={filters.stat}
          onChange={handleFilterChange}
          style={{ border: "3px solid #aaa", marginBottom: "6px", padding: "4px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={filters.email}
          onChange={handleFilterChange}
          style={{ border: "3px solid #aaa", marginBottom: "6px", padding: "4px" }}
        />
        <input
          type="number"
          name="rok_narodenia"
          placeholder="Rok narodenia"
          value={filters.rok_narodenia}
          onChange={handleFilterChange}
          style={{ border: "3px solid #aaa", marginBottom: "6px", padding: "4px" }}
        />
      </div>

      {/* Таблица с юзерами */}
      <h2>Tabuľka používateľov</h2>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Meno</th>
            <th>Rok narodenia</th>
            <th>Štát</th>
            <th>Email</th>
            <th>Vytvorené</th>
            <th>Akcia</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.meno}</td>
                <td>{user.rok_narodenia}</td>
                <td>{user.stat}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ display: "block", margin: "0 auto" }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Odstrániť
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                Žiadni používatelia neboli nájdení.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
