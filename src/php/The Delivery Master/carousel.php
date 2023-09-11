<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
require 'db_connect.php';
//$sql = isset($_GET['id']) ? "SELECT * FROM `tes` WHERE id='{$_GET['id']}'" :
//"SELECT * FROM `tes`";
$sql= "Select * from `carousel` ORDER by id";
$res = mysqli_query($link, $sql);
if(mysqli_num_rows($res)>0){
$data = array();
while($row = mysqli_fetch_assoc($res))
$data[] = $row;
echo json_encode([
'success' => 1,
'output' => $data,
]);
}
else
echo json_encode([
'success' => 0,
'message' => 'No Record Found!',
]);
?>