function quickSortLomuto(numbers: number[], left: number, right: number): number[] {

    // Recursive, in-place version that uses Lomuto's scheme.
    if (left < right) {
        let p = lomutoParition(numbers, left, right);

        quickSortLomuto(numbers, left, p - 1);
        quickSortLomuto(numbers, p + 1, right);
    }

    return numbers;
}

function lomutoParition(numbers: number[], left: number, right: number): number {

    // We use the biggest item as the pivot.
    const pivotValue = numbers[right];

    // And begin from the smallest left value.
    let storeIndex = left;

    // Partitioning array into four regions:
    //   [low..i] where values are <= than pivot
    //   [i+1..j-1] where values are > than pivot
    //   [j..high-1] values that we haven't looked at yet
    //   [high] is the pivot.
    for (let i = left; i < right; i++) {
        if (numbers[i] < pivotValue) {
            [numbers[i], numbers[storeIndex]] = [numbers[storeIndex], numbers[i]];
            storeIndex++;
        }
    }

    [numbers[storeIndex], numbers[right]] = [numbers[right], numbers[storeIndex]];

    return storeIndex;
}

const arrayToSort = [5, 15, 14, 1, 26, 0, 99];
console.log(quickSortLomuto(arrayToSort, 0, arrayToSort.length - 1));