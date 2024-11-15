let add = document.querySelector(".add");
add.addEventListener("click" , function () {
    validateForm();
})


function validateForm() {
    const title = document.querySelector(".title").value.trim();
    const price = document.querySelector(".price").value.trim();
    const description = document.querySelector(".description").value.trim();
    const image = document.querySelector(".image").value.trim();
    
    if (title === "" || price === "" || description === "" || image === "") {
        windows.alert("Please fill in all fields.");
    } else {
        
        windows.alert("Form submitted successfully!");
    }
}