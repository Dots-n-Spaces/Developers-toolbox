// 1.3 URLify: Write a method to replace all spaces in a string with '%2e: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.

function urlify(input: string): string {
    return input.split("").map((el) => {
        return el === " " ? "%20" : el;
    }).join("");
}

console.log(urlify("Mr John Smith   "));
console.log(urlify("Mr John Smith"));
console.log(urlify("MrSmith"));
console.log(urlify(" Mr.Smith"));