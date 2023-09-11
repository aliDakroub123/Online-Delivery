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
        $f_name= trim($request->f_name);
        $l_name= trim($request->l_name);
        $email= mysqli_real_escape_string($mysqli,trim($request->email)) ;
        $username= trim($request->username);
        $phone= trim($request->phone);
        $address=trim($request->address);
        $password= mysqli_real_escape_string($mysqli,trim($request->password)) ;
      //  $c_password= mysqli_real_escape_string($mysqli,trim($request->c_password)) ;

        $sql = "INSERT INTO register (f_name,l_name,email,username,phone,address,password/*,c_password*/) 
            VALUES ('$f_name','$l_name','$email','$username','$phone','$address','$password'/*,'$c_password'*/)";
    
            if($mysqli->query($sql)){
                $data=array('message'=>'success');
                echo json_encode($data);
            }else{
                $data=array('message'=>'failed');
                echo json_encode($data);
            }
        
        
    
/*if(isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["username"]) && isset($_POST["address"]) && isset($_POST["email"]) && isset($_POST["phone"]) && isset($_POST["date"]) && isset($_POST["password"]) && isset($_POST["cpass"])){
    $fname= $_POST["fname"];
    $lname= $_POST["lname"];
    $username= $_POST["username"];
    $address= $_POST["address"];
    $email= $_POST["email"];
    $phone= $_POST["phone"];
    $date= $_POST["date"];
    $password= $_POST["password"];
    $cpass= $_POST["cpass"];
        $sql = "INSERT INTO register(fname,lname,username,address,email,phone,date,password,cpass) 
                VALUES ('fname','lname','username','address','email','phone','date','password','cpass'  )";
                
}  

                    $result=$con->query($sql);
                    if($result->num_rows >0){
                        print "success";
                      
                    }else{
                        print "failed user";
                    }
*/
               
?>