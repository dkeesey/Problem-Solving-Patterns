function productOfArray(arr){
    let product = 0;    //initialize accumulator
    
    function getProduct(arr) {
        if (arr.length === 0) { return }
        product = arr[0]; //assign 0th value to accumulator 
        for(let i = 1; i < arr.length; i++){
            product *= arr[i];  // multiply accumulator by next array value
        }
    }
    
    getProduct(arr);
    
    return product; 
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
