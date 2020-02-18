<?php
include_once 'eventClass.php';
include_once 'connect_data.php';
class eventModel extends eventClass{
    
    private $link;
    private $list=array();
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
    
    public function setEventsList()
    {
        
        
        $this->OpenConnect();
        
       
        
        $sql="call spAllEvents()";
        $result= $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
        {
            $event= new eventModel();
            $event->setId($row['id']);
            $event->setTitle($row['title']);
            $event->setEventDay($row['eventDay']);
            $event->setEventStart($row['eventStart']);
            $event->setEventEnd($row['eventEnd']);
            $event->setCity($row['city']);
            $event->setDescription($row['description']);
            $event->setPic($row['pic']);
            
           
            
            array_push($this->list,$event);
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
        
        
        
    }
    function getArrUsersCities()
    {
        
        $arr=array();
        
        foreach ($this->list as $object)
        {
            $vars = $object->getObjectVars();
            
            
            array_push($arr, $vars);
        }
        return $arr;
    }
    
}
