function insertionSort(numbers: number[]): number[] {
    let sortedNumbers = numbers;

    for (let i = 1; i < sortedNumbers.length; i++) {
        let value = sortedNumbers[i];
        let position = i;

        while (position > 0 && sortedNumbers[position - 1] > value) {
            numbers[position] = numbers[position - 1];
            position -= 1;
        }

        numbers[position] = value;
    }

    return sortedNumbers;
}

const unsortedArrayToSort = [5, 15, 14, 1, 26, 0, 99];
console.log(insertionSort(unsortedArrayToSort));
