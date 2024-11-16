import { products } from "./data.js";
let add = document.querySelector(".add");
add.addEventListener("click" , function (event) {
    event.preventDefault();
    validateForm();
})


function validateForm() {
    const title = document.querySelector(".title").value.trim();
    const price = document.querySelector(".price").value.trim();
    const description = document.querySelector(".description").value.trim();
    const image = document.querySelector(".image").value.trim();
    
    add.addEventListener("click" , function () {
        if (title === "" || price === "" || description === "" || image === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        } else {
            
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
    })
}validateForm()


let productContainer = document.querySelector(".products-container");

function renderProducts(arr) {
    console.log("a");
    
    productContainer.innerHTML = "";
    arr.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-3 p-4";
        
        card.innerHTML = `
            <div class="card h-100 text-center">
                <img src="${product.image}" class="card-img-top" alt="${product.title} witdh="150px">
                <div class="card-body">
                    <h5 class="card-title">${product.title}...</h5>
                    <p class="card-text">${product.price}$</p>
                    <p class="card-text text-muted">${product.description}...</p>
                    <button class="btn btn-primary details-btn mt-2" ">Details</button>
                    <button class="btn btn-delete btn-danger mt-2"  data-id=${product.id}>Delete</button>
                </div>
            </div>
        `;
        
        productContainer.append(card);
    });
}

renderProducts(products)




const searchInput = document.querySelector(".form-control");
searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    console.log(filteredProducts);
    
    renderProducts(filteredProducts);
});
let ascBtn = document.querySelector(".btn-asc");
let descBtn = document.querySelector(".btn-desc");
let defaultBtn = document.querySelector(".btn-default");
ascBtn.addEventListener("click", function () {
    const sortedProducts = products.toSorted((a, b) => a.price - b.price);
    renderProducts(sortedProducts);
  });
  descBtn.addEventListener("click", function () {
    const sortedProducts = products.toSorted((a, b) => b.price - a.price);
    renderProducts(sortedProducts);
  });
  defaultBtn.addEventListener("click", function () {
    renderProducts(products);
  });




//   remove
let allDeleteBtns = document.querySelectorAll(".btn-delete")

allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      

      const productId = this.getAttribute("data-id");
      const idx = products.findIndex((item) => item.id == productId);

      Swal.fire({
        title: "Are you sure!?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(idx, this);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
  

renderProducts(products);


