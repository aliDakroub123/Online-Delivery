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
if (!isset($data->f_name) || !isset($data->l_name) ||  !isset($data->username) 
|| !isset($data->phone) || !isset($data->address) || !isset($data->r_name) || !isset($data->total)){
echo json_encode([
'success' => 0,
'message' => 'All fields are required',
]);
exit;
}
elseif (empty(trim($data->f_name)) || empty(trim($data->l_name)) 
 || empty(trim($data->username)) || empty(trim($data->phone)) || empty(trim($data->address)) || empty(trim($data->r_name))  || empty(trim($data->r_name))){
echo json_encode([
'success' => 0,
'message' => 'Field cannot be empty. Please fill all the fields.',
]);
exit;
}
$f_name = htmlspecialchars(trim($data->f_name));
$l_name = htmlspecialchars(trim($data->l_name));


$username = htmlspecialchars(trim($data->username));
$phone = htmlspecialchars(trim($data->phone));
$address = htmlspecialchars(trim($data->address));
$r_name = htmlspecialchars(trim($data->r_name));
$total = htmlspecialchars(trim($data->total));

$query = "INSERT INTO orders values (null,
'$f_name', '$l_name',  '$username' , '$phone' , '$address','$r_name' ,'$total')";
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