let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };

let result = Object.entries(obj1).every(([key, value]) => obj2[key] === value);
console.log(result);

// Object.entries returns an array of entries, and these are indexed in order;
// if obj2 = {b:2, a:1}, reversed order, the indexes would be different, but the .every() 
// comparison would still return true, because the comparison is of the Key values, 
// which are still the same, even though they occur in different order.
