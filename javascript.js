function validarNombre() {
    let nombreIncorrecto = false;
    var nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        alert("Nombre vacío");
        nombreIncorrecto = true;
    }
    return nombreIncorrecto;
}
function validarApellido() {
    let apellidoIncorrecto = false;
    var apellido = document.getElementById("apellidos");
    if (apellido.value == "") {
        alert("Apellidos vacio");
        apellidoIncorrecto = true;
    }
    return apellidoIncorrecto;
}
function validarCorreo() {
    let correoIncorrecto = false;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var correo = document.getElementById("correo");
    if (correo.value == "") {
        alert("Correo vacio");
        correoIncorrecto = true;
    } else if (!emailRegex.test(correo.value)) {
        alert("Correo no valido.");
        correoIncorrecto = true;
    }
    return correoIncorrecto;
}
function validarNombreUs() {
    let nombreIncorrecto = false;
    var nombre = document.getElementById("nombreUs");
    if (nombre.value == "") {
        alert("Nombre usuario vacío");
        nombreIncorrecto = true;
    }
    return nombreIncorrecto;
}

function validar() {
    let testBoolean = false;
    if (validarNombre()) {
        testBoolean = true;
    } else if (validarApellido()) {
        testBoolean = true;
    } else if (validarCorreo()) {
        testBoolean = true;
    }else if (validarNombreUs()) {
        testBoolean = true;
    }
    if (testBoolean == false) {
        alert("Se ha dado de alta correctamente al usuario");
    }else if(validarDNI()){
        testBoolean = true;
    }
}


