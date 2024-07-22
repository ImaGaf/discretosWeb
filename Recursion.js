document.getElementById('factorialButton').onclick = function() {
  event.preventDefault();
  let num = parseInt(document.getElementById('inputRecursividad').value);
  if (isNaN(num)) {
    alert('Por favor, introduce un número válido.');
    return;
  }
  let factResult = factorial(num);
  document.getElementById('inputRecursividad').value = '';
  document.getElementById('resultadoRecursividad').textContent = `El factorial del número ${num} es: ${factResult}`;
}

document.getElementById('fibonacciButton').onclick = function() {
  event.preventDefault();
  let num = parseInt(document.getElementById('inputRecursividad').value);
  if (isNaN(num)) {
    alert('Por favor, introduce un número válido.');
    return;
  }
  let fibResult = fibonacci(num);
  document.getElementById('inputRecursividad').value = '';
  document.getElementById('resultadoRecursividad').textContent = `El número de Fibonacci en la posición ${num} es: ${fibResult}`;
}

// Función recursiva para calcular el factorial de un número
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Función recursiva para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mostrar el menú y manejar la entrada del usuario
function showMenu() {
  console.log(" \n");
  console.log("-------- Ejemplos de Recursión --------\n");
  console.log("Elija una opción:");
  console.log("1. Calcular Factorial");
  console.log("2. Calcular Número de Fibonacci");

  rl.question("Ingrese una opción: ", (option) => {
    if (option === '1') {
      rl.question("Ingrese un número para calcular su factorial: ", (input) => {
        const n = parseInt(input);
        if (!isNaN(n) && n >= 0) {
          console.log(`El factorial de ${n} es: ${factorial(n)}`);
        } else {
          console.log("Ingrese un número entero no negativo por favor.");
        }
        rl.close();
      });
    } else if (option === '2') {
      rl.question("Ingrese un número para calcular el n-ésimo número de Fibonacci: ", (input) => {
        const n = parseInt(input);
        if (!isNaN(n) && n >= 0) {
          console.log(`El número de Fibonacci en la posición ${n} es: ${fibonacci(n)}`);
        } else {
          console.log("Ingrese un número entero no negativo por favor. ");
        }
        rl.close();
      });
    } else {
      console.log("Opción no válida. Por favor, elija 1 o 2.");
      rl.close();
    }
  });
}

showMenu();*/
