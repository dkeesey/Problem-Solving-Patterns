function factorial(num){
    if (num===0 ||num===1) { return 1 }  //base case num is 0 or 1
    return num * factorial(num-1); 
}

factorial(5)
