//  const hamburger = document.querySelector("#toggle-btn");

//  hamburger.addEventListener("click",function(){
//      document.querySelector("#sidebar").classList.toggle("expand");
    
    

// });

const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click", function () {
    // Detectamos el tamaño de la pantalla
    if (window.innerWidth > 1024) {
        // Solo permitimos expandir el sidebar en pantallas mayores a 1024px
        document.querySelector("#sidebar").classList.toggle("expand");
    }
});

AOS.init({
    duration: 800, // Duración de la animación en milisegundos
    easing: 'ease-in-out', // Tipo de animación para entrada y salida
    once: true, // Si es true, la animación ocurre solo una vez cuando el elemento aparece en pantalla
    offset: 120, // Distancia desde la cual comienza la animación (en píxeles)
});
