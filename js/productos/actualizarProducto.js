async function actualizarProducto(image, productName, categoria, price, description, id) {
    console.log(image, productName, categoria, price, description, id);
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(image, productName, categoria, price, description, id)
    }).catch((error) => {
        return window.location.href = "../screens/error.html";
    });
}
