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

function insertionSort2(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        for (let sortedJ = 0; sortedJ <= i; sortedJ++) {
            if (arr[i] < arr[sortedJ]) {
                const t = arr[i];
                arr.splice(i, 1);
                arr.splice(sortedJ, 0, t);
            }
        }
    }

    return arr;
}

const unsortedArrayToSort = [5, 15, 14, 1, 26, 0, 99];
console.log(insertionSort(unsortedArrayToSort));
