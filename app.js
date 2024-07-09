let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];

function asignarTextoElemento (elemento, texto){
    let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
return;
}

function verificarIntento() {
    alert ('Click desde el boton');
    return;
    
}

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
   if (numeroDeUsuario === numeroSecreto){

       asignarTextoElemento ('p','Asertaste el numero en ${intentos} ${intentos === 1 }')
       document.getElementById ('reiniciar').removeAttribute('disabled');
} else {
 if(numeroDeUsuario < numeroSecreto)
    asignarTextoElemento('p', 'El numero es mayor')
} 
else {
    asignarTextoElemento('p', 'El numero es menor')
}
    intentos ++;
    return;
    
}
function limpiarcaja() {
   let valorCaja =  document.querySelector('#valorUsuario');
   valorCaja.value = '';

    
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumeroSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
function condicionesInicales() {
 asignarTextoElemento ('h1','Juego del numero secreto')
asignarTextoElemento('p','indica un numero del 1 al 100')
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}
function reinicarJuego() {
    limpiarcaja();
    condicionesInicales();
    document.querySelector('#reiniciar').setAttribute('disable','true');

    
}
condicionesInicales();

