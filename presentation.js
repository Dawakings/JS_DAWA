/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getAllavaror(data) {

                //    alert(data[0].id);

                var ul = document.getElementById("lista");
                
                ul.innerHTML = "";
                
                for (temp in data) {
                    /*  alert(data[temp].id);
                     alert(data[temp].namn); */

                    var li = document.createElement("li")
                    
                    var img = document.createElement("img")
                    img.src = data[temp].bildurl;
        
                    li.innerHTML += data[temp].id + " ";
                    li.innerHTML += data[temp].namn + " ";
                    li.innerHTML += data[temp].kategori + " ";
                    li.appendChild(img);
                    li.innerHTML += data[temp].infoshort + " ";
                    li.innerHTML += data[temp].infolong + " ";

                    ul.appendChild(li);

                } 
                
                $("li").click(function() {
                    //alert($(this).text());
                   
                    $.getJSON("index2.php/getinfo/"+$(this).text(), getInfo);
                    
                     
                });
            }
            function getInfo(data) {

                //    alert(data[0].id);
                    
                var ul = document.getElementById("lista");
                
        ul.innerHTML = "";
                
                for (temp in data) {
                    /*  alert(data[temp].id);
                     alert(data[temp].namn); */

                    var li = document.createElement("li")
                    var img = document.createElement("img")
                    img.src = data[temp].bildurl;
                   
                    

                    li.innerHTML += data[temp].id + " ";
                    li.innerHTML += data[temp].namn + " ";
                    li.innerHTML += data[temp].kategori + " ";
                    li.appendChild(img);
                    li.innerHTML += data[temp].infoshort + " ";
                    li.innerHTML += data[temp].infolong + " ";

                    ul.appendChild(li);
                  

                }
                
            }

            function getKategories(data) {

                //    alert(data[0].id);

                var ul = document.getElementById("nav");
                for (temp in data) {




                    var li = document.createElement("li")   


                    li.innerHTML += data[temp].kategori + " ";


                    ul.appendChild(li);

                }
                $("li").click(function() {
                   // alert($(this).text());
                   
                    $.getJSON("index2.php/getinfoByKategori/"+$(this).text(), getAllavaror);
                    
                     
                });
            }
          

            /*$(document).ready(function () {

                $.getJSON("index2.php/getAllavaror", getAllavaror);

            });*/

            $(document).ready(function () {

                $.getJSON("index2.php/getKategories", getKategories);
                
               
                
                
    });

