/* SELECTOR */
const btnMobile = document.querySelector('[data-btn-mobile]');

/* Functions */

function toggleMenu(e){
    const nav = document.querySelector('[data-nav]');
    /* Toggle adiciona quando nao tem remove quando tem */
    nav.classList.toggle("active");
    /* contains vai checar ou se existe a classe que eu passei pra ele , ele retorna um bolean */
    const active = nav.classList.contains("active");
    
    if(e.type === "touchstart"){
        /* Para desativar a resposta do touchstart */
        e.preventDefault();
    }
 /* Aria-expanded ele vai ajudar na acessibilidade da pagina */
    e.currentTarget.setAttribute("aria-expanded",active); 
}

/* Events */
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


