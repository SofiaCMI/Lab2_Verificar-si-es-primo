let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)

function esprimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero !== 1;
    }

function verMensaje(){
let valor = document.getElementById('numero').value;
let resultado = document.getElementById('resultado');
let mensaje = '';

if (esprimo(valor)) {
mensaje = 'El numero ingresado es primo';
} else {
mensaje = 'El numero ingresado no es primo';
}

resultado.textContent = mensaje;
}