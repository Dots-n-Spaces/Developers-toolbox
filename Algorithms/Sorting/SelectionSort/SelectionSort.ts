function selectionSort(numbers: number[]): number[] {
    let sortedNumbers = numbers;

    for (let i = 0; i < sortedNumbers.length - 1; i++) {
        let minValueIndex = i;

        for (let j = i + 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[j] < sortedNumbers[minValueIndex]) {
                minValueIndex = j;
            }
        }

        const temp = sortedNumbers[minValueIndex];
        sortedNumbers[minValueIndex] = sortedNumbers[i];
        sortedNumbers[i] = temp;
    }

    return sortedNumbers;
}

const unsortedArray = [5, 15, 14, 1, 26, 0, 99];
console.log(selectionSort(unsortedArray));