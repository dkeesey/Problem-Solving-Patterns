function sumRange(num){
    if (num < 1) { return 0 };
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(4);
sumRange(1);
sumRange(2);
sumRange(0);
sumRange(-4);
