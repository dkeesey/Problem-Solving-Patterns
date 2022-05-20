function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
factorial(5);
factorial(10);
// factorial(-1);
// factorial(-3);
factorial(0);
