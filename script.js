const contenedor_menu=document.getElementById("contenedor_menu");
const contenedor_extra=document.getElementById("contenedor_extra");
const menu=document.getElementById("menu");
const extra=document.getElementById("extra");


function anchoPagina(){

    if (window.innerWidth<900){
        if (contenedor_menu.classList.contains('is-active')) {
            contenedor_menu.addEventListener('click', hideShow);
        } else {contenedor_menu.addEventListener('click', hideShow);}


        if (contenedor_menu.classList.contains('is-active')) {
            contenedor_extra.addEventListener('click', hideShow2);
        } else {contenedor_extra.addEventListener('click', hideShow2);}
    } 
}       





function hideShow() {
    extra.style.display="none";
    if (contenedor_menu.classList.contains('is-active')) {
        contenedor_menu.classList.remove('is-active');
        menu.style.display="none";   
    } else {
        contenedor_menu.classList.add('is-active');
        contenedor_extra.classList.remove('is-active');
        menu.style.display="grid";
    }
    anchoPagina();
}

function hideShow2() {
    menu.style.display="none";
    if (contenedor_extra.classList.contains('is-active')) {
        contenedor_extra.classList.remove('is-active');
        extra.style.display="none";       
    } else {
        contenedor_extra.classList.add('is-active');
        contenedor_menu.classList.remove('is-active');
        extra.style.display="grid"; 
    }
    anchoPagina();
}

anchoPagina();

