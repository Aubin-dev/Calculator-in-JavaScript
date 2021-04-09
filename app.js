/* Recupérer et afficher tous les bouttons */

const input = document.querySelector('input')
let keycode = document.querySelectorAll('button').forEach(el=>{
    el.onclick = () =>(input.value =input.value !== "0"  ? input.value + el.innerText : el.innerText)
});

// ==== Selectionner tous les élements du document html ==========


let effacer = document.getElementById('effacer');
let result = document.getElementById('egal');
let exponentielle = document.getElementById("exponentielle");
let logarithme = document.getElementById("logarithme");
let py1 = document.getElementById("py");
let addition = document.getElementById("addition");
let soustraction = document.getElementById("soustraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let racine = document.getElementById("racine");
let pourcentage = document.getElementById("pourcentage");

let calc=[];


// ======= L'évènement sur tous les   boutons===============

effacer.addEventListener("click",effacerUnParUn);
result.addEventListener("click",resultat);
exponentielle.addEventListener("click",expo);
logarithme.addEventListener("click",log);
py1.addEventListener("click",py);
addition.addEventListener("click",add);
soustraction.addEventListener("click",soustr);
multiplication.addEventListener("click",multi);
division.addEventListener("click",divi);
racine.addEventListener("click",rac);
pourcentage.addEventListener("click",pourcent);



function effacerUnParUn(){
    input.value="0";
}

function resultat() {
    input.value=eval(input.value);
}

function py() {
    let resultat = Math.PI += " ";
    input.value = resultat;
}

function pourcent(){
    let resultat = input.value * 0.01;
    input.value=resultat;
}

//========= Les opérateurs ===============


function add(){
    
};

function soustr(){

};

function multi(){
    
};

function divi(){
    
};



//========= Les fonctions scientifiques ===========

function log() {
    let nombre=parseFloat(input.value);
    let resultat = Math.log(nombre);
    if(input.value<0 && input.value === 0){
        input.value = "erreur";
    }
    else{
        input.value = resultat;
    }
    
}

function expo() {
    let resultat = Math.exp(input.value);
    input.value = resultat;
}

function rac() {
    if(input.value<0){
        input.value = 'erreur';
    }
    else{
        let resultat = Math.sqrt(input.value);
        input.value = resultat;
    }
}