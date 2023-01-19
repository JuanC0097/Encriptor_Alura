/*
Declaracion de la constantes con los elementos necesarios para el proyecto
*/
const txtEncryptor = document.getElementById("encryptor_text");
const btnEncryptor = document.querySelector("#encriptor");
const btndencryptor = document.querySelector("#dencryptor");
const presult = document.querySelector("#result");
const btncopy = document.querySelector("#copy");

/*
  Eventos
  -Evento del boton encriptar
  -Evento del boton copiar
  -Evento del boton desencriptar
  */ 
btnEncryptor.addEventListener("click", principalFunctionEncryptor);
btndencryptor.addEventListener("click",principalFuctionDencryptor);
btncopy.addEventListener("click",copyToClipBoard);


/* 
  Funcion Principal para el boton Encriptar:
   - Cambia el display de la seccion izquierda visible a "none".
   - Cambia el display de la seccion izquierda oculta a "inline-flex".
   - Guarda el valor del input en una variable.
   - Con el metodo toLowerCase convierte la string en minuscula.
   - Con la funcion removeAccents. Reemplazara las vocales con tilde,por vocales sin tildes.
   - Con la funcion removeSpecialChar. Extraera los caracteres especiales del string.
   - Con la funcion encriptor, reemplazara los valores de la string segun necesidad.
   - Con el metodo innerText, se mostrar la encriptacion de la string en el elemento presult.
   - Con la funcion clear. limpiara el input ingresado por el usuario.

  */
function principalFunctionEncryptor() { 

  show();
  hidden();
  let texto = txtEncryptor.value;
  removetxt = texto.toLowerCase();
  removetxt = removeAccents(removetxt);
  removetxt = removeSpecialChar(removetxt);
  removetxt = encriptor(removetxt);
  presult.innerText = removetxt;
  clear();

}

/*
  Funcion principal para el boton Desencriptar:
   - Guarda el valor del input en una variable.
   - Con la funcion dencriptor, reemplazara los valores de la string segun necesidad.
   - Con el metodo innerText, se mostrar la encriptacion de la string en el elemento presult.

*/
function principalFuctionDencryptor(){

  show();
  hidden();
  let texto = txtEncryptor.value;
  desncriptortxt = dencriptor(texto);
  presult.innerHTML = desncriptortxt;
  clear();
  console.log(desncriptortxt);

}

/*
  Diccionario para reemplazar acentos
   - Como claves de utilizaran las vocales con acento.
   - Como valor de la claves las vocales sin acento
*/
let diccionario =
{
  "á" : "a",
  "é" : "e",
  "í" : "i",
  "ó" : "o",
  "ú" : "u"
};

/*
  Funcion para reemplazar acentos
   - Con el metodo replace,las claves del diccionario y el modificador g,
     se reemplazan valores en el string y se guarda en la variable remove
   - Se retorna la variable remove con la nueva string sin tildes en las vocales
*/
function removeAccents (frase) {

    remove = frase.replace(/á|é|í|ó|ú/g,function(a){
      return diccionario[a];
    });
    return remove;

}

/*
  Función para remover caracteres especiales.
   - Con el metodo replace,los caracteres especiales a remover y el modificador g,
     se remueven de la string
   - Se retorna la variable con la frase sin caracteres especiales
*/
function removeSpecialChar(frase) {

    text = frase.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    return text;

}

/*
  Diccionario para reemplazar acentos
   - Como claves de utilizaran las vocales.
   - Como valor de la claves el string a reemplazar
*/
let dicencriptor =
{
  "a" : "ai",
  "e" : "enter",
  "i" : "imes",
  "o" : "ober",
  "u" : "ufat"
};

/*
  Funcion para encriptar texto
   - Con el metodo replace,las claves del diccionario y el modificador g,
     se reemplazan valores en el string y se guarda en la variable txtencrip
   - Se retorna la variable txtencrip con la nueva string encriptada
*/
function encriptor (frase) {

  txtencrip = frase.replace(/a|e|i|o|u/g,function(a){
    return dicencriptor[a];
  });
  return txtencrip;

}

/*
  Diccionario para desencriptar texto
   - Como claves de utilizaran los valores de encriptacion.
   - Como valor de la claves, las vocales a reemplazar
*/
let dicdencriptor =
{
  "ai"    : "a",
  "enter" : "e",
  "imes"  : "i",
  "ober"  : "o",
  "ufat"  : "u"

};

/*
  Funcion para dencriptar texto
   - Con el metodo replace,las claves del diccionario y el modificador g,
     se reemplazan valores por vocales en el string y se guarda en la variable txtdencrip
   - Se retorna la variable txtdencrip con la nueva string desencriptada
*/
function dencriptor (frase) {

  txtdencrip = frase.replace(/ai|enter|imes|ober|ufat/g,function(a){
    return dicdencriptor[a];
  });
  return txtdencrip;

}

/*
  Funcion para mostrar seccion oculta
   - Con el metodo  de documento getElementById,toma la seccion con id hidden.
   - Con los metodos style y display, cambia su display a inline-flex
*/
function hidden () {

  document.getElementById("hidden").style.display = "inline-flex";

}

/*
  Funcion para ocultar la seccion visible
   - Con el metodo  de documento getElementById,toma la seccion con id show.
   - Con los metodos style y display, cambia su display a none
*/
function show() {

  document.getElementById("show").style.display = "none";

}

/*
  Funcion para copiar la string encriptada
   - Con el metodo  de documento querySelector,se obtiene el id del elemento a mostrar el texto
   - Con el metodo select, seleccionamos el string.
   - Con el metodo execCommand, copia el string de vuelta
*/
function copyToClipBoard(){

  let content = document.querySelector("#result");
  content.select();
  document.execCommand("copy");

}

/*
  Funcion para limpiar el espacio del input
   - Con el metodo  de documento getElementById,se obtiene el id del elemento a limpiar
    Se cambia su valor por ""
*/
function clear(){

  document.getElementById("encryptor_text").value = "";

}