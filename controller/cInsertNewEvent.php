<?php
require_once '../model/eventModel.php';

$title=filter_input(INPUT_POST, 'title');
$day=filter_input(INPUT_POST, 'day');
$eventStart=filter_input(INPUT_POST, 'eventStart');
$eventEnd=filter_input(INPUT_POST, 'eventEnd');
$city=filter_input(INPUT_POST, 'city');
$description=filter_input(INPUT_POST, 'description');
$bannername=filter_input(INPUT_POST, 'bannername');
$savedBannerBase64=filter_input(INPUT_POST, 'savedBannerBase64');
$picname=filter_input(INPUT_POST, 'picname');
$savedPicBase64=filter_input(INPUT_POST, 'savedPicBase64');
$video=filter_input(INPUT_POST, 'video');

session_start();
if (isset($_SESSION['id']) )
{
    $idUser=$_SESSION['id'];
    
} 

$event=new eventModel();
$event->setTitle($title);
$event->setEventDay($day);
$event->setEventStart($eventStart);
$event->setEventEnd($eventEnd);
$event->setCity($city);
$event->setDescription($description);
$event->setBanner($bannername);
$event->setPic($picname);
$event->setVideo($video);

$event->setIdUser($idUser);


$bannerBase64 = explode(',', $savedBannerBase64)[1];

// Se convierte de base64 a binario/texto para almacenarlo
$banner = base64_decode($bannerBase64);

/*Se especifica el directorio donde se almacenarán los ficheros(se crea si no existe)*/
$writable_dir = '../view/images/';

if(!is_dir($writable_dir)){mkdir($writable_dir);}

//Se escribe el archivo

file_put_contents($writable_dir.$bannername, $banner,  LOCK_EX);




$picBase64 = explode(',', $savedPicBase64)[1];

// Se convierte de base64 a binario/texto para almacenarlo
$pic = base64_decode($picBase64);

/*Se especifica el directorio donde se almacenarán los ficheros(se crea si no existe)*/
$writable_dir = '../view/images/';

if(!is_dir($writable_dir)){mkdir($writable_dir);}

//Se escribe el archivo

file_put_contents($writable_dir.$picname, $pic,  LOCK_EX);


$resultado=$event->insertEvent();
echo $resultado;
