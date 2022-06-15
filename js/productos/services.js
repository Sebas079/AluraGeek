
const addProducts = () => fetch("http://localhost:3000/profile").then((response) =>(response.json() ));


const crearProducto= (image, productName,categoria, price, description,id ) =>{
    console.log(image, productName,categoria, price, description,id )
    return fetch("http://localhost:3000/profile",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(image, productName,categoria, price, description,id )
    })
}

const deleteProduct = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
    method: "DELETE"
    })
} 

async function actualizarProducto(image, productName, categoria, price, description, id) {
    console.log(image, productName, categoria, price, description, id);
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({image, productName, categoria, price, description, id})
    }).catch((error) => {
        return window.location.href = "../screens/error.html";
    });
}
const verProducto = async (id) => {
    console.log(id)
  return  fetch(`http://localhost:3000/profile/${id}`).then(response => response.json())
}
const buscarProducto = (productName) =>{
    console.log(productName)
    return fetch(`http://localhost:3000/profile/${productName}`).then(response => response.json())

}
export const services ={
    addProducts,
    crearProducto,
    deleteProduct,
    actualizarProducto, 
    verProducto,
    buscarProducto

}


