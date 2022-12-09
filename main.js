function output(msg){
    var output = document.getElementById("output");

    output.innerHTML += msg +'\n'
}

const divisor = 25;

function outputUnsortedData(arr){
    var data = document.getElementById("unsortedData");

    var inner = "";

    for(var k = 0; k < arr.length / divisor; k++){
        inner += '<tr>'
        for(var j = 0; j < divisor; j++){
            inner += '<td>'+arr[k*divisor + j]+'</td>';
        }

        inner += '</tr>'
    }

    data.innerHTML = inner;
}

function outputSortedData(arr){
    var data = document.getElementById("sortedData");

    console.log(arr)

    var inner = "";

    data.innerHTML = inner;

    for(var k = 0; k < arr.length / divisor; k++){
        inner += '<tr>'
        for(var j = 0; j < divisor; j++){
            inner += '<td>'+arr[k*divisor + j]+'</td>';
        }

        inner += '</tr>'
    }

    data.innerHTML = inner;
}

function setArray(sorter, arr, dataTypeDivisor){
    var buf = Module._malloc(arr.byteLength);

    Module.HEAP32.set(arr, buf / dataTypeDivisor);

    sorter.setData(arrayLength);
}

function getRandomArray(length){
    var arr = new Int32Array(length);
    for(var k = 0; k < length; k++){
        arr[k] = Math.floor(Math.random() * 100);
    }
    
    output("Randomly generated values from js")
    outputUnsortedData(arr);

    return arr;
}

const arrayLength = 500;
var currentArr;

Module['onRuntimeInitialized'] = () => {
    
    document.getElementById("loadData").onclick = () => {
        currentArr = getRandomArray(arrayLength)
        setArray(sorter, currentArr, 4);
    }

    document.getElementById("bubbleSort").onclick = () => {
        var t0 = performance.now();
        sorter.bubbleSort();
        var t1 = performance.now();

        showCurrentArray(dataTypeDivisor)
        output("Bubble Sort Complete, took:\t\t"+((t1-t0)/1000).toFixed(4)+" seconds")
        setArray(sorter, currentArr, 4);
    }

    document.getElementById("insertionSort").onclick = () => {
        var t0 = performance.now();
        sorter.insertionSort();
        var t1 = performance.now();

        showCurrentArray(dataTypeDivisor)
        output("Insertion Sort Complete, took:\t"+((t1-t0)/1000).toFixed(4)+" seconds")
        setArray(sorter, currentArr, 4);
    }

    document.getElementById("mergeSort").onclick = () => {
        var t0 = performance.now();
        sorter.mergeSort();
        var t1 = performance.now();
        
        showCurrentArray(dataTypeDivisor)
        output("Merge Sort Complete, took:\t\t"+((t1-t0)/1000).toFixed(4)+" seconds")
        setArray(sorter, currentArr, 4);
    }
    
    function showCurrentArray(dataTypeDivisor){
        var dataAddress = (sorter.getDataPtr()/dataTypeDivisor);
        var dataLength = sorter.getDataLength();
        outputSortedData(Module.HEAP32.subarray(dataAddress, dataAddress + dataLength))
    }
    
    var sorter = new Module.Sorter();
    
    const dataTypeDivisor = 4;
}