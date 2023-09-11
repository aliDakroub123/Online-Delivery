<?php
header("Access-Control-Allow-Origin: *"); // to make the API public to anyone

header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Authorization, XRequested-With,Access-Control-Request-Headers");
// return only the headers and not the content
if ($_SERVER['REQUEST_METHOD'] == "OPTIONS")
die();
if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    echo json_encode([
    'success' => 0,
    'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
    }
require 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
if (!isset($data->username) || !isset($data->password)){
echo json_encode([
'success' => 0,
'message' => 'All fields are required',
]);
exit;
}
elseif (empty(trim($data->username)) || empty(trim($data->password))){
echo json_encode([
'success' => 0,
'message' => 'Field cannot be empty. Please fill all the fields.',
]);
exit;
}
$username = htmlspecialchars(trim($data->username));
$password = htmlspecialchars(trim($data->password));

$query = "INSERT INTO admin values (null,
'$username', '$password')";
mysqli_query($link, $query);
if(mysqli_affected_rows($link)>0){
    http_response_code(201);
    echo json_encode([
    'success' => 1,
    'message' => 'Data Inserted Successfully.'
    ]);
    exit;
    }
    echo json_encode([
    'success' => 0,
    'message' => 'There is some problem in data inserting'
    ]);
    exit;
    ?>