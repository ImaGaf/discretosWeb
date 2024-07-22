document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('inicio').classList.add('showIni');
});

document.getElementById('inicioNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('inicio').classList.add('showIni');
}

document.getElementById('ordenamientoNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('ordenamiento').classList.add('showOrde');
}

document.getElementById('busquedaNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('busqueda').classList.add('showBus');
}

document.getElementById('recursionNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('recursion').classList.add('showRecu');
}

document.getElementById('induccionNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('induccion').classList.add('showInduc');
}

document.getElementById('permutacionNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('permutacion').classList.add('showPermu');
}

document.getElementById('combinacionNav').onclick = function () {
    event.preventDefault();
    remove();
    document.getElementById('combinacion').classList.add('showCombi');
}

function remove(){
    document.getElementById('ordenamiento').classList.remove('showOrde');
    document.getElementById('ordenamiento').classList.add('ordenamiento'); 

    document.getElementById('busqueda').classList.remove('showBus');
    document.getElementById('busqueda').classList.add('busqueda');

    document.getElementById('recursion').classList.remove('showRecu');
    document.getElementById('recursion').classList.add('recursion');

    document.getElementById('induccion').classList.remove('showInduc');
    document.getElementById('induccion').classList.add('induccion'); 

    document.getElementById('permutacion').classList.remove('showPermu');
    document.getElementById('permutacion').classList.add('permutacion'); 

    document.getElementById('combinacion').classList.remove('showCombi');
    document.getElementById('combinacion').classList.add('combinacion');

    document.getElementById('inicio').classList.remove('showIni');
    document.getElementById('inicio').classList.add('inicio');
}