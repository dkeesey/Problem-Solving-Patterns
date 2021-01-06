function charCount(str){
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/){
            obj[char] = ++obj[char]|| 1;
        }
    }
    return obj
} 