let num1 = 10
let num2 = 25
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")

function add(){
    sum.textContent = num1 + num2
}

function subtract(){
    sum.textContent = num1 - num2
}

function divide(){
   sum.textContent = num1 / num2
}

function multiply(){
    sum.textContent = num1 * num2
}




