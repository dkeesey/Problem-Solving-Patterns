function power(number , exponent){
    if (exponent === 1) return number;
    if (exponent === 0) return 1;

    return number * power( number, exponent -1)
    
}

power(2,0); // 1
power(2,2) // 4
power(2,4) // 16