<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if (isset($_SESSION['user'])) {
    echo json_encode(['success' => true, 'user' => $_SESSION['user']]);
} else {
    echo json_encode(['success' => false, 'message' => 'No active session']);
}
?>
