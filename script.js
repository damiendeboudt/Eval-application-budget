let depense = document.getElementById("depense-fixe").getElementsByTagName("input");
let buttonCalculate = document.getElementById("Button-result")
console.log(depense)

let test = document.getElementById("test")

buttonCalculate.addEventListener("click", ()=>{
    for(let i = 0; i <depense.length; i++) {
        let result = (depense[i].value - depense[i].value)
        document.getElementById("Budget").innerHTML = result.value
    }
})

test.addEventListener("click", () => {

})