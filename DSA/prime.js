function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}

console.log(isPrime(10));

function printAllPrime(n) {
    let arr = [];
    for (i = 2; i <= n; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(`Array of prime numbers from 1 to ${n}:`);
    console.log(arr);

}
printAllPrime(50);