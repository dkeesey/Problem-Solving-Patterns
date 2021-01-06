//given an array of string or number values, return the number of unique values 

function countUniqueValues(arr){
    let i=0; // i is the pointer for unique values
    let j=1; // j is the pointer for moving down the next array value to test
   
   // j points to the array index we are testing; it stops when equal to arr.length
    while (j < arr.length){
        
        //if arr[i] === arr[j], then they are the same; advance j and continue 
        if (arr[i] === arr[j]){
            j += 1
        } 
        
        //if arr[i] !== arr[j], then increment i index and set value to the unique value at arr[j]
        if (arr[i] !== arr[j]){
            i += 1; 
            arr[i] = arr[j];
            j += 1;
            
        }
            
    }

    //returns the i (index value) which because it starts at zero, should have 1 added
    return i+1; 
}