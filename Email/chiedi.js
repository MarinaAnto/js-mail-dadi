let Utente = document.getElementById("e-mail");
let Email=['matteo@gmail.com',
    'fabio@gmail.com',
    'pietro@gmail.com',
    'anna@gmail.com'
    ];
document.getElementById("btn-alert").addEventListener("click", function(){
    let valore=Utente.value.trim();
    if(!valore){
        alert("E-mail non può esserre vuota!");
    }else if(Email.includes(Utente)){
        alert("Ciao, " + valore + "Puoi accedere!"); 
    }else{
        alert("E-mail non presente!");
        let risposta=prompt("Vuoi aggiungere questa nuova e-mail? Si/No");
        if (risposta=='Si'){
            Email.push(Utente);
            alert("E-mail aggiunta !");
        }else{
            alert("Ci vediamo !")
        }
    }
});


    
    
		