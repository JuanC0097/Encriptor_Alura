//Guardar en constantes los input
const txtEncryptor = document.querySelector("#encryptor_text");
const btnEncryptor = document.querySelector("#encriptor");
const btnDencryptor = document.querySelector("#dencryptor");
const presult = document.querySelector("#result");

//agregar el evento al boton encriptar 
btnEncryptor.addEventListener("click", prinText)


//funcion para mostrar el texto
function prinText() {

    texto = txtEncryptor.value;
    presult.innerText = "SU TEXTO ES: " + texto;

}