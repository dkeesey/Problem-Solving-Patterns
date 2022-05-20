function fibonacciSequece(num) {
    let fibonacciSeq = [0, 1, 1, 2]; 

    function buildFibonacciToNum(num) {
        if (num === 1 || num === 2 || num ===3) {
            return fibonacciSeq; 
        }
        if (num > 3) {
            for (let i = 3; i <= num; i++){
                fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
            }
        }
    }

    buildFibonacciToNum(num);

    return [fibonacciSeq[num], fibonacciSeq];
}

fibonacciSequece(10);