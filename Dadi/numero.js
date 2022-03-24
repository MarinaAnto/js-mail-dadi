function NumeriCasuali() {
    let numero = Math.round(Math.random() * 6);
    alert(numero);
}


function risultato(){
let  Tu=document.getElementById('tu').value;
let Computer=document.getElementById('computer').value;
let ris;

if(Tu>Computer){
    ris="Hai vinto!";
}else if(Tu==Computer){
    ris="Pareggio!";
}else{
    ris="Hai perso!";
}
alert(ris);
}
