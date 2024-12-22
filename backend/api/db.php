<?php
$servername = "localhost";
$username = "onpointeducation"; // Replace with your database username
$password = "Design@2025"; // Replace with your database password
$dbname = "onpointeducation_php122"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
