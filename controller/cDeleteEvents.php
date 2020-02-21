<?php
include_once ("../model/eventModel.php");

$event=new eventModel();

$id=filter_input(INPUT_GET,"id");

echo($id);
if (isset($id))
{
    $event->setId($id);
}

$resultado=$event->delete();
echo $resultado;

//header('Location: ../index.php');
?>