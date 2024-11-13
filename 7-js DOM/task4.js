let sidebar = document.querySelector("header")

function closeSidebar() {
    sidebar.style.width = "0"; 
    sidebar.style.padding = "0"; 
}

let closeBtn = document.querySelector(".close");
closeBtn.onclick = closeSidebar;

let open = document.querySelector(".open")
function openSidebar() {
    sidebar.style.width = "250px"; 
    sidebar.style.padding = "10px"; 
}
open.onclick = openSidebar


