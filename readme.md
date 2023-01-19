# Encriptador-Alura Challenger One

***

## Acercar de

Este proyecto es parte de mi educación en Alura, dada por el programa **Oracle Next Education**. Al finalizar la ruta de **principiante en programación**. Se ofrece a los estudiantes la opcion de agregar un proyecto a su portafolio, en este caso un encriptador de texto.

La plataforma ofrece un paso a paso con las tecnologias de **trello** y **figma** en las cuales se encuentra:
***
### Trello

Un identificador de tareas,con los objetivos que se deben cumplir en el desarrollo, ofrece la suficiente información para desglosar el problema, las clases de la ruta de aprendizaje y articulos de soporte para encontrar la solución al paso en el que nos encontremos
***
### Figma

Nos proporciona un plantilla con el diseño *"opcional"* de la pagina. Nos permite ver la estructura del **html**, los colores utilizados y la funcion de descargar las imagenes utilizadas en la plantilla
***

#  _Desarrollo_

* [html](https://example.com): Para la estructura de la información de la pagina
* [css](https://example.com): Estilo de las secciónes de la pagina
* [JavaScript](https://example.com): Lenguaje de programación para la interaccion con el encriptador

**Este proyecto esta construido en su totalidad con HTML5 puro**
***

# Estructura del proyecto

El proyecto cuenta con:

####  1. Un archivo index.html
    En este archivo esta compuesto por 5 secciones. 
    1.1 El header: el cual estructura el logo de alura, y el titulo del encriptador. 
    1.2 La seccion izquierda encargada de recibir el input del texto a encriptar, Tambien cuenta con una subsección con los botones de encriptar y desencriptar. 1.3 La sección derecha esta dividida en dos secciones, la primera cuenta con una imagen y un mensaje que informara al usuario, la falta de input para encriptar.
        La segunda sección estara oculta para el usuario hasta activar el evento del boton Encriptar. Una vez activada Aparecera el texto encriptado y un boton con la opción de copiar dicho texto.
    1.4 La seccion de Footer, esta sección cuenta con una imagen de fondo, El nombre del desarrollador y las redes de Linkedin y Github.
***

#### 2. Un carpeta Css

##### Archivo reset.css
    Este archivo fue dado por Alura, en este archivo se encuentra un restablecimiento total de los archivos predeterminador del compilador (navegador).

##### Archivo style.css
    Este archivo guarda todos los estilos del html dividido por secciones, para construir este archivo se utilizaron: clases, ID, Etiquetas, tambien cuenta con mediaQueries los cuales convierten en responsive el proyecto las medidas son:
    
    2.1 Para tablet(min750px): Ajusta las secciónes al ancho de la pantalla.
    2.2 Para Desktop(min940px): Ajusta las secciones para ocupara el ancho de pantalla en un computador
    2.3 El diseño principal se realizo para dispositivos moviles y fue modificado segun el ancho de la pantalla

##### Archivo index.js
    Este archivo guarda toda la interacctividad del proyecto.

    3.1 La primera sección guarda en constantes los inputs y botones del encriptador.
    3.2 La tercera sección alberga las funciónes construidas para cumplir con la logíca de la pagina, entre ellas encontramos: 
        3.2.1 Las funciones principales de encriptar y desencriptar, las cuales recibira el texto ingresado por el usuario y ejecutara el resto de funciones para cumplir el objetivo
        3.2.2 La funcion para reemplazar acentos, la cual tomara el texto ingresado por el usuario y con soporte en un diccionario, reemplazara los acentos por vocales normales
        3.2.3 La funcion para remover caracteres especiales, Utiliza el metodo replace para remover los caracteres especiales.
        3.2.4 Las funciones de encriptar y desencriptar, las cual reemplazara los caracteres del diccionario especifico.
        3.2.5 Las funciones de hidden y show, las cuales cambiaran el display de las secciones a necesidad.
        3.2.6 La funcion copyToClipBoard, con la cual el usuario podra copiar el texto de la seccion escondida.
        3.2.7 La funcion clear, para limpiar los campos del text tarea.
    3.4 La cuarta seccion alberga dos diccionarios construidos para:
            3.4.1 Reemplazar los acentos por vocales sin acentos
            3.4.2 Encriptar el texto identificando los caracteres y reemplazandolos por la llave especificada.
            3.4.2 Desencriptar el texto identificando los caracteres y reemplazandolos por la llave especificada.
    
***

# Contribuidores

Este challenger fue traido por:

1. **Jeanmarie Quijada** *Desarrolladora e Instructora en Alura Latam*
2. **Génesys Rondón** *Desarrolladora e Instructora en Alura Latam*

Desarrollado por: 

**Juan Carlos Villar Quintero**: *Estudiante de Oracle Next Education*






