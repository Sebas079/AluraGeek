
const btnUploadImg = document.querySelector(".btnUploadImg");
const upImg = document.querySelector(".inputFile");

btnUploadImg.addEventListener("click", () => upImg.click());

const imagePreview = document.getElementById("img-preview");
const imgUpLoader = document.getElementById("img-uploader");

//cloudinary contantes 
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dtlvunuzt/image/upload";
const CLOUDINARY_URL_PRESET = "u4thhe67";
imgUpLoader.addEventListener("change", async (event) => {
    
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_URL_PRESET);
    const resultado = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    console.log(imagePreview.src = resultado.data.url);
    btnUploadImg.setAttribute("style", "display: none");



    imagePreview.classList.add("agregarImagen")

    imagePreview.src = resultado.data.url;


})
export {
    imagePreview
}