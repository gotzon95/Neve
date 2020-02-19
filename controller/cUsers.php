<?php

include_once '../model/userModel.php';


$response = array();

$users = new userModel();

$users->setUsersList();

$response=$users->getArrUsers();



echo json_encode($response);
