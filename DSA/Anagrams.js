const isAnagram = function (s, t) {
    const sl = s.toLowerCase();
    const tl = t.toLowerCase();

    const sortedSL = sl.split("").sort().join("");
    const sortedTL = tl.split("").sort().join("");

    if (sortedSL === sortedTL) {
        return true;
    } else {
        return false;
    }

};

console.log(isAnagram("Abu","Bua"));