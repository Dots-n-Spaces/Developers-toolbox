// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

console.log("Method 1");
function isAPermutations1(first: string, second: string): boolean {
    return first.split("").sort().join("") === second.split("").sort().join("");
}

console.log(isAPermutations1("abcdef", "fedabc")); // true
console.log(isAPermutations1("abcdef", "abcdef")); // true
console.log(isAPermutations1("abcdef", "abc")); // false
console.log(isAPermutations1("abcdef", "abcdefgh")); // false
console.log(isAPermutations1("def", "abcdefgh")); // false

console.log("Method 2");
function isAPermutations2(first: string, second: string): boolean {
    if (first.length !== second.length) {
        return false;
    }

    const fistStringArray: number[] = [];
    first.split("").forEach((el) => {
        if (fistStringArray[el] !== undefined)  {
            fistStringArray[el] += 1;
        } else {
            fistStringArray[el] = 1;
        }
    });

    for (let i = 0; i < second.length; i++) {
        if (fistStringArray[second[i]] !== undefined && fistStringArray[second[i]] !== 0) {
            fistStringArray[second[i]] -= 1;
        } else {
            return false
        }
    }

    return true;
}

console.log(isAPermutations2("abcdef", "fedabc")); // true
console.log(isAPermutations2("abcdef", "abcdef")); // true
console.log(isAPermutations2("abcdef", "abc")); // false
console.log(isAPermutations2("abcdef", "abcdefgh")); // false
console.log(isAPermutations2("def", "abcdefgh")); // false