var sign_in_form = document.getElementById("inicio-sesion-form");
var continuar_google = document.getElementById("continuar-google");
var continuar_facebook = document.getElementById("continuar-facebook");

function verifyClientSignIn(event) { 
    event.preventDefault();
    var correo = document.getElementById('correo');
    var contrasenha = document.getElementById('contrasenha');
    if (correo.value == "cliente01@outlook.com" && contrasenha.value == "U123456789") {
        console.log("LOG IN");
        window.location.href="../registro_sesion/registro_cuenta.html";
    }
    else {
        correo.value = "";
        contrasenha.value = "";
    }
}
function signInGoogle(event) {
    window.location.href="https://accounts.google.com/login?hl=es";
}
function signInFacebook(event) {
    window.location.href="https://es-la.facebook.com/login/device-based/regular/login/";
}

function verifySignIn(event) { 
    event.preventDefault();
    var correo = document.getElementById('correo');
    var contrasenha = document.getElementById('contrasenha');
    if (correo.value == "cliente01@outlook.com" && contrasenha.value == "U123456789") {
        console.log("LOG IN");
        window.location.href="../registro_sesion/registro_cuenta_cliente.html";
    }
    else {
        correo.value = "";
        contrasenha.value = "";
    }
}
sign_in_form.addEventListener('submit', verifySignIn);
continuar_google.addEventListener('click', signInGoogle);
continuar_facebook.addEventListener('click', signInFacebook);