/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getAllaVarorAdmin(data) {
    
    var visaAdmin = document.getElementById("visaAdmin");
    
    var ul = document.getElementById("lista");
                
                ul.innerHTML = "";
                
                for (temp in data) {
                    /*  alert(data[temp].id);
                     alert(data[temp].namn); */

                    var li = document.createElement("li");
                    
                   
                    
                    
                   
                    
                    
                   
        
                    li.innerHTML += data[temp].id + " ";
                    li.innerHTML += data[temp].namn + " ";
                    li.innerHTML += data[temp].kategori + " ";
                    li.innerHTML += data[temp].pris + " kr ";
                    li.innerHTML += data[temp].bildurl + " ";
                    li.innerHTML += data[temp].infoshort + " ";
                    
                    
                    

                    ul.appendChild(li);

                } //loop
                
             
                
                
               
                
                
                visaAdmin.appendChild(ul);
                
                
                var formAdd = document.createElement("form");
                var formUp = document.createElement("form");
                var formDel = document.createElement("form");
                
                
                var iid = document.createElement("input");
                iid.type = "text";
                iid.name = "id";
                
                var inamn = document.createElement("input");
                inamn.type = "text";
                inamn.name = "namn";
                
                var ikategori = document.createElement("input");
                ikategori.type = "text";
                ikategori.name = "kategori";
                
                var ipris = document.createElement("input");
                ipris.type = "text";
                ipris.name = "pris";
                
                var ibild = document.createElement("input");
                ibild.type = "text";
                ibild.name = "bildurl";
                
                var ishort = document.createElement("input");
                ishort.type = "text";
                ishort.name = "infoshort";
                
                var ilong = document.createElement("input");
                ilong.type = "text";
                ilong.name = "infolong";
                
                var button = document.createElement("input");
                button.type = "submit";
                
                var span = document.createElement("span");
                
                
                //Lägga till vara:
                formAdd.action = "index2.php?addVara";
                formAdd.method = "POST";
                span.innerHTML = "Lägg till vara. ID väljs i automatiskt.";
                formAdd.appendChild(inamn);
                formAdd.appendChild(ikategori);
                formAdd.appendChild(ipris);
                formAdd.appendChild(ibild);
                formAdd.appendChild(ishort);
                formAdd.appendChild(ilong);
                button.value = "Lägg till vara!";
                formAdd.appendChild(button);
                
                //Uppdatera
                formUp.action = "index2.php?updateVara";
                formUp.method = "POST";
                span.innerHTML = "Uppdatera på ID";
                formUp.appendChild(iid);
                formUp.appendChild(inamn);
                formUp.appendChild(ikategori);
                formUp.appendChild(ipris);
                formUp.appendChild(ibild);
                formUp.appendChild(ishort);
                formUp.appendChild(ilong);
                button.value = "Uppdatera vara!";
                formUp.appendChild(button);
                
                //radera
                formDel.action = "index2.php?deleteVara";
                formDel.method = "POST";
                span.innerHTML = "Radera på ID";
                formDel.appendChild(iid);
                formDel.appendChild(inamn);
                formDel.appendChild(ikategori);
                formDel.appendChild(ipris);
                formDel.appendChild(ibild);
                formDel.appendChild(ishort);
                formDel.appendChild(ilong);
                button.value = "Radera vara!";
                formDel.appendChild(button);
                
                visaAdmin.appendChild(formAdd);
                visaAdmin.appendChild(formUp);
                visaAdmin.appendChild(formDel);
                
                
                
                
                
                
            }
    








//visaAdd







                
 
          
                
    
                
                