/*Defino el array: */
const diapositivas=[
    {
        fondo: "Imagenes/FondoCastillo.png",
        arriba: "Imagenes/Silueta.png",
        categoria: "Categoría: Thriller/Acción",
        titulo:"La oscuridad del Castillo",
        texto: "Cuando la peste devore la ciudad, solo quienes se atreven a cruzar la oscuridad pueden aspirar a ver un nuevo amanecer.",
        enlaces: "index.html"
    },
    {
        fondo: "Imagenes/FondoPantano.png",
        arriba: "Imagenes/Espiritu.png",
        categoria: "Categoría: Misterio/Fantasía",
        titulo: "El susurro de las aguas",
        texto: "Donde el agua cubrió un pueblo, nació un misterio... y ahora os invita a descubrir la historia que hubo detrás de todo eso.",
        enlaces: "PruebaPantano.html"
    },
    {
        fondo: "Imagenes/FondoExorcismo.png",
        arriba: "Imagenes/Niña.png",
        categoria: "Categoría: Terror/Horror",
        titulo: "El exorcismo de Almansa",
        texto: "Lo que quedó a mitad no duerme...aún respira oculto, aguardando el momento de reclamar lo que una vez le fue negado.",
        enlaces:"index.html"
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
    const zona=  document.querySelector(".carrusel");
    const capaArriba = document.querySelector(".capaArriba");
        /*Quiero que la imagen siga un poco la direccion del raton */
        zona.addEventListener("mousemove", function(e) { 
            const rect = zona.getBoundingClientRect();
    
            let offsetX = e.clientX - rect.left - 100;
            capaArriba.style.left = offsetX + "px";
        })
}; /*Asi no se raya la imagen pero se va de la zona, deberia poner unos limites pero no se establecerlos bien */


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
    let farolEncendido = false;
    const ocultar = document.querySelector(".oculto");

if(acepto !=null && farolillo!=null && ocultar!=null){
    acepto.addEventListener("click", () =>{
        /*Vale, ahora mismo es dificil leer las letras como tal, asi que se me ha ocurrido tornar mi pagina en negro para encontrar las letras con el farol*/
        farolillo.style.display = "inline";
        ocultar.style.display="flex";
    });

    /*He encontrado la manera de hacer que el farol brille y he querido hacer lo mismo que con el boton, basicamente
    que aplique la propiedad filter drop-shadow para encender o none para apagar el farol. */
    farolillo.addEventListener("click", () =>{
        if(farolEncendido == false){
            farolillo.style.filter = "drop-shadow(0 0 50px rgba(255,220,120,0.8))";
            farolEncendido =true; /*Quiero que se revelen las letras solo si el farol esta encendido, asi que vuelvo con los interruptores */
        }else{
            farolillo.style.filter="none";
            farolEncendido = false;
        }
    });
}



        /*Voy a intentar que el farol siga al raton en lugar de hacerlo con drag and drop */
    const farol=document.querySelector(".farol");
    const zona = document.querySelector(".introduccion");
    const parrafosHistoria = document.querySelectorAll(".historiaSeccion p, .historiaSeccionInversa p");
    /*Quiero evitar que sepan la respuesta con el farol que tienen al principio, porque me he dado cuenta de que podrian encontrarla antes de desvelar el mensaje de pista */
    const palabrasOcultas = document.querySelectorAll(".respuestaOculta");
    
   
    

    /*Dejo aqui las referencias para la zona del cryptex, la resolucion etc */
    const elGuia = document.getElementById("elGuia");
    const cryptex = document.querySelector(".cryptex");
    const pista = document.getElementById("pista");
    const clave = document.getElementById("clave");
    const botonClave=document.getElementById("botonClave");
    const final = document.getElementById("final"); 
    
    
    let mensajeOcultoLeido = false;
    let trampillaActivada = false;
    let resolviendo = false;

    if(farol!=null && zona!=null){
        zona.addEventListener("mousemove", function(e) {
            if(resolviendo==false){
                const rect = zona.getBoundingClientRect();
                let offsetX =e.clientX - rect.left - 25;
                let offsetY = e.clientY - rect.top - 35;

                farol.style.left = offsetX + "px";
                farol.style.top = offsetY + "px";
            }


            if(farolEncendido==true && resolviendo==false){ /*Creo que me petaba de aqui */
                /*Quiero saber el tamaño del farol y el tamaño del parrafo para saber cuando el farol toca el parrafo y cuando no*/
                const rectFarol = farol.getBoundingClientRect(); 
               
                if(mensajeOcultoLeido==false){
                    /*Para que se revelen solo si el farol esta iluminado*/

                    for(let parrafo of parrafosHistoria){
                        const rectParrafo= parrafo.getBoundingClientRect(); /*Vale y ahora tendre que establecer pues 1. cuando el lado derecho del farol haya pasado sobre el lado iz del parrafo// 2. Cuando el lado izq del farol esté antes que el lado derecho del p */
                        
                        if(rectFarol.right>rectParrafo.left && rectFarol.left<rectParrafo.right && rectFarol.bottom>rectParrafo.top && rectFarol.top < rectParrafo.bottom ){ /*3. cuando la parte de abajo del farol este mas baja que la parte de arriba del parrafo// 4. Cuando la parte de arriba del farol este antes de la parte de abajo del parrafo */
                            parrafo.classList.add("textoGris");
                        }
                    }

                    let mensajeDesvelado = document.querySelectorAll(".historiaSeccion p.textoGris, .historiaSeccionInversa p.textoGris");

                    if(mensajeDesvelado.length == parrafosHistoria.length){
                        mensajeOcultoLeido = true;
                        farol.src = "multimedia/imagenesMaría/Farol2.0.png";
                        farol.style.filter="drop-shadow(0em 0em 5em rgb(154, 3, 255))";
                        pista.textContent ="Oh vaya...pero que hacía esto debajo del agua...—Te entrega el antiguo farol que acabas de encontrar— Parece que los antiguos quieren que busquemos algo más alla de lo que nuestros ojos pueden ver.";
                    }    
                    
                }else  if(mensajeOcultoLeido == true){      /*Tendre que añadir una condicional para comprobar que tenemos el mensajeOcultoLeido desvelado para repetir esto*/           
                            /*Hago la misma estructura de antes en el for de parrafo, pero con palabras */
                            for(let palabra of palabrasOcultas){
                                const rectPalabra= palabra.getBoundingClientRect(); /*Vale y ahora tendre que establecer pues 1. cuando el lado derecho del farol haya pasado sobre el lado iz del parrafo// 2. Cuando el lado izq del farol esté antes que el lado derecho del p */
                                
                                if(rectFarol.right>rectPalabra.left && rectFarol.left<rectPalabra.right && rectFarol.bottom>rectPalabra.top && rectFarol.top < rectPalabra.bottom ){ /*3. cuando la parte de abajo del farol este mas baja que la parte de arriba del parrafo// 4. Cuando la parte de arriba del farol este antes de la parte de abajo del parrafo */
                                    palabra.classList.add("visible"); /*Y en lugar de texto, añado la clase visible */
                                    /*Quiero hacer que independientemente de la palabra que salga, se cambie la imagen del anciano por la trampilla*/
                                    
                                    if(trampillaActivada==false){
                                        trampillaActivada=true;
                                        resolviendo=true;
                                        pista.textContent= "La luz te ha guiado a través de las rocas y una trampilla parece haber aparecido ante ti"
                                        
                                        /*Cambiamos el anciano por el cryptex*/
                                        elGuia.src="multimedia/imagenesMaría/trampillaCryptex.png"; 
                                        elGuia.dataset.password="Draugr";
                                        pista.textContent= "Fijándote bien en la trampilla, te das cuenta que hay un cryptex.¿Qué palabra introducirás?";
                                        cryptex.style.display="flex";

                                    }
                                }
                            }
                            
                        }
            }
        })
    }



                /*Debe comprobarse la clave*/
               botonClave.addEventListener("click", function(){
                    let palabraIntroducida = clave.value;
                    let correcta = elGuia.dataset.password;
                    cryptex.style.display ="none";
                    if(palabraIntroducida == correcta){
                        pista.textContent = "Poco a poco, van abriendose las compuertas, parece que tienes algo especial, algo que los antiguos han visto en ti y te están guiando a que puedas salvarnos a todos de este oscuro maleficio";
                    } else {
                        pista.textContent = "Un temblor acecha y una oscuridad densa te rodea. Escuchas todo y nada a la vez, estás confuso, pero de pronto tu cuerpo se paraliza al ver un ser horripilante y pútrido. Con una risa despiadada termina con tu vida y la oscuridad se cierne en todo Almansa."
                    }
               })
    /*Como me ha salido guay, voy a intentar mejorar la animación de la capa de arriba, que ahora mismo, se raya*/
    /*Vale, nuevo problema, ahora lo que pasa es que se destacan todas las letras rojas a la vez y yo quiero que sea cuando
    pasamos el raton por encima. Me voy a basar un poco en mi ejemplo anterior de drag and drop */


    /*Quiero que aparezca el anciano al darle el boton */