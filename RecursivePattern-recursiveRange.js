// Accepts a number and adds up all the numbers from 0 to the number passed to the function
//
// SAMPLE INPUT/OUTPUT
// recursiveRange(0) // 0
// recursiveRange(1) // 1
// recursiveRange(2) // 3
// recursiveRange(3) // 6
// recursiveRange(4) // 10
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
    if(num === 0) { return 0 }
    if(num === 1) { return 1 }
    return num + recursiveRange(num-1);
    
}

