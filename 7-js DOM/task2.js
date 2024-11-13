let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
document.head.appendChild(link);




let container = document.createElement("div");
container.className = "container text-center";

let mainImage = document.createElement("div");
mainImage.className = "main-image";
mainImage.textContent = "960 x 360px";
container.appendChild(mainImage);

let row = document.createElement("div");
row.className = "row justify-content-center mt-4";

let col1 = document.createElement("div");
col1.className = "col-md-4";

let thumbnail1 = document.createElement("div");
thumbnail1.className = "thumbnail";
thumbnail1.textContent = "290 x 180px";

let description1 = document.createElement("div");
description1.className = "thumbnail-description mt-2";
description1.textContent = "Indonectetus facilis";

let paragraph1 = document.createElement("p");
paragraph1.textContent = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";


let readMore1 = document.createElement("a");
readMore1.href = "#";
readMore1.className = "read-more";
readMore1.textContent = "Read More »";

col1.appendChild(thumbnail1);
col1.appendChild(description1);
col1.appendChild(paragraph1);
col1.appendChild(readMore1);
row.appendChild(col1);

let col2 = document.createElement("div");
col2.className = "col-md-4";

let thumbnail2 = document.createElement("div");
thumbnail2.className = "thumbnail";
thumbnail2.textContent = "290 x 180px";

let description2 = document.createElement("div");
description2.className = "thumbnail-description mt-2";
description2.textContent = "Indonectetus facilis";

let paragraph2 = document.createElement("p");
paragraph2.textContent = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";

let readMore2 = document.createElement("a");
readMore2.href = "#";
readMore2.className = "read-more";
readMore2.textContent = "Read More »";

col2.appendChild(thumbnail2);
col2.appendChild(description2);
col2.appendChild(paragraph2);
col2.appendChild(readMore2);
row.appendChild(col2);
let col3 = document.createElement("div");
col3.className = "col-md-4";

let thumbnail3 = document.createElement("div");
thumbnail3.className = "thumbnail";
thumbnail3.textContent = "290 x 180px";

let description3 = document.createElement("div");
description3.className = "thumbnail-description mt-2";
description3.textContent = "Indonectetus facilis";

let paragraph3 = document.createElement("p");
paragraph3.textContent = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.";

let readMore3 = document.createElement("a");
readMore3.href = "#";
readMore3.className = "read-more";
readMore3.textContent = "Read More »";

col3.appendChild(thumbnail3);
col3.appendChild(description3);
col3.appendChild(paragraph3);
col3.appendChild(readMore3);
row.appendChild(col3);

container.appendChild(row);
document.body.appendChild(container);

