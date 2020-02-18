<?php

class userClass {
    protected $idUser;
    protected $username;
    protected $password;
    protected $name;
    protected $surname;
    protected $admin;
    
    function getIdUser() {
        return $this->idUser;
    }

    function getUsername() {
        return $this->username;
    }

    function getPassword() {
        return $this->password;
    }

    function setIdUser($idUser) {
        $this->idUser = $idUser;
    }

    function setUsername($username) {
        $this->username = $username;
    }

    function setPassword($password) {
        $this->password = $password;
    }
    
    function getName() {
        return $this->name;
    }

    function getSurname() {
        return $this->surname;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setSurname($surname) {
        $this->surname = $surname;
    }
    
    function setAdmin($admin) {
        $this->admin = $admin;
    }

    function getAdmin() {
        return $this->admin;
    }


}
