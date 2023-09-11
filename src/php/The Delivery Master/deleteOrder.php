<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] == "OPTIONS")
die();
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
http_response_code(405);
echo json_encode([
'success' => 0,
'message' => 'Bad Reqeust detected. HTTP method should be DELETE',
]);
exit;
}
require 'db_connect.php';

//checks if id is sent in the request via URL
if (!isset($_GET['id'])) { //id not sent
    echo json_encode([
    'success' => 0,
    'message' => 'Please provide the post ID.']
    );
    exit;
    }
    //at this point we are sure that the id of the contact is sent.
    //check if there is a contact having such id
    $query = "select * from orders where id ={$_GET['id']}";
    $result = mysqli_query($link, $query);
    if(mysqli_num_rows($result) == 1){//id exists in the table contacts
    mysqli_query($link, "delete from orders where id ={$_GET['id']}");
    if(mysqli_affected_rows($link) > 0){
    echo json_encode([
    'success' => 1,
    'message' => 'Record Deleted successfully'
    ]);
    exit;
    }
    echo json_encode([
    'success' => 0,
    'message' => 'Could not delete. Something went wrong.'
    ]);
    exit;
    }
    else {
    echo json_encode([
    'success' => 0,
    'message' => 'Invalid ID. No posts found by the ID.']);
    exit;
    }
    ?>