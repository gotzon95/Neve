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
            $event->setBanner($row['banner']);
            $event->setVideo($row['video']);
            $event->setIdUser($row['idUser']);
           
            
            array_push($this->list,$event);
            
        }
        
        mysqli_free_result($result);
        $this->CloseConnect();
        
        
        
    }
    
    
    public function setEventsModal(){
        $id=$this->getId();
        $this->OpenConnect();
        $sql="call  spFindEventById($id)";
        $result = $this->link->query($sql);
        if ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            
            $this->setId($row['id']);
            $this->setTitle($row['title']);
            $this->setEventDay($row['eventDay']);
            $this->setEventStart($row['eventStart']);
            $this->setEventEnd($row['eventEnd']);
            $this->setCity($row['city']);
            $this->setDescription($row['description']);
            $this->setPic($row['pic']);
            $this->setBanner($row['banner']);
            $this->setVideo($row['video']);
            
            array_push($this->list,$this);
           
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        
    }
    
    
    public function insertEvent()
    {
        $this->OpenConnect();
        
        $title=$this->title;
        $day=$this->eventDay;
        $eventStart=$this->eventStart;
        $eventEnd=$this->eventEnd;
        $city=$this->city;
        $description=$this->description;
        $bannername=$this->banner;
        $picname=$this->pic;
        $video=$this->video;
        $idUser=$this->idUser;
        
        
       
        
        $sql="call spInsertEvent('$title','$day','$eventStart','$eventEnd','$city','$description','$bannername','$picname','$video',$idUser)";
        $result= $this->link->query($sql);
        
        return $this->link->affected_rows;
        
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
    function delete()
    {
        $this->OpenConnect();  // konexio zabaldu  - abrir conexión
        
        $id=$this->getId();
        
        $sql="CALL spDeleteEvent($id)";
        
        $numFilas=$this->link->query($sql);
        
        if ($numFilas>=1)
        {
            echo "borrado";
        } else {
            echo "Error al borrar";
        }
        $this->CloseConnect();
        
      
    
        }
}
