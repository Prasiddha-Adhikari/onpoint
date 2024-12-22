<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); // No Content
    exit;
}

include 'db.php'; // Ensure this file contains your DB connection setup

// Get the input data
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
    echo json_encode(["message" => "Invalid input. All fields are required."]);
    http_response_code(400); // Bad Request
    exit;
}

$fullName = $conn->real_escape_string($data['fullName']);
$email = $conn->real_escape_string($data['email']);
$password = password_hash($data['password'], PASSWORD_BCRYPT);

// Check if the email already exists
$checkEmailQuery = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($checkEmailQuery);

if (!$stmt) {
    echo json_encode(["message" => "Error preparing the query: " . $conn->error]);
    http_response_code(500); // Internal Server Error
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["message" => "Email already exists"]);
    http_response_code(409); // Conflict
    $stmt->close();
    exit;
}

// Insert the new user
$insertQuery = "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
$stmt = $conn->prepare($insertQuery);

if (!$stmt) {
    echo json_encode(["message" => "Error preparing the insert query: " . $conn->error]);
    http_response_code(500); // Internal Server Error
    exit;
}

$stmt->bind_param("sss", $name, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully"]);
    http_response_code(201); // Created
} else {
    echo json_encode(["message" => "Registration failed: " . $stmt->error]);
    http_response_code(500); // Internal Server Error
}

$stmt->close();
$conn->close();
?>
