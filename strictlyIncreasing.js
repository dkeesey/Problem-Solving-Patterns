// const test = "why doesn't this work?"

const solution = function(arr) {
    // const arr = [...sequence]; 
    // console.log(arr);
    
    //test [1, 3, 2, 1] output false - can only remove 1 element and still be true
    //test [1, 3, 2 ] output true - remove 2 and [1,3] is true,  and remove 2 and [1,3] is true
    
    let removed = 0; 
    
    for (let x = 0; x < arr.length -2 ; x++) {
        y = x+1; z = x+2; 
        if (arr[x] < arr[y] && arr[y] < arr[z]){
            // console.log("true: removed is ", removed, ", arr[x] is ", arr[x], " , arr[y] is ", arr[y], " , arr[z] is ", arr[z]);
            // console.log("when x is ", x, ", x < y < z");
            continue
        } 
        if( arr[x] < arr[y] || arr[x] < arr[z] || arr[y] < arr[z]){
            // console.log("when x is ", x, ", x < y < z");
            removed += 1; 
            // console.log("true: removed is ", removed, ", arr[x] is ", arr[x], " , arr[y] is ", arr[y], " , arr[z] is ", arr[z]);
            continue; 
        } else {
            // console.log("true: removed is ", removed, ", arr[x] is ", arr[x], " , arr[y] is ", arr[y], " , arr[z] is ", arr[z]);
            return false;
        }
                 
    }
    if(removed > 1) {
        console.log("false: removed is: ", removed);
        return false; 
    }
    return true; 
    
}    

console.log("test 1: solution([1, 3, 2])", solution([1, 3, 2]));
console.log("test 2: solution([1, 3, 2, 1])", solution([1, 3, 2, 1]));   
// console.log(test)