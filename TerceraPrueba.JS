/*Funcion para que aparezca la flecha que te devuelve al índice de la página*/
const volverArriba = document.querySelector(".volverArriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        volverArriba.classList.add("volverArriba-visible");
    } else {
        volverArriba.classList.remove("volverArriba-visible");
    }
});

/*Validar fecha*/
let fechaInput = document.getElementById("fecha");

if (fechaInput) {
    fechaInput.addEventListener("input", () => {
        let hoy = new Date();
        let hoyString = hoy.getFullYear() + "-" +
            ("0" + (hoy.getMonth() + 1)).slice(-2) + "-" +  //se usa +1 ya que getMonth te devuelve por defecto un número del 0 a 11, 
            ("0" + hoy.getDate()).slice(-2); //slice toma los dos ultimos caracteres de la cadena

        if (fechaInput.value < hoyString) {
            alert("Selecciona una fecha válida");
            fechaInput.value = "";
        }
    });
};


/*Animación de imagenes al hacer Scroll*/
const imagen = document.querySelectorAll(".imagen");

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


/*Calcular precio*/
let numPersonas = document.getElementById("personas");
let precioTotal = document.getElementById("total");

numPersonas.addEventListener("input", ()=>{
    let persona = parseInt(numPersonas.value);
    let precioPersona = numPersonas.dataset.precio;
    let total = persona * precioPersona;
    precioTotal.value = total + ",00 €"
})