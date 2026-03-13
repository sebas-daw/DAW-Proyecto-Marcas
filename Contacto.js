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
    let mensajeValor = mensaje.value.trim();

    if(nombreValor === "" || nombreValor.length < 4){
        alert("Por favor, introduce tu nombre.");
        return;
    }

    if(emailValor ==="" || !emailValor.includes("@")){
        alert("Por favor, introduce un email válido.")
        return;
    }

    if(mensajeValor.length < 10){
        alert("El mensaje debe de tener al menos 10 carácteres.");
        return;
    }

    alert("Mensaje enviado correctamente. Gracias por tu colaboración ;)");
    
    formulario.submit(); //si la función no se ha roto a medio proceso, se envía el formulario.
});