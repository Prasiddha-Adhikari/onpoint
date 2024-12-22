<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "user";
$password = "password";
$dbname = "dbname";
 // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

// SQL query to fetch images
$sql = "SELECT `id`, `image` FROM `gallery`";
$result = $conn->query($sql);

if ($result === false) {
    echo json_encode(['status' => 'error', 'message' => 'SQL Error: ' . $conn->error]);
    exit;
}

$images = [];
while ($row = $result->fetch_assoc()) {
    // Base64 encode image data
    $row['image'] = base64_encode($row['image']);
    $images[] = $row;
}

// Send the response as JSON
echo json_encode(['status' => 'success', 'images' => $images]);

$conn->close();
?>
