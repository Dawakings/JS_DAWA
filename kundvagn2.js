var Vara = function(id,namn,kategori,pris,bildurl,infoshort,infolong){
	this.id = id;
	this.namn = namn;
	this.kategori = kategori;
	this.pris = pris;
	this.bildurl = bildurl;
        this.infoshort = infoshort;
        this.infolong = infolong;
	this.antal=1;		
}

var ShoppingVagn = function(){
	// Array som ska hålla alla varor i korgen
	var korg = new Array();
	
	// ********************************************************************************************
	
	// Metoden addToCart(vara)
	// Räknar upp antal för varan om den finns i arrayen
	// - Om den inte! finns så läggs varan till i arrayen.
	this.addToCart = function(vara){
		
		var found = false;
		
		var k = 0;
		var idExist = false;
		
		while(k < korg.length){
			
			if( korg[k].id === vara.id ){
				idExist = true;
				break;
			}			
			k++;			
		}
		
		// Loopar igenom för att se om varan finns i korgarrayen, då ökar vi dess antal med 1
		// Vidare sätts variabeln "found" till true om varan hittats
		for( var i = 0; i < korg.length; i++ ){			
			if(korg[i].namn === vara.namn){
				korg[i].antal++;
				found=true;
				break;
			}// Slut på if
		}// Slut på for loopen
		
		// Om varan inte finns i korgarrayen så lägg till den
		if( found === false ){			
			//push metoden lägger vara till slutet av arrayen
			korg.push(vara);			
		}// end if
		visaInnehall();
	}// Slut på metoden addToCart
	
	// ********************************************************************************************
	
	// Metoden getAmount
	// Returnerar beloppet att betala för alla varor
	this.getAmount=function(){
		var belopp=0;
		for( var i = 0; i < korg.length; i++ ){
			// beräkning		
			belopp += korg[i].pris * korg[i].antal;
		}// end for	
		
		return belopp;
		
	}// end function
	
	// ********************************************************************************************
	
	// Metoden getCart
	// Returnerar varukorgen som array
	this.getCart=function(){
		return korg;
	}
	
	// ********************************************************************************************
	
	// Metoden emptyCart
	// Tömmer hela varukorgen mha metoden splice() för arrayer i js
	this.emptyCart=function(){
		korg.splice(0);
	}
	
	// ********************************************************************************************
	
	// Metoden deleteFromCart(vara)
	// Tar bort en specifik vara baserat p´å id, om den finns i arrayen.
	this.deleteFromCart = function(vara){
            var found = false;
		// Loopar igenom för att se om varan finns i korgarrayen, då ökar vi dess antal med 1
		// Vidare sätts variabeln "found" till true om varan hittats
		for( var i = 0; i < korg.length; i++ ){			
			if(korg[i].antal > 1 && korg[i].produktnamn === vara.produktnamn){
				korg[i].antal--;
				found=true;
				break;
			}// Slut på if
		}// Slut på for loopen
		
                var result = 0;
                for( var i = 0, len = korg.length; i < len; i++ ) {
                    if( korg[i].produktnamn === vara.produktnamn) {
                    result = i;
                    break;
                    }
                }
                
		if( found === false ){
                        korg.splice(result,1);
		}// end if
                
		visaInnehall();
	}// Kod för att ta bort en specifik vara
				
	// Slut pp metoden deleteFromCart
	
        this.deleteAllFromCart = function(vara){
            var found = false;
		// Loopar igenom fÃ¶r att se om varan finns i korgarrayen, dÃ¥ Ã¶kar vi dess antal med 1
		// Vidare sÃƒÂ¤tts variabeln "found" till true om varan hittats
		for( var i = 0; i < korg.length; i++ ){			
			if(korg[i].antal > 1 && korg[i].produktnamn === vara.produktnamn){
				korg[i].antal = 0;
				
				break;
			}// Slut pÃƒÂ¥ if
		}// Slut pÃƒÂ¥ for loopen
		
                var result = 0;
                for( var i = 0, len = korg.length; i < len; i++ ) {
                    if( korg[i].produktnamn === vara.produktnamn) {
                    result = i;
                    break;
                    }
                }
                
		if( found === false ){
                        korg.splice(result,1);
		}// end if
                
		visaInnehall();
	}// Kod fÃƒÂ¶r att ta bort en specifik vara
	// ********************************************************************************************
	
} // Slut pÃƒÂ¥ klassen "ShoppingVagn"


// Skapar upp min kundvagn (ett objekt av klassen ShoppingVagn)
var shoppingvagn = new ShoppingVagn();


function visaInnehall(){
                   
                    var mainKundvagn = document.createElement('div');
                    mainKundvagn.setAttribute('id', 'mainKundvagn');
                    var tbl = document.createElement('table');
                    tbl.setAttribute('border', '1');
                    var tr = document.createElement('tr');
                    var tr1 = document.createElement('tr');

                    var th2 = document.createElement('th');
                    var txt2 = document.createTextNode('Produktid | ');

                    var th3 = document.createElement('th');
                    var txt3 = document.createTextNode(' Produktnamn | ');

                    var th4 = document.createElement('th');
                    var txt4 = document.createTextNode('Kategori | ');

                    var th5 = document.createElement('th');
                    var txt5 = document.createTextNode(' Pris | ');
                    
                    var th6 = document.createElement('th');
                    var txt6 = document.createTextNode(' Img | ');

                    var th7 = document.createElement('th');
                    var txt7 = document.createTextNode(' Antal |');

                    var th8 = document.createElement('th');
                    var txt8 = document.createTextNode(' Delete |');
                    
                    var td = document.createElement('td');
                    td.colSpan="8";
                    td.style.textAlign="right";


                    /*th1.appendChild(txt1);
                    tr.appendChild(th1);*/

                    th2.appendChild(txt2);
                    tr.appendChild(th2);

                    th3.appendChild(txt3);
                    tr.appendChild(th3);

                    th4.appendChild(txt4);
                    tr.appendChild(th4);

                    th5.appendChild(txt5);
                    tr.appendChild(th5);

                    th6.appendChild(txt6);
                    tr.appendChild(th6);
                    
                    th7.appendChild(txt7);
                    tr.appendChild(th7);

                    th8.appendChild(txt8);
                    tr.appendChild(th8);

                    tbl.appendChild(tr);
                   
                    var cart = shoppingvagn.getCart();
                
                for( var i = 0; i < cart.length; i++ ){
                    var row = tbl.insertRow(-1);
                    row.innerHTML = cart[i].produktid;
                    var cell2 = row.insertCell(-1);
                    cell2.innerHTML = cart[i].produktnamn;
                    var cell3 = row.insertCell(-1);
                    cell3.innerHTML = cart[i].kategori;
                    var cell5 = row.insertCell(-1);
                    cell5.innerHTML = cart[i].pris;
                    var cell6 = row.insertCell(-1);
                    cell6.innerHTML = '<img src="' + cart[i].img + '" height="70" width="70"/>';
                    var cell7 = row.insertCell(-1);
                    cell7.innerHTML = "<button onclick='shoppingvagn.deleteFromCart(new Vara(\"" + 
                            cart[i].kategori + "\",\"" + 
                            cart[i].namn + "\",\"" + 
                            cart[i].pris +  "\",\"" +
                            cart[i].bildurl + "\",\"" +
                            cart[i].antal +  "\",\""+ "\"));'>▼</button>" + "  " +
                            "<button onclick='shoppingvagn.addToCart(new Vara(\"" + 
                            cart[i].kategori + "\",\"" + 
                            cart[i].namn + "\",\"" + 
                            cart[i].pris +  "\",\"" + 
                            cart[i].bildurl + "\",\"" +
                            cart[i].antal +  "\",\""+ "\"));'>▲</button>" + "  " +
                            cart[i].antal;
                    var cell8 = row.insertCell(-1);
                    cell8.innerHTML = "<button onclick='shoppingvagn.deleteAllFromCart(new Vara(\"" + 
                            cart[i].kategori + "\",\"" + 
                            cart[i].namn + "\",\"" + 
                            cart[i].pris +  "\",\"" +
                            cart[i].bildurl + "\",\"" +
                            cart[i].antal +  "\",\""+ "\"));'>Remove</button>";
                    tbl.appendChild(row);
                }
                    var txt9 = document.createTextNode('To pay: '+shoppingvagn.getAmount()+" kr");
                    td.appendChild(txt9);
                    tr1.appendChild(td);
                    tbl.appendChild(tr1);
                    mainKundvagn.appendChild(tbl);
                    $('#kundvagn').html(mainKundvagn);
                }