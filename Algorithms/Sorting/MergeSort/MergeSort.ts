function mergeSort(numbers: number[]): number[] {

    // If only one element - already sorted.
    if (numbers.length === 1) {
        return numbers;
    }

    // First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    const iMiddle = Math.floor(numbers.length/2);

    const leftArray = [];
    numbers.forEach((el, index) => {
        if (0 <= index && index < iMiddle) {
            leftArray.push(el);
        }
    });

    const rightArray = [];
    numbers.forEach((el, index) => {
        if (iMiddle <= index && index <= numbers.length) {
            rightArray.push(el);
        }
    });

    const left = mergeSort(leftArray);
    const right = mergeSort(rightArray);

    // Recursively sort both sublists.
    return compareAndMerge(left, right);
}

function compareAndMerge(left: number[], right: number[]): number[] {
    let ordered = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            ordered.push(left[leftIndex]);
            leftIndex++;
        } else {
            ordered.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Going through leftovers
    left.forEach((el, index) => {
        if (leftIndex <= index && index <= left.length) {
            ordered.push(el);
        }
    });

    right.forEach((el, index) => {
        if (rightIndex <= index && index <= right.length) {
            ordered.push(el);
        }
    });

    return ordered;
}

const unsortedArrayOfNumbers = [5, 15, 14, 1, 26, 0, 99];
console.log(mergeSort(unsortedArrayOfNumbers));