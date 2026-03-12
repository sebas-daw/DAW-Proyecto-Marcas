/*Defino el array: */
const diapositivas=[
    {
        fondo: "multimedia/imagenesMaría/FondoCastillo.png",
        arriba: "multimedia/imagenesMaría/Silueta.png",
        categoria: "Categoría: Thriller/Acción",
        titulo:"La oscuridad del Castillo",
        texto: "Cuando la peste devore la ciudad, solo quienes se atreven a cruzar la oscuridad pueden aspirar a ver un nuevo amanecer.",
        enlaces: "PrimeraPrueba.html"
    },
    {
        fondo: "multimedia/imagenesMaría/FondoPantano.png",
        arriba: "multimedia/imagenesMaría/Espiritu.png",
        categoria: "Categoría: Misterio/Fantasía",
        titulo: "El susurro de las aguas",
        texto: "Donde el agua cubrió un pueblo, nació un misterio... y ahora os invita a descubrir la historia que hubo detrás de todo eso.",
        enlaces: "SegundaPrueba.html"
    },
    {
        fondo: "multimedia/imagenesMaría/FondoExorcismo.png",
        arriba: "multimedia/imagenesMaría/Niña.png",
        categoria: "Categoría: Terror/Horror",
        titulo: "El exorcismo de Almansa",
        texto: "Lo que quedó a mitad no duerme...aún respira oculto, aguardando el momento de reclamar lo que una vez le fue negado.",
        enlaces:"TerceraPrueba.html"
    } 
];

/*Seguramente no sea la forma más eficiente, pero es la única que se me ha ocurrido porque no tengo más cabeza*/
const imgFondo = document.querySelector(".capaFondo");
const imgArriba = document.querySelector(".capaArriba");
const spantexto = document.querySelector(".subtitulo");
const titulo = document.querySelector(".contenido h1");
const parrafo = document.querySelector(".contenido p");
const boton = document.querySelector(".button");

const botonIzq = document.querySelector(".flechaIzquierda");
const botonDer = document.querySelector(".flechaDerecha");


let indice = 0;

function vistaDiapositivas(){
    const diapositiva = diapositivas[indice];
    imgFondo.src = diapositiva.fondo;
    imgArriba.src = diapositiva.arriba;
    spantexto.textContent = diapositiva.categoria;
    titulo.textContent = diapositiva.titulo;
    parrafo.textContent = diapositiva.texto;
    boton.href = diapositiva.enlaces;
}

if(botonDer != null && botonIzq !=null){
    botonDer.addEventListener("click",()=>{
        indice = (indice + 1) % diapositivas.length;
        vistaDiapositivas();
    });

    botonIzq.addEventListener("click",()=>{
        indice = ((indice - 1)+diapositivas.length) % diapositivas.length;
        vistaDiapositivas();
    });
}



/*El movimiento de las secciones me lleva a la determinacion de si podré mover la 
imagen de arriba del carrusel y moverlo en el eje x*/
if(botonDer != null && botonIzq !=null){
    const carrusel=  document.querySelector(".carrusel");
    const capaArriba = carrusel.querySelector(".capaArriba");

    /*Quiero que la imagen siga un poco la direccion del raton */
    carrusel.addEventListener("mousemove", function(e){ 
        /*Elimino esto porque me habia ayudado mi chico pero no son cosas que quiero valorar, quiero intentarlo hacerlo por mi misma */
        let movimiento = e.offsetX *0.02;
        /*Al final era muchisimo mas sencillo, aunque si dejo solo el e.offsetx 0.01 se raya, no, se raya igual. Preguntare el lunes*/
        capaArriba.style.transform ="translateX(" + movimiento + "px)";
})};


/*Se me ha ocurrido la brillante idea de intentar hacer una pequeña animación con las imagenes de las secciones*/
const secciones= document.querySelectorAll(".seccion");


window.addEventListener("scroll", ()=>{
    secciones.forEach(seccion =>{
        const imagenFo = seccion.querySelector("img");
        const rect = seccion.getBoundingClientRect();
    
    
        /*Vale, si o si necesito poner limites */
        let movimiento = rect.top * 0.3;
        let limite = 50;
        if(movimiento>limite) movimiento=limite;
        if(movimiento<-limite) movimiento=-limite;
        imagenFo.style.transform = "translateY(" + movimiento + "px)";
    })
})



/*Quiero que al darle click al boton de Pantano, me aparezca un farol*/
    const acepto=document.getElementById("aceptoBoton");
    const farolillo = document.querySelector(".farol");

if(acepto !=null && farolillo!=null){
    acepto.addEventListener("click", () =>{
        farolillo.style.display = (farolillo.style.display == 'none')? 'inline':'none';
    });

    /*He encontrado la manera de hacer que el farol brille y he querido hacer lo mismo que con el boton, basicamente
    que aplique la propiedad filter drop-shadow para encender o none para apagar el farol. */
    farolillo.addEventListener("click", () =>
    farolillo.style.filter=(farolillo.style.filter == 'none')? 'drop-shadow(0 0 50px rgba(255,220,120,0.8))': 'none');
};




/*La idea es crear un mensaje oculto de los textos que estan creados, intento usar drag and drop para esto */
    let elementoArrastrado = null;
    const farol = document.querySelector(".farol");
    const parrafosHistoria = document.querySelectorAll(".historiaSeccion p, .historiaSeccionInversa p");

    if(farol!=null){
    farol.addEventListener("dragstart", function (){
        elementoArrastrado = farol;
    });

        for(let parrafo of parrafosHistoria){
            parrafo.addEventListener("dragover", function (e){
                e.preventDefault(); 
                parrafo.classList.add("textoGris");
            });

            parrafo.addEventListener("drop", function(e){
            });
        }
    }
