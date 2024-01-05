function fibonacci(range) {
    let fib = [0, 1];
    for (let i = 2; i < range; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(9));

// TC = O(n)
