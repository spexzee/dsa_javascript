// without recursion
function factorial(n){
    let fact = 1;
    for(let i=2;i<=n;i++){
        fact*=i; // fact = fact * i
    }
    return fact;
}
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));


// TC = O(n)