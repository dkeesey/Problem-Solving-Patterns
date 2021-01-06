

function countUniqueValues(arr){
    let i=0,j=1;
    while (j < arr.length){
        
        if (arr[i] === arr[j]){
            j += 1
            
        } 
                    
        if (arr[i] !== arr[j]){
            i+=1; 
            arr[i] = arr[j];
            j += 1;
            
        }
            
    }
    return i+1; 
}