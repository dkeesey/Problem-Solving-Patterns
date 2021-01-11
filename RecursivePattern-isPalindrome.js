

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    function reverse(str) {
      if (str === "") return "";
      else 
      return reverse(str.substr(1)) + str.charAt(0);
    }
  
    if(str === reverse(str)){
        return true;
    } 
    
    return false; 
    
  }

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false