import React from "react";
import UserTable from "../components/HomePage_components/UserTable"; // Импорт компонента UserTable

const AdminPage = () => {
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Admin Panel - Tabuľka používateľov
      </h1>
      {/* Вызов компонента UserTable */}
      <UserTable />
    </div>
  );
};

export default AdminPage;
