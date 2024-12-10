<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

include 'db.php';

// Получение фильтров из GET-запроса
$filter_meno = isset($_GET['meno']) ? htmlspecialchars($_GET['meno']) : '';
$filter_stat = isset($_GET['stat']) ? htmlspecialchars($_GET['stat']) : '';
$filter_email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$filter_rok_narodenia = isset($_GET['rok_narodenia']) ? intval($_GET['rok_narodenia']) : null;

$query = "SELECT * FROM users WHERE 1=1";
$params = [];

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
    $stmt = $conn->prepare($query);
    $stmt->execute($params);

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => true, 'users' => $users]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error fetching users: ' . $e->getMessage()]);
}
?>
