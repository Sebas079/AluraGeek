import { services } from "./services.js";
import { newProduct } from "./nuevoProducto.js";


const mostrarProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id)
    services.verProducto(id).then(({image, productName, categoria, price, description, id }) => {
        console.log({image, productName, categoria, description,price, id })
        const section = document.querySelector("[data-sectioPrincipal]");
        const div = document.createElement("div")
        const constenido = ` <div class="productoPrincipal__img">
        <img src="${image}" alt="${productName}" class="productoPrincipal__img ">
       </div>
    
    <div class="productoPrincipal__contenido">
        <h4 class="starWars__descripcion precio productoPrincipal__titulo  ">${productName}</h4>
        <h4 class="starWars__precio productoPrincipal__precio ">$ ${price}</h4>
        <p class="productoPricipal__descripcion">${description}</p>
         
    </div>`;
        div.innerHTML = constenido;
        div.classList.add("producto__principal");
        console.log(div)
       section.appendChild(div);
    
    
    })
    
}

//Mostrar productos similares
  const productoSimilaresContenido =  () =>{
    const prodcutosSimilares = document.querySelector(".productosSimilares__lista") 
    const productosStarWars = document.querySelector('[data-star-wars]');
    const productosConsolas = document.querySelector('[data-consolas]');
    const productosDiversos = document.querySelector('[data-diversos]');
    
    services.addProducts().then(async (data) => {
        console.log(data)
        data.forEach(({image, productName,categoria, price, description,id }) => {
            const li = newProduct({image, productName,categoria, price, description,id})
            if(prodcutosSimilares.childElementCount < 6){
              li.classList.add("productosSimilares__titulo")
              prodcutosSimilares.appendChild(li)
            }
            
    
})
}).catch((error) => {console.log(error)
    return window.location.href = "../screens/error.html";
    })
  }

   

    
productoSimilaresContenido();
mostrarProducto();