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

