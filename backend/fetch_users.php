<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Подключение к базе данных
include 'db.php';

// Получаем параметры фильтрации из GET-запроса
$filter_meno = isset($_GET['meno']) ? htmlspecialchars($_GET['meno']) : '';
$filter_stat = isset($_GET['stat']) ? htmlspecialchars($_GET['stat']) : '';
$filter_email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$filter_rok_narodenia = isset($_GET['rok_narodenia']) ? intval($_GET['rok_narodenia']) : null;

// Базовый SQL-запрос
$query = "SELECT id, meno, rok_narodenia, stat, email, created_at FROM users WHERE 1=1";
$params = [];

// Добавляем фильтры к запросу
if ($filter_meno) {
    $query .= " AND meno LIKE :meno";
    $params[':meno'] = "%$filter_meno%";
}
if ($filter_stat) {
    $query .= " AND stat LIKE :stat";
    $params[':stat'] = "%$filter_stat%";
}
if ($filter_email) {
    $query .= " AND email LIKE :email";
    $params[':email'] = "%$filter_email%";
}
if ($filter_rok_narodenia) {
    $query .= " AND rok_narodenia = :rok_narodenia";
    $params[':rok_narodenia'] = $filter_rok_narodenia;
}



try {
    // Подготавливаем и выполняем SQL-запрос
    $stmt = $conn->prepare($query);
    $stmt->execute($params);

    // Получаем данные
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Отправляем результат клиенту
    echo json_encode([
        'success' => true,
        'users' => $users
    ]);
} catch (PDOException $e) {
    // Обработка ошибок
    echo json_encode([
        'success' => false,
        'message' => 'Error fetching users: ' . $e->getMessage()
    ]);
}
?>
