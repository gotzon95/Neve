<?php

include_once '../model/eventModel.php';

$id=filter_input(INPUT_GET, 'id');
$response = array();

$events = new eventModel();
$events->setId($id);
$events->setEventsModal();

$response=$events->getArrUsersCities();

// get users visited cities


echo json_encode($response);
