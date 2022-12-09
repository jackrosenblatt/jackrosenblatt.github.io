function output(msg){
    var output = document.getElementById("output");

    output.innerHTML += '<p>'+ msg +'</p>'
}

function outputData(arr){
    var divisor = 50;
    var data = document.getElementById("data");

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

function setRandomArray(length, dataTypeDivisor){
    var arr = new Int32Array(length);
    for(var k = 0; k < length; k++){
        arr[k] = Math.floor(Math.random() * 100);
    }
    
    output("randomly generated values from js")
    outputData(arr);
    
    var buf = Module._malloc(arr.byteLength);

    Module.HEAP32.set(arr, buf / dataTypeDivisor);

    sorter.setData(arrayLength);
}

const arrayLength = 1000;

Module['onRuntimeInitialized'] = () => {
    
    document.getElementById("loadData").onclick = () => {
        var arr = new Int32Array(arrayLength);
        for(var k = 0; k < arrayLength; k++){
            arr[k] = Math.floor(Math.random() * 100);
        }

        outputData(arr);
        
        var buf = Module._malloc(arr.byteLength);
        
        Module.HEAP32.set(arr, buf / dataTypeDivisor);
        
        sorter.setData(arrayLength);
        
        output("\nRandom values in c++")
        showCurrentArray(dataTypeDivisor)
    }

    document.getElementById("bubbleSort").onclick = () => {
        sorter.bubbleSort();
        showCurrentArray(dataTypeDivisor)
        output("Bubble Sort Complete")
    }

    document.getElementById("insertionSort").onclick = () => {
        sorter.insertionSort();
        showCurrentArray(dataTypeDivisor)
        output("Insertion Sort Complete")
    }

    document.getElementById("mergeSort").onclick = () => {
        sorter.mergeSort();
        showCurrentArray(dataTypeDivisor)
        output("Merge Sort Complete")
    }
    
    function showCurrentArray(dataTypeDivisor){
        var dataAddress = (sorter.getDataPtr()/dataTypeDivisor);
        var dataLength = sorter.getDataLength();
        outputData(Module.HEAP32.subarray(dataAddress, dataAddress + dataLength))
    }
    
    var sorter = new Module.Sorter();
    
    const dataTypeDivisor = 4;
}