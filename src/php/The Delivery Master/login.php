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
    
    $email= mysqli_real_escape_string($mysqli,trim($request->email)) ;
   
    $password= mysqli_real_escape_string($mysqli,trim($request->password)) ;
    
    $sql= "SELECT * FROM register WHERE email='$email' and password='$password'";
  //  $result= mysqli_query($mysqli,$sql);
  //  $nums=mysqli_num_rows($result);


    $res = mysqli_query($mysqli, $sql);
    if(mysqli_num_rows($res)>0){
    $data = array();
    while($row = mysqli_fetch_assoc($res))
    $data[] = $row;
    echo json_encode([
    'message' => 'success',
    'output' => $data,
    ]);
    }
    else
    echo json_encode([
    'success' => 0,
    'message' => 'No Record Found!',
    ]);

  //  if($nums>0){
      
//$user=array();
    //   $user=$nums;
        


  //   $data=array('message'=>'success');

      // echo json_encode($data);
   
  //  }
   // else{
     //   $data=array('message'=>'failed');
     //   echo json_encode($data);
  //  }




?>