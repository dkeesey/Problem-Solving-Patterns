/* genAnagrams
takes a string and returns an array of all anagrams of that string */

let anagrams = []

let genAnagrams = ( word, anagram = '') => {
  if (!word){ 
    //if word is empty, anagram is complete, so add anagram to the anagrams array
    anagrams.push(anagram)
    return 
  }

  for (let i=0; i < word.length; i++) {
    //console.log(anagram, word[i], i);
    anagram += word[i];

    console.log(word, word.slice(0, i), word.slice( i+1 ), );  
    genAnagrams(word.slice(0, i) + word.slice( i+1 ), anagram);
    
    anagram = anagram.slice(0, anagram.length -1);
  }
  return anagram;
};

genAnagrams('ABC');
console.log(anagrams);