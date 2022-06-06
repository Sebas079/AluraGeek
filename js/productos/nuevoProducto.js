import { services } from "./services.js";


function newProduct(image, productName, precio, descripcionProducto, id) {

  const li = document.createElement("li");
  const contenido = ` <li class="porductos__lista__item" data-prod>
                      <div class="starWars__img">

                     <img src="${image}" alt="Taza starwars" class="starWars__img">
                     <div class="editar__borrar">
                     <a href="" class="editar" id="${id}"><img src="../img/editar.svg" alt="" class="editarIcon"></a>
                     <button class="borrar" id="${id}"><img src="../img/borrar.svg" alt="" class="borrarIcon"></button>
                     </div>
               
                     </div>
                     <h4 class="starWars__descripcion precio">${productName}</h4>
                     <h4 class="starWars__precio">${precio}</h4>
                     <a href="${id}" class="starWars__verProductos">Ver producto</a>
                    </li> `;
  li.innerHTML = contenido;
  li.classList.add("starWars__lista");
  const btnEliminar = li.querySelector("button")
  
  btnEliminar.addEventListener("click", () =>{
    const id = btnEliminar.id;
    console.log(id)
    services.deleteProduct(id).then(() => console.log("gracias!").catch( e => console.log("Error")));
   
  });

  return li;
};

const ul = document.querySelector(".starWars__lista");



services.addProducts().then((data) => {
  console.log(data)
  data.forEach(({ image, productName, price, description, id }) => {
    const nuevoProducto = newProduct(image, productName, price, description, id);
    console.log(nuevoProducto);
    ul.appendChild(nuevoProducto);
})
})
 

   