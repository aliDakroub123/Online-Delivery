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
    $sql = "SELECT * FROM orders";
    $result = $link->query($sql);

    $orders = array();
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }

    echo json_encode($orders);
}

// Handle GET request for details of a restaurant
if ($_SERVER['REQUEST_METHOD'] === 'GET' && !empty($_GET['username'])) {
    $username = $_GET['username'];
    $sql = "SELECT * FROM orders WHERE username='$username'";
    $results = $link->query($sql);
    $order=array();
   // $order = $result->fetch_assoc();
   while ($roww = $results->fetch_assoc()) {
    $order[] = $roww;
}
    echo json_encode($order);
}

$link->close();

?>