// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function isPermutationOfPolindrom1(phrase: string): boolean {
    const map: number[] = [];

    phrase.split("").forEach((character) => {
        const el = character.charCodeAt(0);
        if (map[el] !== undefined) {
            map[el] += 1;
        } else {
            map[el] = 1;
        }
    });

    let polindrom = true;
    map.forEach((el) => {
        if (el % 2 != 0) {
            polindrom = false;
            return;
        }
    });

    return polindrom;
}

console.log(isPermutationOfPolindrom1("abccba")); // true
console.log(isPermutationOfPolindrom1("acca")); // true
console.log(isPermutationOfPolindrom1("abba")); // true

console.log(isPermutationOfPolindrom1("abcba")); // false
console.log(isPermutationOfPolindrom1("abca")); // false