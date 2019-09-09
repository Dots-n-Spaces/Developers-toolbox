func insertionSort(numbers: [Int]) -> [Int] {
    var sortedNumbers = numbers
    
    for i in 0..<sortedNumbers.count {
        let val = sortedNumbers[i]

        for j in 0..<i {
            if sortedNumbers[j] > sortedNumbers[i] {
                sortedNumbers.remove(at: i)
                sortedNumbers.insert(val, at: j)
            }
        }
    }
    
    return sortedNumbers
}

let numbers = [5, 15, 14, 1, 26, 0, 99]

print(insertionSort(numbers: numbers))
