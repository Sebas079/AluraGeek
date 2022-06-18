import { services } from "./services.js";

const barraBusqueda = document.querySelector("[data-find]");
const resultado = document.querySelector("[data-resultado]");
console.log(resultado)

const filtrar = () => {
    resultado.innerHTML ="";
    const texto = barraBusqueda.value.toLowerCase();
 services.addProducts().then((data) => {
    console.log(data)
    data.forEach(({image, productName,categoria, price, description,id})  => {
        let nombreProducto = productName.toLowerCase();
        
        if(nombreProducto.indexOf(texto) !== -1){
            console.log(texto)
            resultado.innerHTML += `<li class="resultadoBusqueda" data-list>
            <a href="../screens/productoSeleccionado.html?id=${id}">
            ${nombreProducto}
            </a>
            </li>`;
        }
    });
 })
 
}
barraBusqueda.addEventListener("keyup",filtrar)
const li = document.querySelector("data-list");
console.log(li)
