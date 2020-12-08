$(document).ready(function () {

    const footer = document.getElementById('footer');

    function setNewDateInFooter () {

        const currentDate = new Date();

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        const prettyDate = `Datum: ${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;

        footer.innerHTML = prettyDate;
    }
   
    setNewDateInFooter();

    setInterval(setNewDateInFooter, 1000);

    proveriDaLiJeKnjigaNarucena();
});

function dodajUkorpu(dugme, knjiga) {
    korpa = localStorage.getItem('korpaKljuc'); 
    if(!korpa) {    
        korpa = knjiga;
    } else {
        korpa += "*" + knjiga; 
    }                          

    localStorage.setItem('korpaKljuc', korpa); 
    dugme.disabled = true;  
}

function proveriDaLiJeKnjigaNarucena() {
    sveKnjige = $('.knjiga'); 

    korpa = localStorage.getItem('korpaKljuc'); 
    if(korpa) {
        knjigeIzKorpe = korpa.split('*'); 

        sveKnjige.each( function(indeks, knjiga){ 

            nazivKnjigeParagraf = $(knjiga).find("[name=nazivKnjige]"); 
            nazivKnijge = $(nazivKnjigeParagraf).html(); 
            if(knjigeIzKorpe.includes(nazivKnijge)) {
               
                dodajUkorpuDugme = $(knjiga).find('[name=dodajUkorpuDugme]');
                $(dodajUkorpuDugme).attr('disabled',true);
            }
        });
    }
}

 
