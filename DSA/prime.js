function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));

// TC = O(sqrt(n))

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
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47