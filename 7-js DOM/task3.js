let num1 = document.querySelector(".inp1");
let num2 = document.querySelector(".inp2");
let result = document.querySelector("p");
let add = document.querySelector(".add")
let min = document.querySelector(".min")
let mul = document.querySelector(".mul")
let division = document.querySelector(".division")
let reset = document.querySelector(".reset")


add.addEventListener("click" , function(){
    result.textContent = +num1.value + +num2.value
})
min.addEventListener("click" , function(){
    result.textContent = +num1.value - +num2.value
})
mul.addEventListener("click" , function(){
    result.textContent = +num1.value * +num2.value
})
division.addEventListener("click" , function(){
    result.textContent = +num1.value / +num2.value
})
reset.addEventListener("click" , function(){
    num1.value = 0 , num2.value = 0 , result.textContent = 0
})