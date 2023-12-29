const ReverseString = (str) => {
    let arr = str.split("");
    let revStr = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        revStr+= arr[i];
    }
    return revStr;
}
let str = "Abu"
 let result = ReverseString(str)
console.log(result);
