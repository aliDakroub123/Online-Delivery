<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With,Access-Control-Request-Headers");



$mysqli= new mysqli("localhost","root", "","the_delivery_master");

if($mysqli->connect_error){
    die('Error : ('. $mysqli->connect_errno .')' . $mysqli->connect_error); 
}



$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
    $request = json_decode($postdata);
    
    $username= mysqli_real_escape_string($mysqli,trim($request->username)) ;
   
    $password= mysqli_real_escape_string($mysqli,trim($request->password)) ;
    
    $sql= "SELECT * FROM admin WHERE username='$username' and password='$password'";
    $result= mysqli_query($mysqli,$sql);
    $nums=mysqli_num_rows($result);

    if($nums>0){
        $data=array('message'=>'success');
        echo json_encode($data);
    }
    else{
        $data=array('message'=>'failed');
        echo json_encode($data);
    }