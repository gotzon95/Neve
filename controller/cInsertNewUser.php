<?php
require_once '../model/userModel.php';

$username=filter_input(INPUT_GET, 'username');
$password=filter_input(INPUT_GET, 'contrasenia');
$name=filter_input(INPUT_GET, 'name');
$surname=filter_input(INPUT_GET, 'surname');


$user=new userModel();
$user->setUsername($username);
$user->setPassword($password);
$user->setName($name);
$user->setSurname($surname);


$resultado=$user->insertUser();
echo $resultado;
