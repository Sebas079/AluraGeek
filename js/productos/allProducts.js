import { services } from "./services.js";


function newProduct(image, productName, categoria, price, description, id) {

  const li = document.createElement("li");
  const contenido = ` <li class="porductos__lista__item" data-prod>
                      <div class="starWars__img">

                     <img src="${image}" alt="${productName}" class="starWars__img">
                    
               
                     </div>
                     <h4 class="starWars__descripcion precio">${productName}</h4>
                     <h4 class="starWars__precio">${price}</h4>
                     <a href="../screens/productoSelecionado.html?id=${id}" class="starWars__verProductos">Ver producto</a>
                    </li> `;
  li.innerHTML = contenido;
  li.classList.add("starWars__lista");
  
  return li;
};

const ul = document.querySelector("[data-allProd]");
console.log(ul)


services.addProducts().then((data) => {
  data.forEach(({ image, productName,categoria, price, description, id }) => {
    const nuevoProducto = newProduct(image, productName,categoria, price, description, id);
    //console.log(nuevoProducto);
    ul.appendChild(nuevoProducto);
})
})