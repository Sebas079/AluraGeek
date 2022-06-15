//agregar productos
import { producto } from "./productos.js";
import { services } from "./services.js";

import { imagePreview } from "./uploadImg.js";
const nombreProducto = document.querySelector(".nombreProducto");
const categoria = document.querySelector(".seccionProducto");
const precio = document.querySelector(".precioProducto");
const description = document.querySelector(".descripcionProducto");
const image = document.querySelector("#img-preview");
const newProducto = new producto();


const btnAgregarProducto = document.querySelector(".agregarProducto")
btnAgregarProducto.addEventListener("click", (event) => {
  event.preventDefault()
  
  newProducto.image = image.src;
  newProducto.productName = nombreProducto.value;
  newProducto.categoria= categoria.value;
  newProducto.price = precio.value;
  newProducto.description = description.value;
  newProducto.id = uuid.v4();
  if(newProducto.image != "" && newProducto.producName != "" && newProducto.categoria != "" && newProducto.price != "" && newProducto.description != "" ){
    console.log(newProducto)
    services.crearProducto(newProducto).then(response => console.log(response))
    .catch(err => err= window.location.href="../screens/error.html");
  }else{
    alert("Todos los campos son obligatorios" )
  }
 
  console.log(newProducto)

})
