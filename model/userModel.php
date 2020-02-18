<?php
include_once 'userClass.php';
include_once 'connect_data.php';
class userModel extends userClass{
    
    private $link;
 
    public function OpenConnect()
    {
    $konDat=new connect_data();
    try
    {
         $this->link=new mysqli($konDat->host,$konDat->userbbdd,$konDat->passbbdd,$konDat->ddbbname);
         
    }
    catch(Exception $e)
    {
    echo $e->getMessage();
    }
        $this->link->set_charset("utf8"); 
    }                   
 
    public function CloseConnect()
     {
     //mysqli_close ($this->link);
     $this->link->close();
 }
 
    public function LoginEncripted() // login, fill and return id of the user
    {
       
        $this->OpenConnect();
        
        $username=$this->username;
        
        $sql="call spLogin('$username')";
        
        $result= $this->link->query($sql);
        
        $userExists=false;
        
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $passwordEncripted=$row['password'];
            
            if (password_verify($this->getPassword(), $passwordEncripted))
            {
                $this->setIdUser($row['idUser']);
                
                $userExists=true;
            }
        }
        return $userExists;
        mysqli_free_result($result);
        $this->CloseConnect();
   
    }

}
