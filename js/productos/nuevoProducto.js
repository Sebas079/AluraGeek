import { services } from "./services.js";

//creo producto 
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
                     <a href="../screens/productoSelecionado.html?id=${id}" class="starWars__verProductos" target ="_blank">Ver producto</a>
                    </li> `;
  li.innerHTML = contenido;
  li.classList.add("starWars__lista");
  const btnEliminar = li.querySelector("button")
  //elimino producto
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    services.deleteProduct(id).then(() => console.log("gracias!").catch(e => e = window.location.href = "../screens/error.html"));

  });

  return li;
};

const ul = document.querySelector(".starWars__lista");

//agrego los productos 
services.addProducts().then((data) => {
  data.forEach(({ image, productName, categoria, price, description, id }) => {
    const nuevoProducto = newProduct({ image, productName, categoria, price, description, id });

    ul.appendChild(nuevoProducto);

  })
})


export {
  newProduct
}