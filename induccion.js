
document.getElementById('induccionButton').onclick = function() {
  event.preventDefault();
  let num = parseInt(document.getElementById('inputInduccion').value);
  if (isNaN(num)) {
    alert('Por favor, introduce un número válido.');
    return;
  }
  let sum = sumNumerosNaturales(num);
  document.getElementById('inputInduccion').value = '';
  document.getElementById('resultadoInduccion').textContent = `La suma de los primeros ${num} números naturales es: ${sum}`;
}


function sumNumerosNaturales(n) {
  if (n === 1) { // Caso base: si n es 1, retornamos 1
    return 1;
  } else { // Caso recursivo: n + suma de los primeros (n-1) números naturales
    return n + sumNumerosNaturales(n - 1);
  }
}




/*
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número por favor: ", (numero) => {
  const n = parseInt(numero);

  if (n > 0) { 
    console.log(`La suma de los primeros ${n} números naturales es: ${sumNumerosNaturales(n)}`);
  } else {
    console.log("Por favor, ingresa un número válido mayor que 0.");
  }

  rl.close(); 
});
*/