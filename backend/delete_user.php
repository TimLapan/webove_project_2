<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Проверка preflight-запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Подключение к базе данных
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id'])) {
    $id = intval($data['id']);
    try {
        $stmt = $conn->prepare("DELETE FROM users WHERE id = :id");
        $stmt->bindParam(":id", $id);
        $stmt->execute();

        echo json_encode(["success" => true, "message" => "Užívateľ bol úspešne odstránený."]);
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Chyba pri odstraňovaní: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "ID používateľa nie je definované."]);
}
?>