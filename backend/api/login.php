<?php
// Display errors for debugging during development
ini_set('display_errors', 1);
error_reporting(E_ALL);

// CORS Headers
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Set Content-Type for JSON responses
header("Content-Type: application/json");

include 'db.php';

// Check database connection
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

// Parse input data
$data = json_decode(file_get_contents("php://input"), true);
if ($data === null) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Invalid JSON input"]);
    exit;
}

// Validate input
if (!isset($data['email'], $data['password'])) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Email and password are required"]);
    exit;
}

$email = $data['email'];
$password = $data['password'];

try {
    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            // Remove sensitive fields before sending user data
            unset($user['password']);

            http_response_code(200); // OK
            echo json_encode([
                "message" => "Login successful",
                "user" => $user,
                "token" => bin2hex(random_bytes(16)), // Example token
            ]);
        } else {
            http_response_code(401); // Unauthorized
            echo json_encode(["message" => "Invalid password"]);
        }
    } else {
        http_response_code(404); // Not Found
        echo json_encode(["message" => "User not found"]);
    }

    $stmt->close();
} catch (Exception $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["message" => "An error occurred", "error" => $e->getMessage()]);
}

$conn->close();
