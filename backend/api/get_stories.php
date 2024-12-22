<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *"); // Allow all origins, or specify the frontend URL
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // Allowed methods
header("Access-Control-Allow-Headers: Content-Type"); // Allowed headers


// Define database constants (replace with your actual database details)
define('DB_HOST', 'localhost');
define('DB_USER', 'onpointeducation'); // Replace with your DB username
define('DB_PASSWORD', 'Design@2025'); // Replace with your DB password
define('DB_NAME', 'onpointeducation_php122'); // Replace with your DB name

// Establish database connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch stories, including the image_data
$sql = "SELECT `id`, `name`, `testimonial_text`, `photo` FROM testimonial";
$result = $conn->query($sql);

// Check if any records were returned
if ($result->num_rows > 0) {
    $stories = []; 
    while ($row = $result->fetch_assoc()) {
        // Convert the image_data (LONGBLOB) to base64
        $photo_base64 = base64_encode($row['photo']);
        $photo_url = 'data:image/jpeg;base64,' . $photo_base64; // Adjust MIME type (image/jpeg, image/png, etc.)

        // Add the photo_url to the response
        $stories[] = [
            'id' => $row['id'],
            'name' => $row['name'], // Correctly referencing 'name' column
            'caption' => $row['testimonial_text'], // Correctly referencing 'testimonial_text' column
            'photo_url' => $photo_url, // Base64-encoded image data
        ];
    }

    echo json_encode(['success' => true, 'data' => $stories]);
} else {
    echo json_encode(['success' => false, 'message' => 'No stories found']);
}

// Close the database connection
$conn->close();
?>
