# DarkGamesSitioWeb
Sitio Web de DarkGames
Version 1.0.4
# Sobre el Sitio
El sitio de Dark Games es una pagina que representa a un local fisico de venta de Videjo juegos y reparacion de consolas. 
En la pagina los usuarios podran ver todos los productos que se ofrecen, su precio y su descripción.
Ademas ofrece un chat con el que podran comunicarse y realizar sus consultas.
# Tecnologias, frameworks, librerias y lenguajes utilizados
-HTML5 <br>
-CSS3 <br>
-JavaScript <br>
-Boostrap <br>
-NODE.js <br>
-SASS <br>
-SweetAlert
-YouTube API 
# Paleta de colores
#0D1B2A: Azul Marino Profundo <br>
#1B263B: Azul Oscuro <br>
#415A77: Azul Acero <br>
#778DA9: Azul Grisáceo <br>
#E0E1DD: Gris Claro <br>
# Cambios en la version
Se cambiaron los puntos de quiebre para adaptarse a dispositivos mobiles, tabletas, y pantallas mas grandes. <br>
Se utilizaron los siguientes puntos:  
<= 360px: mobiles pequeños.<br>
<= 430px: mobiles medianos y grandes. <br>
<= 744px: tablets. <br>
<= 992px: desktop mediano <br>
# Archivos
El desarrollo cuenta con 82 archivos en el root: <br>
-index.html: page principal del sitio<br>
-Carpetas: assets, css, js, pages, scss. Las cuales cuentan con los siguientes archivos y/o subcarpetas que distinguiremos una por una a continuación:<br>
## assets(59):
-Subcarpeta ico(2): contiene el archivo.ico que se muestra en el navegador y el mismo en formato .png. <br>
-Subcarpeta nav_icos(15): contiene los iconos en formato .svg que se muestran en el sitio.<br>
-Subcarpeta webP(42) contiene 3 archivos .webP, el banner, el logo y una imagen de la page about.html y 3 sub carpetas (portadasPS3, portadasPS4, portadasXONE) la finalidad de los archivos de estas subcarpetas es ser mostrados en las page.html. <br>
## css(2):
-Archivo: style.css que da estilo al sitio. <br>
-Archivo: style.css.map, que es el mapeo que hace SASS de sus archivos para trasladarlos a style.css. <br>
## js(1):
-Archivo: package.json, utilizado por Node.js. <br>
## pages(5):
-Archivo: about.html, información sobre los dueños y ,a tienda. <br>
-Archivo: inbox.html, mensajeria interna de la pagina. <br>
-Archivo: iniciar_sesion.html, login de usuarios. <br> 
-Archivo: registro.html, logup de usuarios. <br>
-Archivo: tienda.html, muestra los productos disponibles.<br>
## scss(15): 
-Archivo: style.scss, que enlaza los _partials.scss y los mapea en el archivo style.css. <br>
-Subcarpeta partials: en la cual se distinguen las subcarpetas base, layout, pages y utilities. Estas ultimas contienen los _partials.scss que son importados al archivo style.scss y dan estlo del sitio.

# Aclaraciones para el profesor
En este espacio voy a dejar acalaraciones para que el profesor lea y tenga en consideración.
1. en las subsecciones de archivos, se coloca el nombre de la carpeta y entre parentesis el total de archivos que contiene de la siguiente manera: nombre_carpeta(n).
2. inbox.html posee un modelo de chat en tiempo real que NO es funcional en la entrega final por poseer caracteristicas no vistas durante el curso.
3. registro.html posee un formulario de ingreso de datos NO funcional en la entrega final por poseer caracteristicas no vistas durante el curso.
3. iniciar_sesion posee un formulario de ingreso de datos NO funcional en la entrega final por poseer caracteristicas no vistas durante el curso.
4. en cuanto a la vista del deploy de gitpages en mi celular (720x1600) la pagina se ve bien a exepcion de un pequeño espacio en blanco al final debajoo del footer, que difiere de lo que muestra el inspector de elementos de los buscadores donde muestran espacios blancos de diferentes tamaños. No supe solucionar la cuestion, y aun que uso Body 100vh, que segun el inspector esta aplicado correctamente en el body de todas las paginas del sitio, sigue sucediento. Si encuentra el error, favor de señalarlo.

 #Aclaraciones para el profesor: 
 En este espacio voy a dejar acalaraciones para que el profesor lea y tenga en consideración.
 1. Este sitio pertenece a la entrega final del curso de Desarrollo Web de Coder.
 2. El sitio fue migrado de MPA a SPA, todo el contenido se ejecuta en index.html de manera dinamica.
 3. Todo el JS del sitio se encuentra en un archivo (js/app.js)
 4. El CSS (css/style.css) aplicado se encuentra modularizado en SCSS (scss/style.scss)
 5. El sitio cuenta con SweetAlert en los modulos de Login/up. Por motivos que desconozco, estos aparecen desalineados. 
 6. En el codigo se encuentran comentarios explicativos.
 8. La app consume la API de youtube para traer ifrmes y reproducir videos en la sección de detalles.
 9. La API de Youtube utilizada requiere de una credencial dada. Desconozco sus requisitos y limites pero deberia funcionar si se visualisa desde otro PC.
 10. La consola tira algunos errores relacionados a la API de YouTube en la pantalla de detalles. Sin embargo funciona bien y los ifram que proveee se obtienen y reproducen bien.
   
