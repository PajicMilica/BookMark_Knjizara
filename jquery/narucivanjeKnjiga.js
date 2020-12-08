$(document).ready(function (){

    kartica = $('[name=brojKartice]'); 
    nacinPlacanja = 'gotovina';   
    $('#divPorucivanje').hide(); 
    
    kartica.each(function(index,element){
        $(element).hide();                     
    })

    ispisiNaruceneKnjige(); 

    $('#formaPorucivanja').on('submit', function(e) { 
        if(validacijaForme()) {
            alert("Uspešno ste naručili knjige!");
           
            localStorage.removeItem('korpaKljuc');
        } else {
           
            e.preventDefault();
        }
    })

    function validacijaForme() {
        ime = $('#firstName').val(); 
        prezime = $('#lastName').val();
            
        if(!ime || !prezime) { 
            jeValidnaForma = false;
            alert("Niste uneli ime ili prezime!");
            return false;
        }

        if(nacinPlacanja === 'kartica') {   
            brojKartice = $('#brojKariceInput').val();
            if(!brojKartice || isNaN(brojKartice)) {
                alert("Broj kartice ne sme sadrzati druge karaktere osim cifara!");
                return false;
            }
        }

        return true; 
    }
})

function sakrijGotovina(){ 
    nacinPlacanja = 'gotovina';
    kartica.each(function(index,element){
        $(element).hide();
    });
}
function prikaziKartica(){ 
    nacinPlacanja = 'kartica';
    kartica.each(function(index,element){
        $(element).show();
    })
}

function ispisiNaruceneKnjige() {
    korpa = localStorage.getItem("korpaKljuc");   
    if(korpa) {
        naruceneKnjge = korpa.split('*');  

        listaKnjigaUl = document.getElementById('listaKnjiga'); 
        
        for(let knjiga of naruceneKnjge) { 
            let noviDiv = document.createElement('li'); 
            noviDiv.innerHTML = knjiga;  
            listaKnjigaUl.appendChild(noviDiv); 
        }
        $('#divPorucivanje').show(); 
    } else {
        let praznaKorpaParagraf = document.createElement('p'); 
        praznaKorpaParagraf.innerHTML = "Vaša korpa je prazna.";  
        document.getElementsByTagName('body')[0].appendChild(praznaKorpaParagraf);

    }
}



