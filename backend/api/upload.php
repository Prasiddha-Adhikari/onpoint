<?php
// Set response headers for JSON
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "onpointeducation";
$password = "Design@2025";
$dbname = "onpointeducation_php122"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        'status' => 'error',
        'message' => 'Connection failed: ' . $conn->connect_error,
    ]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the file is uploaded
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['image']['tmp_name'];
        $fileName = $_FILES['image']['name'];
        $fileSize = $_FILES['image']['size'];
        $fileType = $_FILES['image']['type'];

        // Optional: Verify that the file is an image (check mime type)
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($fileType, $allowedTypes)) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid file type. Only JPG, PNG, and GIF files are allowed.',
            ]);
            exit;
        }

        // Read the file content and store it in a variable
        $imageData = file_get_contents($fileTmpPath);

        // Prepare and bind SQL statement
        $stmt = $conn->prepare("INSERT INTO gallery (image) VALUES (?)");
        $stmt->bind_param("s", $imageData); // Use "s" for string (binary data)

        // Execute the query
        if ($stmt->execute()) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Image uploaded successfully to the database!',
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'Failed to insert image into the database: ' . $stmt->error,
            ]);
        }

        // Close statement and connection
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'No file uploaded or there was an error during the upload.',
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method.',
    ]);
}
?>
