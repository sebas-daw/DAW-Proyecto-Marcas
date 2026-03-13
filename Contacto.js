//validar formulario
const formulario = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //para evitar que se envíe el formulario antes de que se complete la función.

    //para elimnar espacios en blanco innecesarios
    let nombreValor = nombre.value.trim();
    let emailValor = email.value.trim();
    let mensajeValor = editorMensaje.innerText.trim();

    if (nombreValor === "" || nombreValor.length < 4) {
        alert("Por favor, introduce tu nombre.");
        return;
    }

    if (emailValor === "" || !emailValor.includes("@")) {
        alert("Por favor, introduce un email válido.")
        return;
    }

    if (mensajeValor.length < 10) {
        alert("El mensaje debe de tener al menos 10 carácteres.");
        return;
    }

    /*busca el elemento input con el atributo y valor que tenga entre la llave*/
    document.querySelector("input[name='mensaje']").value = editorMensaje.innerHTML;

    alert("Mensaje enviado correctamente. Gracias por tu colaboración ;)");

    formulario.submit(); //si la función no se ha roto a medio proceso, se envía el formulario.
});

//Seleccionar estilo para el texto
const editorMensaje = document.getElementById("editorMensaje");
const botonNegrita = document.getElementById("btn-negrita");
const botonCursiva = document.getElementById("btn-cursiva");
const botonSubrayado = document.getElementById("btn-subrayado");

editorMensaje.addEventListener("click", () => {
    if (!editorMensaje.dataset.editado) {
        editorMensaje.innerHTML = "";
        editorMensaje.dataset.editado = "true";
    }
});

/*excComand() es un metodo JS que permite ejecutar comandos de edicion dentro de un 
elemento editable*/

botonNegrita.addEventListener("click", () => {
    document.execCommand("bold"); 
});

botonCursiva.addEventListener("click", () => {
    document.execCommand("italic");
});

botonSubrayado.addEventListener("click", () => {
    document.execCommand("underline");
});