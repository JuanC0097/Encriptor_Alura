//constantes con los input
const txtEncryptor = document.getElementById("encryptor_text");
const btnEncryptor = document.querySelector("#encriptor");
const btnDencryptor = document.querySelector("#dencryptor");
const presult = document.querySelector("#result");
const btncopy = document.querySelector("#copy");

//Evento del boton encriptar 
btnEncryptor.addEventListener("click", principalFunction);
btncopy.addEventListener("click", copyToClipBoard);

/* Funcion Principal:
   - Cambia el display de la seccion izquierda visible a "none".
   - Cambia el display de la seccion izquierda oculta a "inline-flex".
   - Guarda el valor del input en una variable.
   - Con el metodo toLowerCase convierte la string en minuscula.
   - Con la funcion removeAccents. Reemplazara las vocales con tilde,por vocales sin tildes.
   - Con la funcion removeSpecialChar. Extraera los caracteres especiales del string.
   - Con la funcion clear. limpiara el input ingresado por el usuario.
   */
function principalFunction() { 

  show();
  hidden();
  let texto = txtEncryptor.value;
  removetxt = texto.toLowerCase();
  removetxt = removeAccents(removetxt);
  removetxt = removeSpecialChar(removetxt);
  removetxt = encriptor(removetxt);
  presult.innerText = "SU TEXTO ES: " + removetxt;
  clear();

}

//Constante para probar las funciones
const textoPrueba = "este es un texto de prueba";

//Diccionario para reemplazar acentos
let diccionario =
{
  "á" : "a",
  "é" : "e",
  "í" : "i",
  "ó" : "o",
  "ú" : "u"
};

//Funcion para reemplazar acentos
function removeAccents (frase) {

    remove = frase.replace(/á|é|í|ó|ú/g,function(a){
      return diccionario[a];
    });
    return remove;

}

//Función para remover caracteres especiales.
function removeSpecialChar(frase) {

    text = frase.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    return text;

}

//Diccionario para encriptar texto
let dicencriptor =
{
  "a" : "ai",
  "e" : "enter",
  "i" : "imes",
  "o" : "ober",
  "u" : "ufat"
};

//Función para encriptar texto
function encriptor (frase) {

  txtencrip = frase.replace(/a|e|i|o|u/g,function(a){
    return dicencriptor[a];
  });
  return txtencrip;

}

//Funcion para mostrar  seccion
function hidden () {

  document.getElementById("hidden").style.display = "inline-flex";

}

//Funcion para esconder seccion
function show() {

  document.getElementById("show").style.display = "none";

}

//Funcion para obtener el texto copiado
function copyToClipBoard(){

  let content = document.querySelector("#result");
  content.select();
  document.execCommand("copy");
  console.log("copiado");

}

//Funcion para limpiar campo del input.
function clear(){

  document.getElementById("encryptor_text").value = "";

}

imprimir = encriptor(textoPrueba);
console.log(imprimir);


