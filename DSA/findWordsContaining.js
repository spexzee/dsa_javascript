let words = ["leet","code"];
let x = "e";
var findWordsContaining = function(words, x) {
    let arr = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            arr.push(i);
        }
    }
    return arr;
};;
console.log(findWordsContaining(words, x ));
