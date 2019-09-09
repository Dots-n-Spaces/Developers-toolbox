func bubbleSort(numbers: [Int]) -> [Int] {
    var sortedNumbers = numbers
    
    for i in 0..<sortedNumbers.count {
        for j in 1..<sortedNumbers.count-i {
            if sortedNumbers[j - 1] > sortedNumbers[j] {
                sortedNumbers.swapAt(j - 1, j)
            }
        }
    }
    
    return sortedNumbers
}

let numbers = [5, 15, 14, 1, 26, 0, 99]
print(bubbleSort(numbers: numbers))
