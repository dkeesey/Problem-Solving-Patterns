function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

factorial(5);
factorial(10);
factorial(-1);
factorial(-3);