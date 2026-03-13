/*Funcion para que aparezca la flecha que te devuelve al índice de la página*/
const volverArriba = document.querySelector(".volverArriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    volverArriba.classList.add("volverArriba-visible");
  } else {
    volverArriba.classList.remove("volverArriba-visible");
  }
});

/*Animación de imagenes al hacer Scroll*/
const imagen = document.querySelectorAll("div.imagen ");

const mostrarImagen = () => {
  const alturaVentana = window.innerHeight * 0.8; // altura de la ventana en pixeles, multiplica 0.8 para tomar el 80% de la pantalla

  imagen.forEach((img) => {
    const imgTop = img.getBoundingClientRect().top; //devuelve la coordenada
    if (imgTop < alturaVentana) {
      img.classList.add("mostrar");
    } else {
      img.classList.remove("mostrar");
    }
  });
};
window.addEventListener("scroll", mostrarImagen);

// minijuego acertijo
let intento = "";
let cont=0;
function comprobarIntento(){
    if (intento.trim() === "me a tre vo") {
        intento= "";
        cont=0;
        frase.innerHTML=" Contacta con nosotros valiente";
    }else {
        intento= "";
        frase.innerHTML="";
        cont=0;
        alert("Orden incorrecto");
      }
}
const botones = document.querySelectorAll(".acertijo") 
const frase =document.getElementById("frase")
 botones.forEach(boton => {

  boton.addEventListener("click", () => {

    intento += boton.id + " ";
    cont++
    frase.innerHTML=intento;
    if (cont==4){
    comprobarIntento();
    }

  });

});
