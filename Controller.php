<?php


require_once 'Model.php';
session_start();

class Controller {

    
    
    

    public function __construct() {
        $this->model = new Model();
        
    }

    public function getAllavaror() {


        $varorna = $this->model->getAllaVaror();
        // i vilken mapp finns templates:erna eg vyerna
        // laddar vyn som ska visa data om bilar
       
        //sätter data till variablen bilar som sedan är åtkomlig i vyn via
        //detta namn
        return $varorna;
    }

    public function getKategories() {
        $varorna = $this->model->getKategories();
        // i vilken mapp finns templates:erna eg vyerna
        // laddar vyn som ska visa data om bilar
     
        //sätter data till variablen bilar som sedan är åtkomlig i vyn via
        //detta namn
        return $varorna;
    }

    public function getinfoByKategori($kategori) {
        $varornaMain = $this->model->getinfoByKategori($kategori);
       

       



        return $varornaMain;
    }

    public function getinfo($id) {
        $varornaMain = $this->model->getInfo($id);
       

     



        return $varornaMain;
    }



    public function addVara() {

       
            $this->model->addVara();
            
        
    }

 
    public function deleteVara() {
        
    
            $this->model->deleteVara();
           
       
    }

    /*Om felmeddelande returneras så skrivs detta ut, om inget fel finns 
         * så utförs operationen.*/
    public function updateVara() {

      
            $this->model->updateVara();
           
     
    }

    


/*Funktion för att administratör ska kunna logga in. Felmeddelande visas i vyn
om man försöker logga in med felaktigt användarnamn/lösenord. Om rätt så visas admin-vyn. */
    public function login() {
        if (strip_tags($_POST['user']) == 'admin' && strip_tags($_POST['pwd']) == 'admin') {
            return true;
            
        } else {
           return false; 
        }
    }

}

//class


/*$obj= new Controller();

var_dump($obj->addtoCart(0)); */
