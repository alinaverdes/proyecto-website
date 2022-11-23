

/* el siguiente código permite gestionar el menú de navegación de la página web, cuando la web se visita desde 
un dispositivo móvil*/

const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");
const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");

botones.forEach(function(boton){
  boton.addEventListener("click", function(){
    navegacion.classList.toggle("desplegado");
  });
});

function toggleMenu() {
  
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}

/* este código es el que permite ver las imagenes reducidas en formato ampliado, cada vez que
seleccionas una imagen en miniatura, está se expande */

var imgGrande = document.querySelectorAll(".imgGrande");
        var imgReducida = document.querySelectorAll(".imgReducida");
         
            imgReducida.forEach(function(elemento,indice){ 
            elemento.addEventListener("click", function(evento){
                var imgSrc = imgReducida[indice];
                var imgAttr = imgSrc.getAttribute("src");
                switch(indice) {
                    case 0:
                    case 1:
                    case 2:
                    imgGrande[0].setAttribute("src", imgAttr);
                    break;

                    case 3:
                    case 4:
                    case 5:
                    imgGrande[1].setAttribute("src", imgAttr);
                    break;

                    case 6:
                    case 7:
                    case 8:
                    imgGrande[2].setAttribute("src", imgAttr);
                    break;

                    case 9:
                    case 10:
                    case 11:
                    imgGrande[3].setAttribute("src", imgAttr);
                    break;
                }
            });
    
});




