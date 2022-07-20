const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");

botones.forEach(function(boton){
  boton.addEventListener("click", function(){
    navegacion.classList.toggle("desplegado");
  });
});



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




