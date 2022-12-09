
Module['onRuntimeInitialized'] = () => {
    function setRandomArray(length, dataTypeDivisor){
        var arr = new Int32Array(length);
        for(var k = 0; k < length; k++){
            arr[k] = Math.floor(Math.random() * 100);
        }
        
        console.log("\nrandomly generated values from js")
        console.log(arr);
        
        var buf = Module._malloc(arr.byteLength);
    
        Module.HEAP32.set(arr, buf / dataTypeDivisor);
    
        sorter.setData(arrayLength);
    }
    
    function showCurrentArray(dataTypeDivisor){
        var dataAddress = (sorter.getDataPtr()/dataTypeDivisor);
        var dataLength = sorter.getDataLength();
        console.log(Module.HEAP32.subarray(dataAddress, dataAddress + dataLength))
    }
    
    var sorter = new Module.Sorter();
    
    const dataTypeDivisor = 4;
    
    console.log("Starting c++ values")
    showCurrentArray(dataTypeDivisor)
    
    var arrayLength = 100;
    var arr = new Int32Array(arrayLength);
    for(var k = 0; k < arrayLength; k++){
        arr[k] = Math.floor(Math.random() * 100);
    }
    
    console.log("\nrandomly generated js values")
    console.log(arr);
    
    var buf = Module._malloc(arr.byteLength);
    
    Module.HEAP32.set(arr, buf / dataTypeDivisor);
    
    sorter.setData(arrayLength);
    
    console.log("\nRandom values in c++")
    showCurrentArray(dataTypeDivisor)
    
    console.log("\nBubble sorted Values")
    sorter.bubbleSort();
    showCurrentArray(dataTypeDivisor)
}
