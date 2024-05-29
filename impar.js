let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)

function esimPar(numero) {
return numero % 2 !== 0;
}

function verMensaje(){
let valor = document.getElementById('numero').value;
let resultado = document.getElementById('resultado');
let mensaje = '';

if (esimPar(valor)) {
mensaje = 'El numero ingresado es impar';
} else {
mensaje = 'El numero ingresado no es impar';
}

resultado.textContent = mensaje;
}