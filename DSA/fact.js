// without recursion
function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact*=i; // fact = fact * i
    }
    return fact;
}
console.log(factorial(5));
