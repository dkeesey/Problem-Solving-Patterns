// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

const solution = function(sequence) {
    let i = 0;
    let j = 1;
    let k = 2;
    let removedCount = 0;
    while (i < sequence.length - 2 && removedCount < 2) {
        if (sequence[i] < sequence[j] && sequence[j] < sequence[k]) {
            i += 1;
            j += 1;
            k += 1;
        } else if (sequence[i] < sequence[j] || sequence[i] < sequence[k] || sequence[j] < sequence[k] ) {
            removedCount += 1;
            i += 1;
            j += 1;
            k += 1;
        } else {
            return false;
        }
    }
    return true;

};    


solution([1, 3, 2, 1]);
solution([1, 2, 5, 3, 5]);
solution([1, 2, 1, 2]);