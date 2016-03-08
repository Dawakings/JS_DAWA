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
                    
                    var img = document.createElement("img");
                    img.src = data[temp].bildurl;
                    
                   
        
                    li.innerHTML += data[temp].id + " ";
                    li.innerHTML += data[temp].namn + " ";
                    li.innerHTML += data[temp].kategori + " ";
                    li.innerHTML += data[temp].pris + " kr ";
                    //li.appendChild(img);
                    li.innerHTML += data[temp].infoshort + " ";
                    
                    

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

                    var li = document.createElement("li");
                    var img = document.createElement("img");
                    img.src = data[temp].bildurl;
                   
                   
                    var laggtillikundvagn = document.createElement("input");
                    laggtillikundvagn.type = "button";
                    laggtillikundvagn.value = "Köp!";
                    
                    
                   // laggtillikundvagn.onclick="shoppingvagn.addToCart(new Vara("+data[temp].id+","+data[temp].namn+","+data[temp].kategori+","+data[temp].pris+","+data[temp].bildurl+","+data[temp].infoshort+","+data[temp].infolong+"))";
                   
                    laggtillikundvagn.onclick=shoppingvagn.addToCart(new Vara(data[temp].id,data[temp].namn,data[temp].kategori,data[temp].pris,data[temp].bildurl,data[temp].infoshort,data[temp].infolong));
                            
                            
                    li.innerHTML += data[temp].id + " ";
                    li.innerHTML += data[temp].namn + " ";
                    li.innerHTML += data[temp].kategori + " ";
                    li.innerHTML += data[temp].pris + " kr ";
                   // li.appendChild(img);
                    li.innerHTML += data[temp].infoshort + " ";
                    li.innerHTML += data[temp].infolong + " ";
                    li.appendChild(laggtillikundvagn);

                    ul.appendChild(li);
                    
                /*    $("input").click(function() {
                   alert("testarKnapp");
                   
                    
                    
                     
                }); */
                  

                } //loop
                
                
                
                
            }

            function getKategories(data) {

                //    alert(data[0].id);

                var ul = document.getElementById("nav");
                for (temp in data) {




                    var li = document.createElement("li");   


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
                
                $("#testKnapp").click(visaInnehall);
                
               
                
                
    });

