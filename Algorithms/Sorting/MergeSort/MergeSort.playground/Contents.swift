func mergeSort(numbers: [Int]) -> [Int] {
    // If only one element - already sorted.
    if numbers.count == 1 {
        return numbers
    }

    // First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    let iMiddle = numbers.count/2
    let left = mergeSort(numbers: Array(numbers[0..<iMiddle]))
    let right = mergeSort(numbers: Array(numbers[iMiddle..<numbers.count]))

    // Recursively sort both sublists.
    return compareAndMerge(left: left, right: right)
}

func compareAndMerge(left: [Int], right:[Int]) -> [Int] {
    var leftIndex = 0
    var rightIndex = 0
    var ordered: [Int] = []

    while leftIndex < left.count && rightIndex < right.count {
        if left[leftIndex] < right[rightIndex] {
            ordered.append(left[leftIndex])
            leftIndex += 1
        } else {
            ordered.append(right[rightIndex])
            rightIndex += 1
        }
    }

    // Going through leftovers
    ordered += Array(left[leftIndex..<left.count])
    ordered += Array(right[rightIndex..<right.count])

    return ordered
}

var numbers = [5, 15, 14, 1, 26, 0, 99];

print(mergeSort(numbers: numbers))
