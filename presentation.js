/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 */

function getAllavaror(data) {

    //    alert(data[0].id);

    var ul = document.getElementById("lista"); //hämat Element by ID

    ul.innerHTML = ""; //tömmer mellan taggarna  i elememtet

    for (temp in data) {
        /*  alert(data[temp].id);
         alert(data[temp].namn); */

        var li = document.createElement("li");

        var img = document.createElement("img");
        img.src = data[temp].bildurl; //säter atributet src



        li.innerHTML += data[temp].id + " ";
        li.innerHTML += data[temp].namn + " ";
        li.innerHTML += data[temp].kategori + " ";
        li.innerHTML += data[temp].pris + " kr ";
        //li.appendChild(img);
        li.innerHTML += data[temp].infoshort + " ";



        ul.appendChild(li); //lägger till på slutet av elementet.

    }
/*Klickfunktion med jquery. När man klickar på en kategori så hämtas data
 * om den kategorin med JSON ifrån index2.php*/
    $("li").click(function () {
        //alert($(this).text());

        $.getJSON("index2.php/getinfo/" + $(this).text(), getInfo);


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


        //  laggtillikundvagn.onclick="shoppingvagn.addToCart(new Vara("+data[temp].id+","+data[temp].namn+","+data[temp].kategori+","+data[temp].pris+","+data[temp].bildurl+"))";

        // laggtillikundvagn.onclick=shoppingvagn.addToCart(new Vara(data[temp].id,data[temp].namn,data[temp].kategori,data[temp].pris,data[temp].bildurl));

        //  laggtillikundvagn.onclick="shoppingvagn.addToCart"(new Vara(data[temp].id,data[temp].namn,data[temp].kategori,data[temp].pris,data[temp].bildurl));

        /* laggtillikundvagn.onclick="shoppingvagn.addToCart(new Vara("
         data[temp].id + "\",\"" +
         data[temp].namn + "\",\"" +
         data[temp].kategori + "\",\"" +
         data[temp].pris + "\",\"" +
         data[temp].bildurl + "\",\"" + 
         "\"));"; */
        
        /*
         * $(laggtillikundvagn).click(function () {
            shoppingvagn.addToCart(new Vara(data[temp].id, data[temp].namn, data[temp].kategori, data[temp].pris, data[temp].bildurl));
        }); 
         */

        // Klicka för att lägga till i vara.
        $(laggtillikundvagn).click(function () {
            shoppingvagn.addToCart(new Vara(data[temp].id, data[temp].namn, data[temp].pris, data[temp].bildurl));
        });

        li.innerHTML += data[temp].id + " ";
        li.innerHTML += data[temp].namn + " ";
        li.innerHTML += data[temp].kategori + " ";
        li.innerHTML += data[temp].pris + " kr ";
        // li.appendChild(img);
        li.innerHTML += data[temp].infoshort + " ";
        li.innerHTML += data[temp].infolong + " ";
        li.appendChild(laggtillikundvagn);




        ul.appendChild(li);



    } //loop






}

function getKategories(data) {

    //    alert(data[0].id);

    var ul = document.getElementById("navUl");
    for (temp in data) {




        var li = document.createElement("li");


        li.innerHTML += data[temp].kategori + " ";


        ul.appendChild(li);

    }
    $("li").click(function () {
        // alert($(this).text());

        $.getJSON("index2.php/getinfoByKategori/" + $(this).text(), getAllavaror);


    });
}


/*$(document).ready(function () {
 
 $.getJSON("index2.php/getAllavaror", getAllavaror);
 
 });*/




function getAllavarorAdmin(data) {

    //    alert(data[0].id);

    var ulAdmin = document.getElementById("listaAdmin");




    ulAdmin.innerHTML = "";

    for (temp in data) {
        /*  alert(data[temp].id);
         alert(data[temp].namn); */

        var li2 = document.createElement("li");







        li2.innerHTML += data[temp].id + " ";
        li2.innerHTML += data[temp].namn + " ";
        li2.innerHTML += data[temp].kategori + " ";
        li2.innerHTML += data[temp].pris + " kr ";
        li2.innerHTML += data[temp].bildurl + " ";
        li2.innerHTML += data[temp].infoshort + " ";




        ulAdmin.appendChild(li2);

    }//loop



}

/*Funktoon för att skapa upp formulär för att logga in. */
function createLoginForm() {
    var divLoggain = document.getElementById("loggain");
    var loginForm = document.createElement("form");
    var username = document.createElement("input");
    var passw = document.createElement("input");

    var txtuser = document.createElement("span");
    var txtpassw = document.createElement("span");
    var p = document.createElement("p");
    var buttonLogIn = document.createElement("input");
    var buttonLogout = document.createElement("input");
    var logutForm = document.createElement("form");


    loginForm.method = "POST"; //data skickas med HTTP_POST
    p.innerHTML = "Logga in som administarör: ";
    username.type = "text";
    passw.type = "password"; //input syns som **** på skärmen.
    username.name = "user";
    passw.name = "pwd";
    txtuser.innerHTML = "Userid: ";
    txtpassw.innerHTML = " lösenord: ";
    buttonLogIn.type = "button";
    buttonLogIn.value = "Logga in!";
    buttonLogout.type = "button";
    buttonLogout.value = "Logga ut!";


    loginForm.appendChild(txtuser);
    loginForm.appendChild(username);
    loginForm.appendChild(txtpassw);
    loginForm.appendChild(passw);
    loginForm.appendChild(buttonLogIn);
    logutForm.appendChild(buttonLogout);

    $(buttonLogout).hide();



    $(buttonLogIn).click(function () {
/*Kollar om admin loggar in med korrekta uppgifter.*/

        if ($(username).val() === "admin" && $(passw).val() === "admin") {


            $(buttonLogout).show(); //visar logga ut knapp

            createForm(); //visar adminform

            $(loginForm).hide(); //döljer logga in formuläret.
            logutForm.appendChild(buttonLogout);

            $.getJSON("index2.php/getAllavaror", getAllavarorAdmin);
            
            


        } else {
            alert("Fel user/password"); //popup
        }

    });

    $(buttonLogout).click(function () {
        location.reload(); //loggar ut genom att refresha sidan.
    });

    divLoggain.appendChild(loginForm);
    divLoggain.appendChild(logutForm);


}





function createForm() {

    var divRadera = document.getElementById("radera");
    var divUppdatera = document.getElementById("uppdatera");
    var divAdd = document.getElementById("add");
    var formDelete = document.createElement("form");
    var formUpdate = document.createElement("form");
    var formAdd = document.createElement("form");



    // formDelete.action = "index2.php/deleteVara";
    // formDelete.method = "POST";



    // formUpdate.action = "index2.php/updateVara";
    // formUpdate.method = "POST";





    //  formAdd.action = "index2.php/addVara";
    // formAdd.method = "POST";



    var iidR = document.createElement("input");
    var skickaR = document.createElement("input");

    var iidU = document.createElement("input");
    var inamnU = document.createElement("input");
    var ikategoriU = document.createElement("input");
    var iprisU = document.createElement("input");
    var ibildurlU = document.createElement("input");
    var iinfoshortU = document.createElement("input");
    var iinfolongU = document.createElement("input");
    var skickaU = document.createElement("input");

    var iidA = document.createElement("input");

    var inamnA = document.createElement("input");
    var ikategoriA = document.createElement("input");
    var iprisA = document.createElement("input");
    var ibildurlA = document.createElement("input");
    var iinfoshortA = document.createElement("input");
    var iinfolongA = document.createElement("input");
    var skickaA = document.createElement("input");




    iidR.type = "text";
    skickaR.type = "submit";
    iidR.value = "ID";
    skickaR.value = "Radera på ID";



    iidU.type = "text";
    inamnU.type = "text";
    ikategoriU.type = "text";
    iprisU.type = "text";
    ibildurlU.type = "text";
    iinfoshortU.type = "text";
    iinfolongU.type = "text";
    skickaU.type = "submit";

    iidU.value = "ID";
    inamnU.value = "namn";
    ikategoriU.value = "kategori";
    iprisU.value = "pris";
    ibildurlU.value = "url till bild";
    iinfoshortU.value = "kort info";
    iinfolongU.value = "lång info";
    skickaU.value = "Uppdatera på ID";
    
   /* iidU.onclick="(this).value=''";
     inamnU.onclick="this.value=''";
     ikategoriU.onclick="this.value=''";
     iprisU.onclick="this.value=''";
     ibildurlU.onclick="this.value=''";
     iinfoshortU.onclick="this.value=''";
     iinfolongU.onclick="this.value=''"; */
     
     $(":text").click(function (){
         $(this).val().val("");
     });
     /*Har försökt att få inoutfältet tömt när användaren klickar i det, men har inte
      * fått funktionen att fungera som tänkt.*/






    inamnA.type = "text";
    ikategoriA.type = "text";
    iprisA.type = "text";
    ibildurlA.type = "text";
    iinfoshortA.type = "text";
    iinfolongA.type = "text";
    skickaA.type = "submit";

    inamnA.value = "namn";
    ikategoriA.value = "kategori";
    iprisA.value = "pris";
    ibildurlA.value = "url till bild";
    iinfoshortA.value = "kort info";
    iinfolongA.value = "lång info";
    skickaA.value = "Lägg till vara";
    
    inamnA.onClick="this.value=''";
     ikategoriA.onClick="this.value=''";
     iprisA.onClick="this.value=''";
     ibildurlA.onClick="this.value=''";
     iinfoshortA.onClick="this.value=''";
     iinfolongA.onClick="this.value=''"; 

    iidR.name = "id";

    iidU.name = "id";
    inamnU.name = "namn";
    ikategoriU.name = "kategori";
    iprisU.name = "pris";
    ibildurlU.name = "bildurl";
    iinfoshortU.name = "infoshort";
    iinfolongU.name = "infolong";


    inamnA.name = "namn";
    ikategoriA.name = "kategori";
    iprisA.name = "pris";
    ibildurlA.name = "bildurl";
    iinfoshortA.name = "infoshort";
    iinfolongA.name = "infolong";


    //delete
    formDelete.appendChild(iidR);
    formDelete.appendChild(skickaR);


    //update
    formUpdate.appendChild(iidU);
    formUpdate.appendChild(inamnU);
    formUpdate.appendChild(ikategoriU);
    formUpdate.appendChild(iprisU);
    formUpdate.appendChild(ibildurlU);
    formUpdate.appendChild(iinfoshortU);
    formUpdate.appendChild(iinfolongU);
    formUpdate.appendChild(skickaU);


    //add
    iidA.value = "ID skapas automatiskt";
    iidA.disabled = "disabled";
    formAdd.appendChild(iidA);
    formAdd.appendChild(inamnA);
    formAdd.appendChild(ikategoriA);
    formAdd.appendChild(iprisA);
    formAdd.appendChild(ibildurlA);
    formAdd.appendChild(iinfoshortA);
    formAdd.appendChild(iinfolongA);
    formAdd.appendChild(skickaA);






    //visa


    divRadera.appendChild(document.createElement("br"));
    divRadera.appendChild(formDelete);
    divRadera.appendChild(document.createElement("hr"));
    divUppdatera.appendChild(document.createElement("br"));
    divUppdatera.appendChild(formUpdate);
    divUppdatera.appendChild(document.createElement("hr"));
    divAdd.appendChild(document.createElement("br"));
    divAdd.appendChild(formAdd);
    
    divRadera.style.overflow = "scroll";
    divUppdatera.style.overflow = "scroll";
    divAdd.style.overflow = "scroll";

/* Läste på om POST med ajax.
 * https://scotch.io/tutorials/submitting-ajax-forms-with-jquery 
 * 
 * */

    //actionRadera

    $(formDelete).on('submit', function (event) {
        event.preventDefault(); //förhindrar refresh av sidan vid submit
        $.ajax({
            type: "POST", //method
            url: "index2.php/deleteVara", //action
            data: $(formDelete).serialize() //string av fältens name + värde.
            

        }).done(function () {
            alert("Varan " + $(iidR).val() + " är raderat ");
            // alert($(formDelete).serialize());



            $.getJSON("index2.php/getAllavaror", getAllavarorAdmin); //visar uppdaterad lista

        });

    });

//uppdatera

    $(formUpdate).on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "index2.php/updateVara",
            data: $(formUpdate).serialize()
        }).done(function () {
            alert("Varan " + $(iidU).val() + " är updaterad ");

            $.getJSON("index2.php/getAllavaror", getAllavarorAdmin);
        });
    });


//Lägga till
    $(formAdd).on('submit', function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "index2.php/addVara",
            data: $(formAdd).serialize()
        }).done(function () {
            alert("Varan " + $(inamnA).val() + " är tillagd ");

            $.getJSON("index2.php/getAllavaror", getAllavarorAdmin);
        });
    });



}




/*Körs när sidan har läst in, fungerar bra att lägga in funktioner som ska 
 * köras ifårn början.*/

$(document).ready(function () {

    $.getJSON("index2.php/getKategories", getKategories);



    createLoginForm();
    
    $("#linkKundvagn").click(function (event) {
        event.preventDefault();
        visaInnehall();
        event.preventDefault();
    });
    
    
    
    $("#linkLogg").click(function (event) {
        event.preventDefault();
        location.reload();
        
    });
    

  
    
    
    
    






});

