function sumRange(num){
   if(num < 1) return 0;
   
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}
module.exports = sumRange;
sumRange(4)

                  
                                   
                                