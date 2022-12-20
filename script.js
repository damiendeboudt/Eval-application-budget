let buttonCalculate = document.getElementById("Button-result");

let inputDepense = document.getElementById("depense-fixe").getElementsByTagName("input");
let inputRecettes = document.getElementById("Recettes").getElementsByTagName("input");
let inputEpargne = document.getElementById("Epargne").getElementsByTagName("input");

let spanDepense = document.getElementById("depense");
let spanRecette = document.getElementById("Recette");

buttonCalculate.addEventListener("click", ()=>{
    //calcul des Depenses en incrementant les values des inputs Depenses
    let depense = 0
    for(let i =0; i<inputDepense.length; i ++) {
        console.log(inputDepense[i].value)
        depense += parseFloat(inputDepense[i].value)
    }
    spanDepense.innerText += depense

    //calcul des Recettes en incrementant les values des inputs Recettes
    let recette = 0
    for(let i =0; i<inputRecettes.length; i ++) {
        console.log(inputRecettes[i].value)
        depense += parseFloat(inputRecettes[i].value)
    }
    spanRecette.innerText += recette
})





/*

buttonSubmit.addEventListener("click", ()=>{
    let depense = 0
    for(let i =0; i<input.length; i ++) {
        console.log(input[i].value)
        //input[1].value = (input[1].value * 2)
        depense += parseFloat(input[i].value)
    }

    console.log(depense)
    divresult.innerText += depense
})*/