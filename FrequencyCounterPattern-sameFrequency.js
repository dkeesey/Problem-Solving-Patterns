//test whether num1 and num2 have the same single digit numbers and frequency of single digit numbers

function sameFrequency (num1, num2){
  //convert number inputs to strings
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  //test that the two strings have the same number of characters
  if(num1Str.length !== num2str.length){
    return [false, num1Str, num2Str]; 

  }
  
  //make arrays of characters
  let str1Arr = num1Str.split('');
  let str2Arr = num2Str.split('');
  
  //make character frequency hash ojbects
  let charFreq1 = {};
  let charFreq2 = {};
  
  //create character frequency hash for num1
  for (let i=0; i < str1Arr.length; i++)  {
    //set object keys to mumStr array values ; initialize or incrmement
    charFreq1[str1Arr[i]] = (charFreq1[str1Arr[i]] || 0) +1;
  }

  //create character frequency hash object setting keys to array values for for num2
  for (let i=0; i < str2Arr.length; i++) {
    //set character hash object key value to num-string array value;
    // initialize at zero (+1) or increment (+1) 
    charFreq2[str2Arr[i]] = (charFreq2[str2Arr[i]] || 0) +1;
  }
  
  for (let char in charFreq1) {
    if (charFreq1[char] !== charFreq2[char]) {
      return [false, charFreq1, charFreq2];
    }
  }
  return [true,str1Arr, charFreq1, str2Arr, charFreq2];
}
