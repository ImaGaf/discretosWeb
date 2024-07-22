document.getElementById('busqueda').addEventListener('submit', function (event) {
    event.preventDefault();
    let textInput = document.getElementById('textInputBus').value;
    let searchInput = document.getElementById('searchInput').value;
    document.getElementById('textInputBus').value = '';
    document.getElementById('searchInput').value = '';

    let arr = textInput.split(",");

    let indice = busquedaLineal(arr, searchInput).index;
    if(indice == -1){
        
    }else{
        document.getElementById('listaBusqueda').textContent = `Lista Ingresada: ${arr}`;
        document.getElementById('indice').textContent = `El número ${searchInput} fue encontrado en el índice ${indice}`;
        cambiarPaginaBus(arr);
        llenarTablaBus(arr,searchInput);
    }
})

document.getElementById('regresarButtonBus').onclick = function(){
    document.getElementById('ingresoMainBusqueda').classList.toggle('hiddenBus');
    document.getElementById('resultadoBusqueda').classList.toggle('showBus');
}

function cambiarPaginaBus() {
    document.getElementById('ingresoMainBusqueda').classList.toggle('hiddenBus');
    document.getElementById('resultadoBusqueda').classList.toggle('showBus');
}

function llenarTablaBus(arr, target) {
    const num = arr.length;
    document.getElementById('Elemento1B').textContent = `${num}`;
    document.getElementById('Elemento2B').textContent = `${num}`;
    document.getElementById('Elemento3B').textContent = `${num}`;
    document.getElementById('Elemento4B').textContent = `${num}`;

    busquedaBinaria(arr, target);
    busquedaInterpolacion(arr, target);
    busquedaHashing(arr, target);
}

function busquedaLineal(arr, target) {
    let iteraciones = 0;
    let startTime = performance.now();
    
    for (let i = 0; i < arr.length; i++) {
        iteraciones++;
        if (arr[i] === target) {
            let endTime = performance.now();
            let executionTime = endTime - startTime
            document.getElementById('comparacion1B').textContent = `${iteraciones}`;
            document.getElementById('tiempo1B').textContent = `${executionTime.toFixed(4)} ms`;
            return {
                index: i,
            };
        }
    }
    return {
        index: -1,
    };
}

function busquedaBinaria(arr, target) {
    let iteraciones = 0;
    let startTime = performance.now();
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        iteraciones++;
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            let endTime = performance.now();
            let executionTime = endTime - startTime
            document.getElementById('comparacion2B').textContent = `${iteraciones}`;
            document.getElementById('tiempo2B').textContent = `${executionTime.toFixed(4)} ms`;
            return {
                index: mid
            };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    let endTime = performance.now();
    return {
        index: -1,
    };
}

function busquedaInterpolacion(arr, target) {
    let iteraciones = 0;
    let startTime = performance.now();
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        iteraciones++;
        if (low === high) {
            if (arr[low] === target) {
                let endTime = performance.now();
                let executionTime = endTime - startTime
                document.getElementById('comparacion3B').textContent = `${iteraciones}`;
                document.getElementById('tiempo3B').textContent = `${executionTime.toFixed(4)} ms`;
                return {
                    index: low,
                };
            }
            break;
        }

        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[pos] === target) {
            let endTime = performance.now();
            let executionTime = endTime - startTime
            document.getElementById('comparacion3B').textContent = `${iteraciones}`;
            document.getElementById('tiempo3B').textContent = `${executionTime.toFixed(4)} ms`;
            return {
                index: pos,
            };
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    let endTime = performance.now();
    return {
        index: -1,
    };
}

function busquedaHashing(arr, target) {
    let iteraciones = 0;
    let startTime = performance.now();

    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i]] = i;
    }

    iteraciones++;

    let endTime = performance.now();
    if (hashTable.hasOwnProperty(target)) {
        let executionTime = endTime - startTime
        document.getElementById('comparacion4B').textContent = `${iteraciones}`;
        document.getElementById('tiempo4B').textContent = `${executionTime.toFixed(4)} ms`;
        return {
            index: hashTable[target],
        };
    } else {
        return {
            index: -1,
        };
    }
}
