let buttonCalculate = document.getElementById("Button-result")

let loyer = document.getElementById("loyer");
let charge = document.getElementById("charge")
let gaz = document.getElementById("gaz")
let eau = document.getElementById("water")
let tel = document.getElementById("tel")
let elec = document.getElementById("elec")
let internet = document.getElementById("internet")
let credit = document.getElementById("credits")
let voiture = document.getElementById("voiture")
let maison = document.getElementById("maison")
let mutuelle = document.getElementById("mutuelle")
let garde = document.getElementById("garde")
let impot = document.getElementById("impot")
let locaux = document.getElementById("locaux")
let course = document.getElementById("course")
let carburant = document.getElementById("carburant")
let sport = document.getElementById("sport")
let sorties = document.getElementById("sortie")
let autres = document.getElementById("autres")

let salaire = document.getElementById("salaire")
let aides = document.getElementById("Aides")
let rentes = document.getElementById("Rentes")
let others = document.getElementById("Autre")

let epargne = document.getElementById("epargne")

buttonCalculate.addEventListener("click", ()=> {
    //condition si value depenses = NaN
    if(isNaN(parseFloat(charge.value))){
        charge.value= 0
    } if(isNaN(parseFloat(loyer.value))){
        loyer.value = 0
    } if(isNaN(parseFloat(gaz.value))) {
        gaz.value = 0
    } if(isNaN(parseFloat(eau.value))) {
        eau.value = 0
    } if(isNaN(parseFloat(elec.value))) {
        elec.value = 0
    } if(isNaN(parseFloat(tel.value))) {
        tel.value = 0
    } if(isNaN(parseFloat(internet.value))) {
       internet.value = 0
    } if(isNaN(parseFloat(credit.value))) {
        credit.value = 0
    } if(isNaN(parseFloat(mutuelle.value))) {
        mutuelle.value = 0
    } if(isNaN(parseFloat(garde.value))) {
        garde.value = 0
    } if(isNaN(parseFloat(impot.value))) {
        impot.value = 0
    } if(isNaN(parseFloat(locaux.value))) {
        locaux.value = 0
    } if(isNaN(parseFloat(course.value))) {
        course.value = 0
    } if(isNaN(parseFloat(carburant.value))) {
        carburant.value = 0
    } if(isNaN(parseFloat(sport.value))) {
        sport.value = 0
    } if(isNaN(parseFloat(sorties.value))) {
        sorties.value = 0
    } if(isNaN(parseFloat(autres.value))) {
        autres.value = 0
    } if(isNaN(parseFloat(voiture.value))) {
        voiture.value = 0
    } if(isNaN(parseFloat(maison.value))) {
        maison.value = 0
    }
// addition des Depenses
    let addition = parseFloat(loyer.value) + parseFloat(charge.value) + parseFloat(gaz.value) + parseFloat(elec.value)
    + parseFloat(tel.value) + parseFloat(internet.value) + parseFloat(credit.value) + parseFloat(voiture.value) +
        parseFloat(maison.value) + parseFloat(mutuelle.value) + parseFloat(garde.value) + parseFloat(impot.value) +
        parseFloat(locaux.value) + parseFloat(course.value)+ parseFloat(carburant.value)+
        parseFloat(sport.value) + parseFloat(sorties.value) + parseFloat(autres.value)

    //condition si value Recettes = NaN
    if(isNaN(parseFloat(salaire.value))){
        salaire.value= 0
    } if(isNaN(parseFloat(aides.value))){
        aides.value = 0
    } if(isNaN(parseFloat(rentes.value))) {
        rentes.value = 0
    } if(isNaN(parseFloat(others.value))) {
        others.value = 0
    }
    //condition si value Epargne = NaN
    if(isNaN(parseFloat(epargne.value))) {
        epargne.value = 0
    }
    let banque = parseFloat(epargne.value)

    //addition des (recettes + Epargne) - les depenses
    let soustraction = parseFloat(others.value) + parseFloat(rentes.value) + parseFloat(aides.value) +
        parseFloat(salaire.value)
    document.getElementById("Budget").innerHTML = "Depense: " + addition.toString() + "$"
    document.getElementById("Recette").innerHTML = "Recettes: " + soustraction.toString() + "$"
    let monnaie = (soustraction + banque) - addition
    document.getElementById("restant").innerHTML = "Budget restant: " + monnaie + "$"

    if(monnaie < 0) {
        alert("Attention, la fin du mois va être rude")
    }
    else {
        alert("On est bien, il te restes," + monnaie + "$ ce mois ci")
    }
})


