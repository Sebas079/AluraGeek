
const user = document.querySelector(".loguin__user");
const password = document.querySelector(".loguin__pass");
const btnInciarSesion = document.getElementById("login");
let autentic = false;

const editar = document.querySelector(".editarIcon");
const borrar = document.querySelector(".borrarIcon");
const agregarProducto = document.querySelector("agregarProducto");

btnInciarSesion.addEventListener("click", (event) => {
  event.preventDefault();


  if (user.value == "SEBASTIAN" && password.value == 12345) {
      
      window.location=("../screens/productsEdit.html");
      return autentic = true;
      
  }
})









