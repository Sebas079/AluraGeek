import { services } from "./services.js";
import { newProduct } from "./nuevoProducto.js";

const formulario = document.querySelector(".nuevoProducto__form");
const editarProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "../screens/error.html"
    }
    services.verProducto(id).then((data) => {
        console.log(data)
        const imgInput = document.querySelector("#img-preview")//.
        const fileInput = document.querySelector(".btnUploadImg")//.
        const inputNombreProducto = document.querySelector(".nombreProducto");
        const inputSeccion = document.querySelector(".seccionProducto");
        const inputPrecio = document.querySelector(".precioProducto");
        const inputDescripcion = document.querySelector(".descripcionProducto");
        imgInput.classList.add("imgEditar");
        fileInput.classList.add("btnAgregarImg");
        imgInput.src = data.image;
        inputNombreProducto.value = data.productName;
        inputSeccion.value = data.categoria;
        inputPrecio.value = data.price;
        inputDescripcion.value = data.description;
    })




}
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id)
    const imgInput = document.querySelector("#img-preview").src
    const inputNombreProducto = document.querySelector(".nombreProducto").value;
    const inputSeccion = document.querySelector(".seccionProducto").value;
    const inputPrecio = document.querySelector(".precioProducto").value;
    const inputDescripcion = document.querySelector(".descripcionProducto").value;
    console.log(imgInput, inputNombreProducto, inputSeccion, inputPrecio, inputDescripcion, id)
    services.actualizarProducto(imgInput, inputNombreProducto, inputSeccion, inputPrecio, inputDescripcion, id)


})
editarProducto();