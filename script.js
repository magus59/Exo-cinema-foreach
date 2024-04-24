var x = document.getElementById("x");
var abonnezVous = document.getElementById("abonnez-vous");

x.addEventListener("click", function() {
    abonnezVous.style.display = "none";
});


var coeurVide = document.getElementById("coeur-vide");
var coeurRouge = document.getElementById("coeur-rouge");

var vide1 = "";

coeurVide.addEventListener("click", function() {
    vide1 = "rouge";
    coeurVide.style.display = "none";
    coeurRouge.style.display = "block";
    localStorage.setItem("etat", vide1);
    console.log(vide1)
});

coeurRouge.addEventListener("click", function() {
    vide1 = "vide";
    coeurVide.style.display = "block";
    coeurRouge.style.display = "none";
    localStorage.setItem("etat", vide1);
    console.log(vide1)
});

var coeurVide2new = document.getElementById("coeur-vide2");
var coeurRouge2new = document.getElementById("coeur-rouge2");

var vide = "";

coeurVide2new.addEventListener("click", function() {
    vide = "rouge";
    coeurVide2new.style.display = "none";
    coeurRouge2new.style.display = "block";
    localStorage.setItem("etat2", vide);
    console.log(vide)
});

coeurRouge2new.addEventListener("click", function() {
    vide = "vide";
    coeurVide2new.style.display = "block";
    coeurRouge2new.style.display = "none";
    localStorage.setItem("etat2", vide);
    console.log(vide)
});

var vide = localStorage.getItem("etat2");
var vide1 = localStorage.getItem("etat");

if(vide === "rouge") {
    coeurVide2new.style.display = "none";
    coeurRouge2new.style.display = "block";
} else {
    coeurVide2new.style.display = "block";
    coeurRouge2new.style.display = "none";
}

if(vide1 === "rouge") {
    coeurVide.style.display = "none";
    coeurRouge.style.display = "block";
} else {
    coeurVide.style.display = "block";
    coeurRouge.style.display = "none";
}
