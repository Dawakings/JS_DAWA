var Vara = function(id,namn,kategori,pris,bildurl){
	this.id = id;
	this.namn = namn;
	this.kategori = kategori;
	this.pris = pris;
	this.bildurl = bildurl;
	this.antal=1;		
};

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
			if(korg[i].antal > 1 && korg[i].namn === vara.namn){
				korg[i].antal--;
				found=true;
				break;
			}// Slut på if
		}// Slut på for loopen
		
                var result = 0;
                for( var i = 0, len = korg.length; i < len; i++ ) {
                    if( korg[i].namn === vara.namn) {
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
                   
                    var cart = shoppingvagn.getCart();
	var mydiv = document.getElementById("kundvagn");
	
	var data = '';
	
	// Bygger upp en tabell med innehållet
	data = '<h3>Kundvagn:</h3><table border="1">';
	
	for( var i = 0; i < cart.length; i++ ){
		
		data += '<tr>';				 
		data += '<td><img src="'+cart[i].bildurl+'" width="32" height="32"></td>' +
                '<td>' + cart[i].id  + '</td>' + 
		'<td>' + cart[i].namn  + '</td>' + 
		'<td>' + cart[i].antal + '</td>' + 
		'<td>' + cart[i].pris  + '</td>' + 
		'<td>' + cart[i].antal * cart[i].pris + 'kr</td>' + 
		'</tr>';
	 
	}//end for
	data += '<tr><td colspan="5" align="right">Att Betala ' + shoppingvagn.getAmount() + 'kr</td></tr>';
	data += '<tr><td colspan="5" align="right"><button onclick="shoppingvagn.emptyCart(), visaInnehall()">Töm kundvagnen</button></td></tr>';
	data += '</table>';

	mydiv.innerHTML=data;
                }