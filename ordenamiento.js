
document.getElementById('ordenamiento').addEventListener('submit', function (event) {
    event.preventDefault();
    let textInput = document.getElementById('textInput').value;
    document.getElementById('textInput').value = '';
    let arr = textInput.split(",").map(Number);
    if(!isArrayNumeric(arr)){
        alert('Por favor, introduzca una cadena de solo numeros.');
    }else{
        cambiarPagina(arr);
        llenarTabla(arr);
    }
})

function isArrayNumeric(array) {
    return array.every(item => typeof item === 'number' && !isNaN(item));
}

document.getElementById('regresarButton').onclick = function(){
    document.getElementById('ingresoMain').classList.toggle('hiddenIngre');
    document.getElementById('resultado').classList.toggle('showOrde');
}

function cambiarPagina(arr) {
    document.getElementById('ingresoMain').classList.toggle('hiddenIngre');
    document.getElementById('resultado').classList.toggle('showOrde');
    
    document.getElementById('listaIngresada').textContent = `Lista Ingresada: ${arr}`;
    let orderArray = bubbleSort(arr);
    document.getElementById('listaOrdenada').textContent = `Lista Ordenada: ${bubbleSort(orderArray)}`;
}

function llenarTabla(arr) {
    const num = arr.length;
    document.getElementById('Elemento1').textContent = `${num}`;
    document.getElementById('Elemento2').textContent = `${num}`;
    document.getElementById('Elemento3').textContent = `${num}`;
    document.getElementById('Elemento4').textContent = `${num}`;
    document.getElementById('Elemento5').textContent = `${num}`;
    document.getElementById('Elemento6').textContent = `${num}`;
    document.getElementById('Elemento7').textContent = `${num}`;

    bubbleSort(arr);
    insertionSort(arr);
    selectionSort(arr);
    quickSortMetrics(arr);
    mergeSortMetrics(arr);
    shellSortMetrics(arr);
    heapSortMetrics(arr);
}

function bubbleSort(arr) {
    let nun = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let startTime = performance.now();

    for (let i = 0; i < nun - 1; i++) {
        for (let j = 0; j < nun - i - 1; j++) {
            comparisons++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps++;
            }
        }
    }
    let endTime = performance.now();
    let executionTime = (endTime - startTime);

    document.getElementById('comparacion1').textContent = `${comparisons}`;
    document.getElementById('cambio1').textContent = `${swaps}`;
    document.getElementById('tiempo1').textContent = `${executionTime.toFixed(4)} ms`;
    return arr;
}

function insertionSort(arr) {
    let comparisons = 0;
    let swaps = 0;
    let startTime = performance.now();

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            comparisons++;
            arr[j + 1] = arr[j];
            j--;
            swaps++;
        }
        swaps++;
        comparisons++;
        arr[j + 1] = key;
    }
    let endTime = performance.now();
    let executionTime = endTime - startTime;

    document.getElementById('comparacion2').textContent = `${comparisons}`;
    document.getElementById('cambio2').textContent = `${swaps}`;
    document.getElementById('tiempo2').textContent = `${executionTime.toFixed(4)} ms`;
}

function selectionSort(arr) {
    let comparisons = 0;
    let swaps = 0;
    let startTime = performance.now();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            comparisons++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            swaps++;
        }
    }
    let endTime = performance.now();
    let executionTime = endTime - startTime;

    document.getElementById('comparacion3').textContent = `${comparisons}`;
    document.getElementById('cambio3').textContent = `${swaps}`;
    document.getElementById('tiempo3').textContent = `${executionTime.toFixed(4)} ms`;
}

function quickSort(arr, left, right, metrics) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right, metrics);
        quickSort(arr, left, pivotIndex - 1, metrics);
        quickSort(arr, pivotIndex + 1, right, metrics);
    }
}

function partition(arr, left, right, metrics) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        metrics.comparisons++; 
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            metrics.swaps++; 
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    metrics.swaps++; 

    return i + 1;
}

function quickSortMetrics(arr) {
    let metrics = {
        comparisons: 0,
        swaps: 0
    };

    let startTime = performance.now(); 
    quickSort(arr, 0, arr.length - 1, metrics);
    let endTime = performance.now(); 
    let executionTime = endTime - startTime;

    document.getElementById('comparacion4').textContent = `${metrics.comparisons}`;
    document.getElementById('cambio4').textContent = `${metrics.swaps}`;
    document.getElementById('tiempo4').textContent = `${executionTime.toFixed(4)} ms`;
}

function mergeSort(arr, metrics) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left, metrics),
        mergeSort(right, metrics),
        metrics
    );
}

function merge(left, right, metrics) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        metrics.comparisons++;
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
        metrics.swaps++; 
    }
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    metrics.swaps += (left.length - leftIndex) + (right.length - rightIndex);

    return result;
}

function mergeSortMetrics(arr) {
    let metrics = {
        comparisons: 0,
        swaps: 0
    };

    let startTime = performance.now(); 
    const sortedArray = mergeSort(arr, metrics);
    let endTime = performance.now(); 

    let executionTime = endTime - startTime;

    document.getElementById('comparacion5').textContent = `${metrics.comparisons}`;
    document.getElementById('cambio5').textContent = `${metrics.swaps}`;
    document.getElementById('tiempo5').textContent = `${executionTime.toFixed(4)} ms`;    
}

function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);
    let comparisons = 0;
    let swaps = 0;

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                comparisons++; 
                arr[j] = arr[j - gap];
                j -= gap;
                swaps++; 
            }
            comparisons++;
            arr[j] = temp;
            swaps++; 
        }
        gap = Math.floor(gap / 2);
    }

    return { sortedArray: arr, comparisons, swaps };
}

function shellSortMetrics(arr) {
    let startTime = performance.now();
    let result = shellSort(arr);
    let endTime = performance.now(); 

    let executionTime = endTime - startTime; 
    document.getElementById('comparacion6').textContent = `${result.comparisons}`;
    document.getElementById('cambio6').textContent = `${result.swaps}`;
    document.getElementById('tiempo6').textContent = `${executionTime.toFixed(4)} ms`;  
    return result;
}

function heapify(arr, n, i, metrics) {
    let largest = i; 
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    metrics.comparisons++;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    metrics.comparisons++;
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        metrics.swaps++;
        heapify(arr, n, largest, metrics);
    }
}

function heapSort(arr) {
    let n = arr.length;
    let metrics = {
        comparisons: 0,
        swaps: 0
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, metrics);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        metrics.swaps++;
        heapify(arr, i, 0, metrics);
    }

    return metrics;
}

function heapSortMetrics(arr) {
    let startTime = performance.now();
    let metrics = heapSort(arr);
    let endTime = performance.now(); 

    let executionTime = endTime - startTime; 
    document.getElementById('comparacion7').textContent = `${metrics.comparisons}`;
    document.getElementById('cambio7').textContent = `${metrics.swaps}`;
    document.getElementById('tiempo7').textContent = `${executionTime.toFixed(4)} ms`;  
}