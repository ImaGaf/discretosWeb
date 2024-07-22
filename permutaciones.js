document.getElementById('calcFormPermu').addEventListener('submit', function (event) {
    event.preventDefault();

    const n = document.getElementById('nP').valueAsNumber;
    const r = document.getElementById('rP').valueAsNumber;

    let resultado;
    resultado = calculatarPermutaciones(n, r);
    document.getElementById('resultadoPermu').innerText = `Permutaciones (${n}P${r}): ${resultado}`;
});

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}


function calculatarPermutaciones(n, r) {
    return factorial(n) / factorial(n - r);
}
