// Ejecuta la función scrollFunction cada vez que se hace scroll en la página
window.onscroll = function() {
    scrollFunction();
};

// Función para mostrar u ocultar el botón de "volver al inicio" dependiendo de la posición del scroll
function scrollFunction() {
    const btnScrollTop = document.getElementById("btnScrollTop");
    // Si el usuario ha hecho scroll hacia abajo más de 20px, muestra el botón
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        // Si no, oculta el botón
        btnScrollTop.style.display = "none";
    }
}

// Cuando se hace clic en el botón, llevar la página al inicio
document.getElementById("btnScrollTop").onclick = function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};
