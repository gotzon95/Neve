<?php

include_once '../model/eventModel.php';


$response = array();

$events = new eventModel();

$events->setEventsList();

$response=$events->getArrUsersCities();

// get users visited cities


echo json_encode($response);
