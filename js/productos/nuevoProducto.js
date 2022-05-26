import { services } from "./services.js";

function newProduct(image, productName, precio, descripcionProducto, id) {
  const nuevoSection = document.createElement("section");
  const contenido = `  <div class="productoPrincipal__img">
  <img src="${image}" alt="${productName}"class="productoPrincipal__img ">
 </div>

<div class="productoPrincipal__contenido">
  <h4 class="starWars__descripcion precio productoPrincipal__titulo  ">${productName}</h4>
  <h4 class="starWars__precio productoPrincipal__precio "> $ ${precio}</h4>
  <p class="productoPricipal__descripcion">${descripcionProducto}</p>

</div>`;
  nuevoSection.innerHTML = contenido;
  nuevoSection.classList.add("productoPrincipal");
  return nuevoSection;
}

const section = document.querySelector("#productoPrincipal");
console.log(section);
//const addProducts = () => fetch("http://localhost:3000/profile").then((response) => response.json());
services.addProducts().then(data => {
  console.log(data)
  data.forEach(({image, productName, price, description, id })=>{
    const nuevoProducto = newProduct(image, productName, price, description, id);
    section.appendChild(nuevoProducto);
  })
 

});

