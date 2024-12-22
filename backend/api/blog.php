<?php
include 'db.php'; // Database connection

// Allow CORS for all domains (You may restrict this to specific domains in production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // End the request early
}

header('Content-Type: application/json');

// Handle message POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Decode the JSON data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if required fields are set
    if (!isset($data['fullname'], $data['subject'], $data['email'], $data['message']) ||
        empty($data['fullname']) || empty($data['subject']) || empty($data['email']) || empty($data['message'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Full name, subject, email, and message are required"
        ]);
        exit;
    }

    // Get the message details from the decoded JSON
    $fullname = $data['fullname'];
    $subject = $data['subject'];
    $email = $data['email'];
    $message = $data['message'];

    // Prepare the SQL query to insert the message
    $sql = "INSERT INTO `message` (`fullname`, `subject`, `email`, `message`) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $fullname, $subject, $email, $message); // Bind fullname, subject, email, and message

    // Execute the query and check for success
    if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Message posted successfully"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Failed to post message"
        ]);
    }
}

// Handle message DELETE request
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Get the message ID from the query string
    $messageId = $_GET['id'];  // Use $_GET to fetch the id

    if (!$messageId) {
        echo json_encode([
            "status" => "error",
            "message" => "Message ID is required"
        ]);
        exit;
    }

    // Prepare the SQL query to delete the message
    $sql = "DELETE FROM message WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $messageId);

    // Execute the query and check for success
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
}

// Handle GET request to fetch messages
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "SELECT * FROM message";
    $result = mysqli_query($conn, $sql);

    $messages = [];
    while ($row = mysqli_fetch_assoc($result)) {
        // Add each message to the array
        $messages[] = $row;
    }

    echo json_encode($messages);
}
?>
