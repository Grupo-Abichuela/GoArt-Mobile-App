var sign_in_form = document.getElementById("inicio-sesion-form");
var continuar_google = document.getElementById("continuar-google");
var continuar_facebook = document.getElementById("continuar-facebook");
var notifications = document.querySelectorAll(".alert_item");
var close_btns = document.querySelectorAll(".close");

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
function registerGoogle(event) {
    window.location.href="https://accounts.google.com/login?hl=es";
}
function registerFacebook(event) {
    window.location.href="https://es-la.facebook.com/login/device-based/regular/login/";
}

function verifyRegister(event) { 
    event.preventDefault();
    var correo = document.getElementById('correo');
    var nombre = document.getElementById('nombre');
    var contrasenha = document.getElementById('contrasenha');
    var correos_reg = ["cliente01@outlook.com", "cliente02@outlook.com", "cliente03@outlook.com"];
    for (var i = 0; i < correos_reg.length; i++) { 
        console.log(correos_reg[i], correo.value);
        if (correos_reg[i] == correo.value) {
		    notifications[0].style.top = "50%";
            return false;
        }
    }
    correos_reg.push(correo);
    notifications[1].style.top = "50%";
    return true;
}

close_btns.forEach(function(close, close_index){
    close.addEventListener("click", function(){
        notifications.forEach(function(notification){
            notification.style.top = "-100%";
        })
    })
})

sign_in_form.addEventListener('submit', verifyRegister);
continuar_google.addEventListener('click', registerGoogle);
continuar_facebook.addEventListener('click', registerFacebook);