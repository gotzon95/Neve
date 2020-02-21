<?php
class eventClass {
    protected $id;
    protected $title;
    protected $eventDay;
    protected $eventStart;
    protected $eventEnd;
    protected $city;
    protected $description;
    protected $pic;
    protected $banner;
    protected $video;
    protected $idUser;
    /**
     * @return mixed
     */
    
    
    public function getBanner()
    {
        return $this->banner;
    }

    /**
     * @param mixed $banner
     */
    public function setBanner($banner)
    {
        $this->banner = $banner;
    }

    public function getVideo()
    {
        return $this->video;
    }

    /**
     * @param mixed $video
     */
    public function setVideo($video)
    {
        $this->video = $video;
    }

    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return mixed
     */
    public function getEventDay()
    {
        return $this->eventDay;
    }

    /**
     * @return mixed
     */
    public function getEventStart()
    {
        return $this->eventStart;
    }

    /**
     * @return mixed
     */
    public function getEventEnd()
    {
        return $this->eventEnd;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getPic()
    {
        return $this->pic;
    }

    /**
     * @return mixed
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @param mixed $eventDay
     */
    public function setEventDay($eventDay)
    {
        $this->eventDay = $eventDay;
    }

    /**
     * @param mixed $eventStart
     */
    public function setEventStart($eventStart)
    {
        $this->eventStart = $eventStart;
    }

    /**
     * @param mixed $eventEnd
     */
    public function setEventEnd($eventEnd)
    {
        $this->eventEnd = $eventEnd;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @param mixed $pic
     */
    public function setPic($pic)
    {
        $this->pic = $pic;
    }

    /**
     * @param mixed $idUser
     */
    public function setIdUser($idUser)
    {
        $this->idUser = $idUser;
    }
    function getObjectVars() {
        $vars = get_object_vars($this);
        return $vars;
    }
    
    
    
    
    
}