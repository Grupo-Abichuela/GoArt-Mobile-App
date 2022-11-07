var sign_in_form = document.getElementById("inicio-sesion-form");
var continuar_google = document.getElementById("continuar-google");
var continuar_twitter = document.getElementById("continuar-twitter");
var notifications = document.querySelectorAll(".alert_item");
var close_btns = document.querySelectorAll(".close");

console.log(notifications)

function verifyClientSignIn(event) { 
    event.preventDefault();
    var correo = document.getElementById('correo');
    var contrasenha = document.getElementById('contrasenha');
    if (correo.value == "cliente01@outlook.com" && contrasenha.value == "u123456789") {
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
function signInTwitter(event) {
    window.location.href="https://twitter.com/login";
}

function verifySignIn(event) { 
    event.preventDefault();
    var correo = document.getElementById('correo');
    var contrasenha = document.getElementById('contrasenha');
    if (correo.value == "cliente01@outlook.com" && contrasenha.value == "123456789") {
        console.log("LOG IN");
        window.location.href="../../inicio/inicio.html";
    }
    else {
        correo.value = "";
        contrasenha.value = "";
		notifications[0].style.top = "50%";
    }
}

close_btns.forEach(function(close, close_index){
    close.addEventListener("click", function(){
        notifications.forEach(function(notification){
            notification.style.top = "-100%";
        })
    })
})

sign_in_form.addEventListener('submit', verifySignIn);
continuar_google.addEventListener('click', signInGoogle);
continuar_twitter.addEventListener('click', signInTwitter);