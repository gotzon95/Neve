<?php
include_once '../model/userModel.php';


$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);


$response = array();

if (($username !=null ) && ($password !=null )){
    $user=new userModel();

    $user->setUsername($username);
    $user->setPassword($password);
    
    
    if ($user->LoginEncripted()) // si es correcto el userName y el password
    {
        session_start();
        $_SESSION['id']=$user->getIdUser();
        $_SESSION['pic']=$user->getPic();
        $_SESSION['admin']=$user->getAdmin();
        $_SESSION['username']=$username;
       
        $response["username"] = $username;
        
        $response["err"]  = "Ok";
        echo json_encode($response);
        
    }  else {
        
        echo json_encode($response); // not correct user
    }
    
    
}else{
    echo json_encode($response);
}

// user, password and captcha verify




