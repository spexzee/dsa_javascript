var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let xStr = Math.abs(x).toString();
    let res = Number((x < 0 ? '-' : '') + xStr.split('').reverse().join(''));
    if (res > INT_MAX || res < INT_MIN) {
        return 0;
    } else {
        return res;
    }
};


console.log(reverse(-654));
console.log(reverse(654));
console.log(reverse(1200));
console.log(reverse(98768767655));