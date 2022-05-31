import { services } from "./services.js";

function newProduct(image, productName, precio, descripcionProducto, id) {
  console.log(image, productName, precio, descripcionProducto, id);
  const li = document.createElement("li");
  const contenido = `  <li class="porductos__lista__item" data-prod>
              <div class="starWars__img">

              <img src="${image}" alt="Taza starwars" class="starWars__img">
              <div class="editar__borrar">
               <a href="" class="editar"><img src="../img/editar.svg" alt="" class="editarIcon"></a>
               <a href="" class="borrar"><img src="../img/borrar.svg" alt="" class="borrarIcon"></a>
              </div>
               
       </div>
       <h4 class="starWars__descripcion precio">${productName}</h4>
       <h4 class="starWars__precio">${precio}</h4>
       <a href="${id}" class="starWars__verProductos">Ver producto</a>


   </li> `;
  li.innerHTML = contenido;
  li.classList.add("starWars__lista");
  return li;
}

const ul = document.querySelector(".starWars__lista");
console.log(ul)



services.addProducts().then(data => {
  console.log(data)
  data.forEach(({ image, productName, price, description, id }) => {
    const nuevoProducto = newProduct(image, productName, price, description, id);
    console.log(nuevoProducto);
    ul.appendChild(nuevoProducto);
  })


});
const btnEliminar = document.querySelector(".borrar");
console.log(btnEliminar);

const eliminarProducto = (id) => {



}