<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Удаление данных сессии
session_destroy();
echo json_encode(['success' => true, 'message' => 'Logged out successfully']);
?>
