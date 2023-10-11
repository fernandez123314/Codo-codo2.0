'use strict';

// Agrege un detector de eventos a múltiples elementos 
const addEventOnElements = (elements, eventType, callback) =>
  elements.forEach(element => element.addEventListener(eventType, callback));

// Encuentra los elementos necesarios para alternar la barra de navegación móvil
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Alternar la visibilidad de la barra de navegación móvil y la superposición asociada
const toggleNavbar = () => {
  [navbar, overlay, document.body].forEach(element => element.classList.toggle("active"));
};

// Agregue un detector de eventos de clic a todos los botones de alternancia de la barra de navegación móvil
addEventOnElements(navTogglers, "click", toggleNavbar);



// * HEADER
// * Header se activa cuando la ventana se desplaza hacia abajo a 100 píxeles
// */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
 if (window.scrollY > 100) {
   header.classList.add("active");
 } else {
   header.classList.remove("active");
 }
});



//validar Formulario

function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email === "") {
    alert("Por favor, ingrese su dirección de correo electrónico.");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return false;
  } else {
    alert("¡Correo registrado con éxito!"); 
    return true;
  }
}