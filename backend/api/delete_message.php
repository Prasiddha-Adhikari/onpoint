<?php
include 'db.php'; // Include database connection

// Allow CORS for all domains
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    exit; // End the request early
}

// Handle DELETE request
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Parse the body of the DELETE request to extract the message ID
    parse_str(file_get_contents("php://input"), $data); // Get data from the DELETE request
    $messageId = $_GET['id'] ?? $data['id'] ?? null;  // Get ID from query string or body

    // Check if ID is provided
    if (!$messageId) {
        echo json_encode([
            "status" => "error",
            "message" => "Message ID is required"
        ]);
        exit;
    }

    // Prepare the SQL query to delete the message
    $sql = "DELETE FROM contact_message WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $messageId); // Bind the ID parameter

    // Execute the delete query
    if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Message deleted successfully"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Failed to delete message"
        ]);
    }

    // Close the prepared statement
    $stmt->close();
}

// Close database connection
$conn->close();
?>
