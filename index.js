//constantes con los input
const txtEncryptor = document.getElementById("encryptor_text");
const btnEncryptor = document.querySelector("#encriptor");
const btnDencryptor = document.querySelector("#dencryptor");
const presult = document.querySelector("#result");
const accents = document.querySelector("#acents");

//Evento del boton encriptar 
btnEncryptor.addEventListener("click", prinText);



//FUNCIONES

/* Funcion Principal:
   - Guarda el valor del input en una variable
   - Con la funcion removeAccents. Reemplazara las vocales con tilde,por vocales sin tildes
   - Con la funcion removeSpecialChar. Extraera los caracteres especiales del string*/
function prinText() { 

    let texto = txtEncryptor.value;
    removetxt = removeAccents(texto);
    removetxt = removeSpecialChar(removetxt);
    presult.innerText = "SU TEXTO ES: " + removetxt;

}

//Constante para probar las funciones
const textoPrueba = "esté es ún textó de pruebá í";

//Diccionario para reemplazar los acentos.
let diccionario =
{
  "á" : "a",
  "é" : "e",
  "í" : "i",
  "ó" : "o",
  "ú" : "u"
};

//Función para remover acentos
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

