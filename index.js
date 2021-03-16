'use strict';

// NavBar Stiky //
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbarr");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Desplegable Hamburguesa //
const hamburguesa = document.querySelector('.hamburguesa');
const navBarprincipal = document.querySelector('.navBar');
hamburguesa.addEventListener('click', function() {
    document.getElementById('navegacion').classList.toggle('show');
    document.getElementById('navBar').classList.toggle('show');
    hamburguesa.classList.toggle('toggle');
});

// Desplegable Actividades //
const flecha = document.querySelectorAll('.flecha');

flecha.forEach(e => {

    e.addEventListener('click', function(e){
        
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('show');
        padre.parentNode.children[1].classList.toggle('show');
    })

});

// Scroll Navegacion //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});