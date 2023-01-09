let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, b: 2};

let result = Object.entries(obj1).every(([key, value]) => obj2[key] === value);
console.log(result);  

