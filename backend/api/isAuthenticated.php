<?php
session_start();
header('Content-Type: application/json');
echo json_encode(["isAuthenticated" => isset($_SESSION['user_id'])]);
?>
