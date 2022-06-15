import { services } from "./services.js";
//import {mostrarProducto} from "./productoDesripcion.js"
const buscarProducto = document.querySelector(".buscador__input");

/*const url = new URL(window.location);
    const producto = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "../screens/error.html"
    }
    services.buscarProducto(producto).then((data) => {
        console.log(data)
       
    })*/


buscarProducto.addEventListener("input",( )=> {
    console.log(buscarProducto.value);
    services.addProducts().then( (data) => {
        
       data.forEach(({image, productName,categoria, price, description,id }) => {
        
        const nombreProducto = productName.toLowerCase();
        const nombreCategoria = categoria.toLowerCase();
        const texto = buscarProducto.value.toLowerCase();
        let resultado;
    
        if(nombreProducto.indexOf(texto) != -1){
            services.verProducto(nombreProducto)
         
        }
        })     
                 
      });
    });

      
           
