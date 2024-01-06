const isPalindrome = (str) => {
    const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = normalized.length;

    for (let i = 0; i < length / 2; i++) {
        if (normalized[i] !== normalized[length - i - 1]) {
            return false;
        }
    }

    return true;

};
let str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));