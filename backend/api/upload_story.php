<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$servername = "localhost";
$username = "onpointeducation";
$password = "Design@2025";
$dbname = "onpointeducation_php122";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

if (!isset($_FILES['photo']) || !isset($_POST['testimonial_text']) || !isset($_POST['name'])) {
    echo json_encode(["success" => false, "message" => "Photo, name, and testimonial text are required."]);
    exit;
}

$file = $_FILES['photo'];
$testimonialText = $conn->real_escape_string($_POST['testimonial_text']);
$name = $conn->real_escape_string($_POST['name']);

// Validate file upload error
if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(["success" => false, "message" => "Error uploading file: " . $file['error']]);
    exit;
}

// Validate file type (only allow image files)
$allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
if (!in_array($file['type'], $allowedMimeTypes)) {
    echo json_encode(["success" => false, "message" => "Invalid file type. Only JPG, PNG, and GIF are allowed."]);
    exit;
}

// Read image data as binary
$imageData = file_get_contents($file['tmp_name']);
$imageDataEscaped = $conn->real_escape_string($imageData);

$sql = "INSERT INTO testimonial (name, testimonial_text, photo) VALUES ('$name', '$testimonialText', '$imageDataEscaped')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Testimonial uploaded successfully!", "id" => $conn->insert_id]);
} else {
    echo json_encode(["success" => false, "message" => "Error saving to database: " . $conn->error]);
}

$conn->close();
?>
