document.getElementById('calcForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const n = document.getElementById('n').valueAsNumber;
    const r = document.getElementById('r').valueAsNumber;

    let resultado;

    resultado = calculatarCombinaciones(n, r);
    document.getElementById('resultadoCombi').textContent = `Combinaciones (${n}C${r}): ${resultado}`;
});

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function calculatarCombinaciones(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}


