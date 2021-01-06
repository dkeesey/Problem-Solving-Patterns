//expect array of numbers, and num of numbers to sum
function maxSubarraySum(arr, num){
    let maxSum = 0, tempsum = 0;
    if (arr.length < num) { return null}

    //calc first maxSum
    for (let i = 0; i < num; i++){
        maxSum += arr[i]; 
    }
    
    tempsum = maxSum;
    //cal all consequetive tempSums by subtracting oldest index value and adding next index value 
    //if new tempSum is biggest, make it the new maxSum
    for (let i = num; i < arr.length; i++){
        tempsum = tempsum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempsum);
    }
    return maxSum;
}