const addProducts = () => fetch("http://localhost:3000/profile").then((response) => response.json());


const crearProducto= (image, productName, price, description,id ) =>{
    return fetch("http://localhost:3000/profile",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(image, productName, price, description,id )
    })
}

export const services ={
    addProducts,
    crearProducto,
}


