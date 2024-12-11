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

// Очистка и валидация данных
$meno = htmlspecialchars($data['meno']);
$rok_narodenia = intval($data['rok_narodenia']);
$stat = htmlspecialchars($data['stat']);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Хэширование пароля

if (!$email) {
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

try {
    $stmt = $conn->prepare("INSERT INTO users (meno, rok_narodenia, stat, email, password) VALUES (:meno, :rok_narodenia, :stat, :email, :password)");
    $stmt->bindParam(':meno', $meno);
    $stmt->bindParam(':rok_narodenia', $rok_narodenia);
    $stmt->bindParam(':stat', $stat);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password); // Привязываем пароль
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Registration successful']);
    exit;
} catch (PDOException $e) {
    // Проверка на дублирование email
    if ($e->getCode() == 23000) {
        echo json_encode(['success' => false, 'message' => 'E-mail už existuje']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $e->getMessage()]);
    }
    exit;
}
?>
