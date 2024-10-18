 const hamburger = document.querySelector("#toggle-btn");

 hamburger.addEventListener("click",function(){
     document.querySelector("#sidebar").classList.toggle("expand");
    
    

});

// const hamburger = document.querySelector("#toggle-btn");
// const sidebar = document.querySelector("#sidebar");

// hamburger.addEventListener("click", function() {
//     if (sidebar.classList.contains("expand")) {
//         sidebar.style.opacity = 0;
//         setTimeout(() => {
//             sidebar.classList.toggle("expand");
//             sidebar.style.opacity = 1;
//         }, 250);  // el mimo tiempo a la duración de la trans
//     } else {
//         sidebar.classList.toggle("expand");
//         sidebar.style.opacity = 0;
//         setTimeout(() => {
//             sidebar.style.opacity = 1;
//         }, 10);  // el retraso para que se haga la transición
//     }
// });

