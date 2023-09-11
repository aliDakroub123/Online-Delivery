<?php

// Connect to database
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
require 'db_connect.php';

// Handle GET request for list of restaurants
if ($_SERVER['REQUEST_METHOD'] === 'GET' && empty($_GET)) {
    $sql = "SELECT * FROM restaurants";
    $result = $link->query($sql);

    $restaurants = array();
    while ($row = $result->fetch_assoc()) {
        $restaurants[] = $row;
    }

    echo json_encode($restaurants);
}

// Handle GET request for details of a restaurant
if ($_SERVER['REQUEST_METHOD'] === 'GET' && !empty($_GET['name'])) {
    $name = $_GET['name'];
    $sql = "SELECT * FROM restaurants WHERE name='$name'";
    $result = $link->query($sql);

    $restaurant = $result->fetch_assoc();

    echo json_encode($restaurant);
}

$link->close();

?>