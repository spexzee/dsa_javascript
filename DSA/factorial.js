// using recursion
function factorial(range) {
    if(range === 0){
      return 1;
    }else{
      return range * factorial(range - 1);
    }
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(9));

// TC = O(n)
