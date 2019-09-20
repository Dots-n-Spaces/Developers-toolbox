// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function checkForIfStringHasUniqChars(string: string): boolean {
    const values: boolean[] = [];
    for(let i = 0; i  < string.length; i++) {
        if (values[string[i]] === true ) {
            return false;
        } else {
            values[string[i]] = true;
        }
    }


    return true;
}

console.log(checkForIfStringHasUniqChars("abcd")); // true
console.log(checkForIfStringHasUniqChars("abcdefg")); // true
console.log(checkForIfStringHasUniqChars("abcbde")); // false
console.log(checkForIfStringHasUniqChars("abcdeffg")); // false