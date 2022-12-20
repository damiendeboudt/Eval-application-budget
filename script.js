let buttonCalculate = document.getElementById("Button-result");
let buttonAddRecette = document.getElementById("ajouter-recette");
let buttonAddDepenses  = document.getElementById('ajouter-depense');


let depenses = document.getElementById("depense-fixe")
let recette = document.getElementById("Recettes")

let inputDepense = document.getElementById("depense-fixe").getElementsByTagName("input");
let inputRecettes = document.getElementById("Recettes").getElementsByTagName("input");
let inputEpargne = document.getElementById("Epargne").getElementsByTagName("input");

let spanDepense = document.getElementById("depense");
let spanRecette = document.getElementById("Recette");
let spanBudget = document.getElementById("restant");

//Ajout d'un input depense
buttonAddDepenses.addEventListener("click", ()=>{
    let AddInput = document.createElement("input")
    AddInput.value = 0
    depenses.appendChild(AddInput)
})

//Ajout d'un input Recettes
buttonAddRecette.addEventListener("click", ()=>{
    let AddInput = document.createElement("input")
    AddInput.value = 0
    recette.appendChild(AddInput)
})




buttonCalculate.addEventListener("click", ()=>{
    //calcul des Depenses en incrementant les values des inputs Depenses
    let depense = 0
    for(let i =0; i<inputDepense.length; i ++) {
        depense += parseFloat(inputDepense[i].value)
    }
    spanDepense.innerText = "Depense: " + depense

    //calcul des Recettes en incrementant les values des inputs Recettes
    let recette = 0
    for(let i =0; i<inputRecettes.length; i ++) {
        recette += parseFloat(inputRecettes[i].value)
    }
    //calcul epargne en incrementant value epargne
    let epargne = 0
    for(let i =0; i<inputEpargne.length; i ++) {
        epargne += parseFloat(inputEpargne[i].value)
    }
    spanRecette.innerText = "Recettes: " + recette
    spanBudget.innerText = "Budget restant: " + ((recette + epargne) - depense)
})
