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

    imagen.forEach(img => {
        const imgTop = img.getBoundingClientRect().top; //devuelve la coordenada
        if(imgTop < alturaVentana){
            img.classList.add("mostrar");
        }else{
            img.classList.remove("mostrar");
        }
    });
};
window.addEventListener("scroll", mostrarImagen);

