
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
//inkluderar
include_once 'Controller.php';
//surfar till denna sida med länken index2.php?getAllCars
//delar upp querystringen till en array med /som avskiljare
//arrayens innehåll:
//$queryArray[0]=getAllCars
$queryArray = explode('/', $_SERVER['PATH_INFO']);

//instansierar ett nytt controller objekt
$cont = new Controller();
//anropar metod på controllerobjekt
//blir tex $cont->getAllCars();



if (method_exists($cont, $queryArray[1])) {
    
    switch ($queryArray[1]) {
        case 'getAllavaror':
            echo json_encode($cont->$queryArray[1]());
            break;
        case 'getKategories':
            echo json_encode($cont->$queryArray[1]());
            break;
        case 'getinfoByKategori':
            echo json_encode($cont->$queryArray[1]($queryArray[2]));
            break;
        case 'getinfo':
            echo json_encode($cont->$queryArray[1]($queryArray[2]));
            break;
        case 'addVara':
            echo json_encode($cont->$queryArray[1]());
            break;
        case 'deleteVara':
            echo json_encode($cont->$queryArray[1]());
            break;
        case 'updateVara':
            echo json_encode($cont->$queryArray[1]());
            break;
        
    }
}




?>

