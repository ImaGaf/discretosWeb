document.getElementById('calcFormPermu').addEventListener('submit', function (event) {
    event.preventDefault();

    const n = document.getElementById('nP').valueAsNumber;
    const r = document.getElementById('rP').valueAsNumber;

    let resultado;
    resultado = calcularPermutaciones(n, r);
    document.getElementById('resultadoPer').innerText = `Permutaciones (${n}P${r}): ${resultado}`;
});

document.getElementById('calcForm2').addEventListener('submit', function (event) { 
    event.preventDefault();
    
    const n2 = document.getElementById('n2').valueAsNumber;
    
    let resultado2;
    resultado2 = factorial(n2);
    document.getElementById('resultado2').innerText = `Permutaciones sin repetición (P${n2}): ${resultado2}`; 
});

document.getElementById('calcForm3').addEventListener('submit', function (event) { 
    event.preventDefault();
    
    const n3 = document.getElementById('n3').valueAsNumber;
    const nt = n3 - 1;
    
    let resultado3;
    resultado3 = factorial(nt);
    document.getElementById('resultado3').innerText = `Permutaciones Circulares (P${nt}): ${resultado3}`; 
});

document.getElementById('calcForm4').addEventListener('submit', function (event) { 
    event.preventDefault();
    
    const n4 = document.getElementById('n4').valueAsNumber;
    const a4 = document.getElementById('a4').valueAsNumber;
    const b4 = document.getElementById('b4').valueAsNumber;
    
    let resultado4;
    resultado4 = calcularPermutacionesConRepeticion(n4, a4, b4);
    document.getElementById('resultado4').innerText = `Permutaciones con repetición: ${resultado4}`; 
});

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function calcularPermutaciones(n, r) {
    return factorial(n) / factorial(n - r);
}

function calcularPermutacionesConRepeticion(n, a, b) {
    return factorial(n) / (factorial(a) * factorial(b));
}
