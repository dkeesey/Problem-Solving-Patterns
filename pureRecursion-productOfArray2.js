
function productOfArray(arr){
   if(arr.length === 0) {
       return 1; //end with multiplying * 1
   } 
   //multiply value at 0th position in array times next 0th position in array after array.slice(1); 
   return arr[0] * productOfArray(arr.slice(1)); 
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60