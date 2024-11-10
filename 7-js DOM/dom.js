let anaDiv = document.createElement("div");
anaDiv.setAttribute("class" , "ana-div")



let plusButton = document.createElement("button");
plusButton.textContent = "+";


let minusButton = document.createElement("button");
minusButton.textContent = "-";


let colorInput = document.createElement("input");
colorInput.type = "text";
colorInput.placeholder = "Enter color";


let applayButton = document.createElement("button");
applayButton.textContent = "Applay";





let text = document.createElement("p");
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officia recusandae neque iste, voluptates distinctio corporis consequuntur sunt commodi placeat sapiente quod quaerat doloremque excepturi molestiae temporibus esse, alias tempora?"
text.style.color = 'black';
text.style.fontSize = '16px';



anaDiv.append(plusButton , minusButton , colorInput, applayButton , text )
document.body.append(anaDiv);
let size = 16;
plusButton.addEventListener("click" , function () {
    size += 2;
    text.style.fontSize = size+"px"
});
 minusButton.addEventListener("click" , function () {
    if (size>2) {
        size -= 2;
        text.style.fontSize = size+"px"
    }
    else{
        alert("kifayetdir")
    }
 })
 applayButton.addEventListener("click" , function () {
    let reng = colorInput.value;
    text.style.color = reng;
 })

