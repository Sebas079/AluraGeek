//agregar productos
import { producto } from "./productos.js";
import { services } from "./services.js";

import { imagePreview } from "./uploadImg.js";
const nombreProducto = document.querySelector(".nombreProducto");
const precio = document.querySelector(".precioProducto");
const description = document.querySelector(".descripcionProducto");
const image = document.querySelector("#img-preview");
const newProducto = new producto();
 

const btnAgregarProducto = document.querySelector(".agregarProducto")
btnAgregarProducto.addEventListener("click", (event) => {
  event.preventDefault() 

 newProducto.image = image.src;
 newProducto.producName = nombreProducto.value;
 newProducto.price = precio.value;
 newProducto.description = description.value;
 newProducto.id = uuid.v4();
 console.log(newProducto)
  
  services.crearProducto(newProducto).then(response => console.log(response))
  .catch(err => alert(err,"ocurrio un error"));
 
})
