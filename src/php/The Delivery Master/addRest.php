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
if (!isset($data->name) || !isset($data->area) || !isset($data->address) || !isset($data->type) 
|| !isset($data->about) || !isset($data->description) || !isset($data->image) || !isset($data->phone) 
|| !isset($data->hours) || !isset($data->services) || !isset($data->rating)){
echo json_encode([
'success' => 0,
'message' => 'All fields are required',
]);
exit;
}
elseif (empty(trim($data->name)) || empty(trim($data->area)) ||  empty(trim($data->address))
 || empty(trim($data->type)) || empty(trim($data->about)) || empty(trim($data->description)) || empty(trim($data->image)) || empty(trim($data->phone))
 || empty(trim($data->hours))|| empty(trim($data->services))|| empty(trim($data->rating))){
echo json_encode([
'success' => 0,
'message' => 'Field cannot be empty. Please fill all the fields.',
]);
exit;
}
$name = htmlspecialchars(trim($data->name));
$area = htmlspecialchars(trim($data->area));
$address = htmlspecialchars(trim($data->address));
$type = htmlspecialchars(trim($data->type));
$about = htmlspecialchars(trim($data->about));
$description = htmlspecialchars(trim($data->description));
$image = htmlspecialchars(trim($data->image));
$phone = htmlspecialchars(trim($data->phone));
$hours = htmlspecialchars(trim($data->hours));
$services = htmlspecialchars(trim($data->services));
$rating = htmlspecialchars(trim($data->rating));
$query = "INSERT INTO restaurants values (null,
'$name', '$area', '$address' , '$type' , '$about' , '$description' , '$image', '$phone', '$hours', '$services', '$rating')";
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