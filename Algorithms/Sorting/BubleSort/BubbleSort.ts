function bubbleSort(numbers: number[]): number[] {
    let sortedNumbers = numbers;

    for (let i = 0; i < sortedNumbers.length; i++) {
        for (let j = 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[j - 1] > sortedNumbers[j]) {
                const temp = sortedNumbers[j - 1];
                sortedNumbers[j - 1] = sortedNumbers[j];
                sortedNumbers[j] = temp;
            }
        }
    }

    return sortedNumbers;
}

const numbers = [5, 15, 14, 1, 26, 0, 99];
console.log(bubbleSort(numbers));
