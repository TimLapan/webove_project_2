<?php
session_start(); // Запуск сессии
include 'db.php'; // Подключение к базе данных

// Заголовки для CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Если запрос preflight (OPTIONS), завершить его без выполнения основного кода
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Получение данных из POST-запроса
$data = json_decode(file_get_contents("php://input"), true);

// Проверка, что email и password были переданы
if (!isset($data['email'], $data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

// Очистка данных
$email = htmlspecialchars($data['email']);
$password = $data['password'];

try {
    // Подготовка SQL-запроса для проверки пользователя по email
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    // Извлечение данных пользователя
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Проверка пароля и генерация ответа
    if ($user && password_verify($password, $user['password'])) {
        // Сохранение данных пользователя в сессии
        $_SESSION['user'] = [
            'id' => $user['id'],
            'meno' => $user['meno'], // Используйте правильное поле для имени
            'rok_narodenia' => $user['rok_narodenia'], // Добавьте год рождения
            'stat' => $user['stat'], // Добавьте страну
            'email' => $user['email']
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Login successful',
            'user' => $_SESSION['user']
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
    }
} catch (PDOException $e) {
    // Обработка ошибок базы данных
    echo json_encode(['success' => false, 'message' => 'Login failed: ' . $e->getMessage()]);
    exit;
}
?>
