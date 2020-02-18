<?php
session_start(); 

$response=array();

if (isset($_SESSION['id']) && (isset($_SESSION['username'])))
{
    $response["id"] = $_SESSION["id"];
    $response["username"] = $_SESSION["username"];
   

    $response["err"] = "Ok";
    
    
    
}else{
    $response["err"] = "error";
}
echo json_encode($response);



