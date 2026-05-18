// MENU HAMBURGUESA

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// EFECTO NAVBAR AL HACER SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "#06111f";
    }else{
        header.style.background = "#0d1b2a";
    }

});

// VALIDACION DEL FORMULARIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    let errorNombre = document.getElementById("errorNombre");
    let errorEmail = document.getElementById("errorEmail");
    let errorMensaje = document.getElementById("errorMensaje");

    let success = document.getElementById("success");

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    success.textContent = "";

    let valido = true;

    if(nombre === ""){
        errorNombre.textContent = "Ingrese su nombre";
        valido = false;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        errorEmail.textContent = "Ingrese su correo";
        valido = false;
    }else if(!regexEmail.test(email)){
        errorEmail.textContent = "Correo inválido";
        valido = false;
    }

    if(mensaje === ""){
        errorMensaje.textContent = "Ingrese el destino turístico";
        valido = false;
    }

    if(valido){

        success.textContent =
        "Reserva enviada correctamente. Nos comunicaremos pronto.";

        formulario.reset();
    }

});