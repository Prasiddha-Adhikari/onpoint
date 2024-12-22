<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$imageId = $data['id'];

$servername = "localhost";
$username = "onpointeducation";
$password = "Design@2025";
$dbname = "onpointeducation_php122"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$stmt = $conn->prepare("DELETE FROM gallery WHERE id = ?");
$stmt->bind_param("i", $imageId);
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Image deleted successfully.']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to delete image.']);
}

$stmt->close();
$conn->close();
?>
