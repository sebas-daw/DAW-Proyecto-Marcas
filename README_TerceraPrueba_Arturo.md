# proyecto-Marcas-Arturo
Lugar de pruebas de html, css y JS antes de subirlo al proyecto principal


18/02/26
Esto son los cambios que he subido al proyecto grupal

-- Finalmente, Mar se ocupa de la segunda prueba y yo me ocupo del html contacto

24/02/26
He consultado a chatGPT para el 
        <a href="#" class="volverArriba">↑</a> <!--a su debido momento se pondrá una imagen-->
y he visto que aqui puedo hacer JS para hacer que en determinado momento aparezca el boton.
Mientras tanto se quedará visible a la derecha.

08/03/2026
Buscando informacion sobre efectos animados en JavaScript, he descubierto que se hace en CSS con @Keyframes.
Dejo por aquí la explicación y el cómo funciona:

Estructura básica
@keyframes nombreAnimacion {
    0% {
        /* estado inicial */
    }

    50% {
        /* estado intermedio */
    }

    100% {
        /* estado final */
    }
}

Ejemplo simple
@keyframes cambiarColor {
    0% { color: red; }
    100% { color: yellow; }
} 
// empieza en rojo y termina en amarillo


Cómo se aplica a un elemento
h1 {
    animation: cambiarColor 2s infinite;
}
// Significa:
usa la animación cambiarColor, dura 2 segundos, infinite = se repite para siempre

En el caso del título llameante que he puesto:
.indice h1 {
    animation: fuego 1.5s infinite alternate;
}
// Dura 1.5 segundos, se repite siempre (infinite) y va alternando (alternate)