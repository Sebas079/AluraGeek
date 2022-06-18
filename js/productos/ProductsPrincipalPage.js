

import { services } from "./services.js";


// productos en pagina principal
function newProduct({ image, productName, categoria, price, descripcionProducto, id }) {

  const li = document.createElement("li");
  const contenido = ` <li class="porductos__lista__item" data-prod>
                          <div class="starWars__img">
    
                         <img src="${image}" alt="${productName}" class="starWars__img">
                         <div class="editar__borrar">
                         <a href="./editarProducto.html?id=${id}" class="editar"><img src="../img/editar.svg" alt="" class="editarIcon"></a>
                         <button class="borrar" id="${id}"><img src="../img/borrar.svg" alt="" class="borrarIcon"></button>
                         </div>
                   
                         </div>
                         <h4 class="starWars__descripcion precio productoPrincipal__titulo  ">${productName}</h4>
                         <h4 class="starWars__precio">$ ${price}</h4>
                         <a href="./screens/productoSeleccionado.html?id=${id}" class="starWars__verProductos" target ="_blank">Ver producto</a>
                        </li> `;
  li.innerHTML = contenido;
  li.classList.add("starWars__lista");

  return li;
};

// lista de productos en la pagina principal
export const productoPaginaPrincipal = () => {

  const productosStarWars = document.querySelector('[data-star-wars]');
  const productosConsolas = document.querySelector('[data-consolas]');
  const productosDiversos = document.querySelector('[data-diversos]');

  services.addProducts().then(async (data) => {

    data.forEach(({ image, productName, categoria, price, description, id }) => {
    
      let productoSeccion = { image, productName, categoria, price, description, id };
      let li;

      if (productoSeccion.categoria == "Star Wars") {

        li = newProduct({ image, productName, categoria, price, description, id })
        productosStarWars.appendChild(li)

      }
      if (productoSeccion.categoria == "Consolas") {

        li = newProduct({ image, productName, categoria, price, description, id })
        productosConsolas.appendChild(li);

      }
      if (productoSeccion.categoria == "Diversos") {

        li = newProduct({ image, productName, categoria, price, description, id })
        productosDiversos.appendChild(li)
      }
      //seleccion de producto a mostrar 
      const btnVerProducto = document.querySelector(".starWars__verProductos");

    })

  })
}

productoPaginaPrincipal();



