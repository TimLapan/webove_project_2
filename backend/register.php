<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

include 'db.php';

// Получение данных
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'], $data['email'], $data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$username = htmlspecialchars($data['username']);
$email = htmlspecialchars($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT);

try {
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Registration successful']);
    exit;
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $e->getMessage()]);
    exit;
}
?>
