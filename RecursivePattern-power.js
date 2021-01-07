function power(number , power){
    let accumulator = number;
    if (power === 0) return 1;
    if (power === 1) return accumulator;

    return number * power( number, power -1)
    
}

power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16