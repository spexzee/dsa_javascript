var expect = function (val) {
    return {
        toBe: function (val2) {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};


console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(4));
// console.log(expect(5).toBe(4));
// console.log(expect(5).notToBe(5));

