function solution(numbers) { //[ 1, 5, 10, 20 ], 
    let increasing = null; 
    let i = 0, j=1;
    
    
    while (i < numbers.length){
        if (numbers[i] < numbers [j]){
            i+=1;
            j+=1;
        } else {
            increasing = false; // not strictly incresing 
        }
        
    }
    increasing = true;
    
    
    return increasing; //boolean
}

console.log(solution([1, 5, 10, 20]));
